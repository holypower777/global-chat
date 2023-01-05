import { randNumber, randUuid } from '@ngneat/falso';
import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query';

import { RootState } from 'twitch-chat/src/store/store';

import generateMock from '../mocks';
import endpointToMock from '../mocks/endpointToMock';

interface ExtraOptions {
    defaultBase: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>;
}

const mockFetchBase: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    ExtraOptions
> = async (args, api, extraOptions) => {
    if (
        process.env.NODE_ENV === 'production' ||
        (!process.env.MOCK_ENABLED && !endpointToMock[api.endpoint].enabled)
    ) {
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
                const responseTime = randNumber({ min: 120, max: 500 });
                const status = endpointToMock[api.endpoint].status ?? 200;
                const responseBody =
                    status === 204
                        ? null
                        : new Blob([JSON.stringify(mock, null, 2)], {
                              type: 'application/json',
                          });

                setTimeout(
                    () =>
                        resolve(
                            new Response(responseBody, {
                                headers: {
                                    'X-Request-Id': randUuid(),
                                    'X-Response-Time': responseTime.toString(),
                                },
                                status,
                            })
                        ),
                    responseTime
                );
            });
        },
    })(args, api, extraOptions);
};
export default mockFetchBase;
