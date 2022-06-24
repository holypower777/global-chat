/* eslint-disable camelcase */
import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { decode } from 'jws';
import { NOTIFICATIONS_DURATION, SETTINGS } from 'platform-components';
import { updateSetting } from 'twitch-chat/src/store/slices/settings';
import { RootState } from 'twitch-chat/src/store/store';
import { addNotification } from 'twitch-chat/src/utils';

import { authRefreshTokenDef, baseAuthUrl, baseUrl } from '../api-defs';
import { BackendErrorResponse } from '../types/error';

const prepareHeaders = (headers: Headers, { getState }: { getState: () => unknown }) => {
    const token = (getState() as RootState).settings.at;

    if (token) {
        headers.set('Authorization', token);
    }
    return headers;
};

const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders,
});
const baseAuthQuery = fetchBaseQuery({ 
    baseUrl: baseAuthUrl,
    prepareHeaders,
});

const authFetchBase: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const access_token = (api.getState() as RootState).settings.at;
    const refresh_token = (api.getState() as RootState).settings.rt;

    if (!access_token && !refresh_token) {
        return await baseQuery(args, api, extraOptions);
    }

    const { payload: { exp, user_id } } = decode(access_token || '');

    if (access_token && exp < Math.floor(Date.now() / 1000)) {
        try {
            const { data, error } = await baseAuthQuery(
                {
                    url: authRefreshTokenDef(),
                    method: 'POST',
                    body: {
                        user_id,
                        refresh_token,
                    },
                },
                api,
                extraOptions,
            );
    
            if (data) {
                api.dispatch(updateSetting({
                    key: SETTINGS.ACCESS_TOKEN, //@ts-ignore
                    value: data.access_token,
                }));
                api.dispatch(updateSetting({
                    key: SETTINGS.REFRESH_TOKEN, //@ts-ignore
                    value: data.refresh_token,
                }));
            }

            if (!data && !error) {
                addNotification({
                    id: 'notification.commonError',
                    autoHideDuration: NOTIFICATIONS_DURATION.S,
                }, api.dispatch);
            }

            if (error) {
                addNotification({
                    id: (error.data as BackendErrorResponse).error.intlId,
                    autoHideDuration: NOTIFICATIONS_DURATION.S,
                }, api.dispatch);
            }
        } catch (error) {
            addNotification({
                id: 'notification.commonError',
                autoHideDuration: NOTIFICATIONS_DURATION.S,
            }, api.dispatch);
        }
    }

    return await baseQuery(args, api, extraOptions);
};

export default authFetchBase;
