import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query';

import { RootState } from 'twitch-chat/src/store/store';

import ApiEndpointsMode from '../api-endpoints-mode';
import generateMock from '../mocks';

interface ExtraOptions {
    defaultBase: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>;
}

const mockFetchBase: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    ExtraOptions
> = async (args, api, extraOptions) => {
    if (process.env.NODE_ENV === 'production' || !ApiEndpointsMode[api.endpoint]) {
        return extraOptions.defaultBase(args, api, extraOptions);
    }

    return fetchBaseQuery({
        fetchFn: () => {
            return new Promise((resolve, _) => {
                const isArgsObject = args === Object(args);
                // @ts-ignore
                const url = isArgsObject ? args.url : args;
                // @ts-ignore
                const body = isArgsObject ? args.body : {};
                const state = api.getState() as RootState;
                const accessToken = state.settings.at;
                const mock = generateMock(api.endpoint, url, body, accessToken);

                setTimeout(
                    () =>
                        resolve(
                            new Response(
                                new Blob([JSON.stringify(mock, null, 2)], {
                                    type: 'application/json',
                                })
                            )
                        ),
                    200
                );
            });
        },
    })(args, api, extraOptions);
};
export default mockFetchBase;
