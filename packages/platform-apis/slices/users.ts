import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { setUser, updateUserFavorites, updateUserHistory } from 'twitch-chat/src/store/slices/user';

import { deleteUserFavoriteDef, getUserByIdDef, postSearchHistoryDef, postUserFavoriteDef } from '../api-defs';
import { TokenQuery, User, UserIdQuery } from '../types';
import { UserCommonBody } from '../types/body';
import { convertCommonUsersApi, convertUserApi, UserCommons } from '../types/user';
import authFetchBase from '../utils/authFetchBase';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: authFetchBase,
    endpoints: (builder) => ({
        getUserById: builder.query<User, UserIdQuery & TokenQuery>({
            query: getUserByIdDef,
            transformResponse: convertUserApi,
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled;

                dispatch(setUser(data));
            },
        }),
        postUserFavorite: builder.mutation<UserCommons, UserIdQuery & UserCommonBody>({
            query: postUserFavoriteDef,
            transformResponse: convertCommonUsersApi,
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled;

                dispatch(updateUserFavorites(data));
            },
        }),
        deleteUserFavorite: builder.mutation<UserCommons, UserIdQuery & UserCommonBody>({
            query: deleteUserFavoriteDef,
            transformResponse: convertCommonUsersApi,
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled;

                dispatch(updateUserFavorites(data));
            },
        }),
        postSearchHistory: builder.mutation<UserCommons, UserIdQuery & UserCommonBody>({
            query: postSearchHistoryDef,
            transformResponse: convertCommonUsersApi,
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled;

                dispatch(updateUserHistory(data));
            },
        }),
    }),
});

export const {
    useLazyGetUserByIdQuery,
    usePostUserFavoriteMutation,
    useDeleteUserFavoriteMutation,
} = usersApi;
