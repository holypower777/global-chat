import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { authRefreshTokenDef, authTwitchLogoutDef, baseUrl } from '../api-defs';
import { convertTokenResponseApi, TokenResponse } from '../types/auth';
import { AuthBody } from '../types/body';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        authLogout: builder.query<void, AuthBody>({
            query: authTwitchLogoutDef,
        }),
        authRefreshToken: builder.query<TokenResponse, AuthBody>({
            query: authRefreshTokenDef,
            transformResponse: convertTokenResponseApi,
        }),
    }),
});

export const {
    useAuthLogoutQuery,
    useAuthRefreshTokenQuery,
} = authApi;
