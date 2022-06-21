import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { deleteUserFavoriteDef, getUserByIdDef, postSearchHistoryDef, postUserFavoriteDef } from '../api-defs';
import { User, UserIdQuery } from '../types';
import { UserCommonBody } from '../types/body';
import { convertCommonUsersApi, convertUserApi, UserCommons } from '../types/user';
import authFetchBase from '../utils/authFetchBase';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: authFetchBase,
    endpoints: (builder) => ({
        getUserById: builder.query<User, UserIdQuery>({
            query: getUserByIdDef,
            transformResponse: convertUserApi,
        }),
        postUserFavorite: builder.mutation<UserCommons, UserIdQuery & UserCommonBody>({
            query: postUserFavoriteDef,
            transformResponse: convertCommonUsersApi,
        }),
        deleteUserFavorite: builder.mutation<UserCommons, UserIdQuery & UserCommonBody>({
            query: deleteUserFavoriteDef,
            transformResponse: convertCommonUsersApi,
        }),
        postSearchHistory: builder.mutation<UserCommons, UserIdQuery & UserCommonBody>({
            query: postSearchHistoryDef,
            transformResponse: convertCommonUsersApi,
        }),
    }),
});

export const {
    useGetUserByIdQuery,
    usePostUserFavoriteMutation,
    useDeleteUserFavoriteMutation,
    usePostSearchHistoryMutation,
} = usersApi;
