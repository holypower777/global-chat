import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { SNACKBAR_TYPE } from 'platform-components';
import { clearUser } from 'twitch-chat/src/store/slices/user';
import { addNotification } from 'twitch-chat/src/utils';

import { authRefreshTokenDef, authTwitchLogoutDef, baseAuthUrl } from '../api-defs';
import { convertTokenResponseApi, TokenResponse } from '../types/auth';
import { AuthBody } from '../types/body';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseAuthUrl }),
    endpoints: (builder) => ({
        authLogout: builder.mutation<void, AuthBody>({
            query: authTwitchLogoutDef,
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                try {
                    const { meta } = await queryFulfilled;
                    if (meta?.response?.status === 204) {
                        dispatch(clearUser());
                        addNotification({
                            id: 'notification.logout',
                            type: SNACKBAR_TYPE.SUCCESS,
                            autoHideDuration: 4000,
                        }, dispatch);
                    }
                } catch (error) {
                    //TODO: notification
                }
            },
        }),
        authRefreshToken: builder.query<TokenResponse, AuthBody>({
            query: authRefreshTokenDef,
            transformResponse: convertTokenResponseApi,
        }),
    }),
});

export const {
    useAuthLogoutMutation,
    useAuthRefreshTokenQuery,
} = authApi;
