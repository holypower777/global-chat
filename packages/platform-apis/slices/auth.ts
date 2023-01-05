import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { clearUser } from 'twitch-chat/src/store/slices/user';
import { addNotification } from 'twitch-chat/src/utils';

import { NOTIFICATIONS_DURATION, SNACKBAR_TYPE } from 'platform-components';

import { authTwitchLogoutDef, baseAuthUrl } from '../api-defs';
import { AuthBody } from '../types/body';
import mockFetchBase from '../utils/mockFetchBase';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: (args, api) =>
        mockFetchBase(args, api, { defaultBase: fetchBaseQuery({ baseUrl: baseAuthUrl }) }),
    endpoints: (builder) => ({
        authLogout: builder.mutation<void, AuthBody>({
            query: authTwitchLogoutDef,
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                const { meta } = await queryFulfilled;

                // @ts-ignore
                if (meta?.response?.status === 204) {
                    dispatch(clearUser());
                    addNotification(
                        {
                            id: 'notification.logout',
                            type: SNACKBAR_TYPE.SUCCESS,
                            autoHideDuration: NOTIFICATIONS_DURATION.S,
                        },
                        dispatch
                    );
                }
            },
        }),
    }),
});

export const { useAuthLogoutMutation } = authApi;
