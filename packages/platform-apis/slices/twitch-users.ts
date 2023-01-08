import { createApi } from '@reduxjs/toolkit/query/react';

import {
    getDisplayNameSuggestionsDef,
    getTwitchUserByDisplayNameDef,
    getTwitchUserChannelsDef,
    getTwitchUserStatsDef,
    getTwitchChannelStatsDef,
    getRandomTwitchUserDef,
} from '../api-defs';
import authFetchBase from '../bases/authFetchBase';
import mockFetchBase from '../bases/mockFetchBase';
import { ChannelIdQuery, DisplayNameQuery, UserIdQuery } from '../types/query';
import { TwitchUser, TwitchUserStats } from '../types/twitch-user';
import { TwitchUserChannel, TwitchUserChannelStats } from '../types/twitch-user-channel';
import convertApiToDTO from '../utils/convertApiToDTO';

interface TwitchUserChannelsResponseType {
    items: Array<TwitchUserChannel>;
    mostEngagment: Array<TwitchUserChannel>;
    lastActive: Array<TwitchUserChannel>;
}

export const twitchUsersApi = createApi({
    reducerPath: 'twitchUsersApi',
    baseQuery: (args, api) => mockFetchBase(args, api, { defaultBase: authFetchBase }),
    endpoints: (builder) => ({
        getTwitchUser: builder.query<TwitchUser, DisplayNameQuery>({
            query: getTwitchUserByDisplayNameDef,
            transformResponse: (response) => {
                return convertApiToDTO<TwitchUser>(response, ['createdAt']);
            },
            onQueryStarted: async (id, { queryFulfilled }) => {
                try {
                    // TODO: dispatch loading true
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { data } = await queryFulfilled;
                } catch (error) {
                    console.error(error);
                } finally {
                    // TODO: dispatch loading false
                }
            },
        }),
        getTwitchUserChannels: builder.query<TwitchUserChannelsResponseType, UserIdQuery>({
            query: getTwitchUserChannelsDef,
            transformResponse: (response) =>
                convertApiToDTO<TwitchUserChannelsResponseType>(response, [
                    'firstMsgDate',
                    'lastMsgDate',
                ]),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
        getTwitchUserStats: builder.query<TwitchUserStats, UserIdQuery>({
            query: getTwitchUserStatsDef,
            transformResponse: (response) => convertApiToDTO<TwitchUserStats>(response),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
        getTwitchChannelStats: builder.query<TwitchUserChannelStats, ChannelIdQuery>({
            query: getTwitchChannelStatsDef,
            transformResponse: (response) => convertApiToDTO<TwitchUserChannelStats>(response),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
        getDisplayNameSuggestions: builder.query<Array<string>, DisplayNameQuery>({
            query: getDisplayNameSuggestionsDef,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
        getRandomTwitchUser: builder.query<TwitchUser, void>({
            query: getRandomTwitchUserDef,
            keepUnusedDataFor: 0,
            transformResponse: (response) => convertApiToDTO<TwitchUser>(response, ['createdAt']),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
    }),
});

export const {
    useGetTwitchUserQuery,
    useLazyGetTwitchUserChannelsQuery,
    useLazyGetTwitchUserStatsQuery,
    useLazyGetTwitchChannelStatsQuery,
    useLazyGetDisplayNameSuggestionsQuery,
    useLazyGetRandomTwitchUserQuery,
} = twitchUsersApi;
