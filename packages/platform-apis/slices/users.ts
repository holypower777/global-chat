import { createApi } from '@reduxjs/toolkit/dist/query/react';

import {
    deleteUserFavoriteDef,
    getUserByIdDef,
    postSearchHistoryDef,
    postUserFavoriteDef,
} from '../api-defs';
import { TwitchUsersCommon, User, UserIdQuery } from '../types';
import { UserCommonBody } from '../types/body';
import authFetchBase from '../utils/authFetchBase';
import convertApiToDTO from '../utils/convertApiToDTO';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: authFetchBase,
    endpoints: (builder) => ({
        getUserById: builder.query<User, UserIdQuery>({
            query: getUserByIdDef,
            transformResponse: (response) =>
                convertApiToDTO<User>(response, ['paidUntil', 'joinedAt']),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
        postUserFavorite: builder.mutation<TwitchUsersCommon, UserIdQuery & UserCommonBody>({
            query: postUserFavoriteDef,
            transformResponse: (response) => convertApiToDTO<TwitchUsersCommon>(response),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
        deleteUserFavorite: builder.mutation<TwitchUsersCommon, UserIdQuery & UserCommonBody>({
            query: deleteUserFavoriteDef,
            transformResponse: (response) => convertApiToDTO<TwitchUsersCommon>(response),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
        postSearchHistory: builder.mutation<TwitchUsersCommon, UserIdQuery & UserCommonBody>({
            query: postSearchHistoryDef,
            transformResponse: (response) => convertApiToDTO<TwitchUsersCommon>(response),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
    }),
});

export const {
    useLazyGetUserByIdQuery,
    usePostUserFavoriteMutation,
    useDeleteUserFavoriteMutation,
    usePostSearchHistoryMutation,
} = usersApi;
