import { createApi } from '@reduxjs/toolkit/query/react';
import { NOTIFICATIONS_DURATION, SEARCH_TYPE, SETTINGS, SNACKBAR_TYPE } from 'platform-components';
import { setChannels, setSelectedChannel } from 'twitch-chat/src/store/slices/channels';
import { setMessagesDates } from 'twitch-chat/src/store/slices/messages';
import { updateSetting } from 'twitch-chat/src/store/slices/settings';
import { clearSuggestions, setIsSuggestionsLoading, setIsUserWithChannelsFetching, setMostActiveChannel, setSuggestions, setTwitchUser } from 'twitch-chat/src/store/slices/twitch-user';
import { RootState } from 'twitch-chat/src/store/store';
import { addNotification, findMostFrequestChannel } from 'twitch-chat/src/utils';

import {
    getTwitchUserWithChannelsByUsernameDef,
    getRandomTwitchUser,
    getDisplayNameSuggestionsDef,
} from '../api-defs';
import { convertCommonUserToAPI } from '../types';
import { DisplayNameQuery, GetTwitchUserQuery } from '../types/query';
import { convertTwitchUserApi, TwitchUser, TwitchUserAPI } from '../types/twitch-user';
import { convertTwitchUserChannelsApi, TwitchUserChannels, TwitchUserChannelsAPI } from '../types/twitch-user-channel';
import authFetchBase from '../utils/authFetchBase';

import { usersApi } from './users';

interface TwitchUserWithChannelsResponseTypeRaw {
    user: TwitchUserAPI;
    channels: TwitchUserChannelsAPI;
    messages_dates: Array<string>;
}

interface TwitchUserWithChannelsResponseType {
    user: TwitchUser;
    channels: TwitchUserChannels;
    messagesDates: Array<Date>;
}

type TwitchUserResponseType = TwitchUser;

export const twitchUsersApi = createApi({
    reducerPath: 'twitchUsersApi',
    baseQuery: authFetchBase,
    endpoints: (builder) => ({
        getRandomTwitchUser: builder.query<TwitchUserResponseType, void>({
            query: getRandomTwitchUser,
            keepUnusedDataFor: 0,
            transformResponse: convertTwitchUserApi,
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                await queryFulfilled;
                dispatch(updateSetting({ key: SETTINGS.USER_TYPE, value: SEARCH_TYPE.USERNAME }));
            },
        }),
        getTwitchUserWithChannelsByUsername:
            builder.query<TwitchUserWithChannelsResponseType, GetTwitchUserQuery>({
                query: getTwitchUserWithChannelsByUsernameDef,
                transformResponse: (response: TwitchUserWithChannelsResponseTypeRaw) => {
                    return {
                        user: convertTwitchUserApi(response.user),
                        channels: convertTwitchUserChannelsApi(response.channels),
                        messagesDates: response.messages_dates ? response.messages_dates.map((e) => new Date(e)) : [],
                    };
                },
                onQueryStarted: async (id, { dispatch, getState, queryFulfilled }) => {
                    dispatch(setIsUserWithChannelsFetching(true));
                    dispatch(setSelectedChannel(null));

                    const { meta, data } = await queryFulfilled;
                    //@ts-ignore
                    const responsesLeft = meta.response.headers.get('Ratelimit-Remaining');
                    
                    if (responsesLeft === 1) {
                        addNotification({
                            id: 'notification.oneRequestLeft',
                            type: SNACKBAR_TYPE.WARNING,
                            autoHideDuration: NOTIFICATIONS_DURATION.M,
                        }, dispatch);
                    }

                    dispatch(setTwitchUser(data.user));
                    dispatch(setMostActiveChannel(findMostFrequestChannel(data.channels)));
                    dispatch(setChannels(data.channels));
                    dispatch(setMessagesDates(data.messagesDates));

                    const userId = (getState() as RootState).user.userId;

                    if (userId !== 0) {
                        dispatch(usersApi.endpoints.postSearchHistory.initiate({
                            userId,
                            body: convertCommonUserToAPI({
                                userId: data.user.userId,
                                displayName: data.user.displayName,
                                profileImageUrl: data.user.profileImageUrl,
                            }),
                        }));
                    }

                    dispatch(setIsUserWithChannelsFetching(false));
                },
            }),
        getDisplayNameSuggestions:
            builder.query<Array<string>, DisplayNameQuery>({
                query: getDisplayNameSuggestionsDef,
                onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                    dispatch(setIsSuggestionsLoading(true));
                    dispatch(clearSuggestions());
                    const { data } = await queryFulfilled;

                    dispatch(setSuggestions(data));
                    dispatch(setIsSuggestionsLoading(false));
                },
            }),
    }),
});

export const {
    useLazyGetTwitchUserWithChannelsByUsernameQuery,
    useLazyGetRandomTwitchUserQuery,
    useLazyGetDisplayNameSuggestionsQuery,
} = twitchUsersApi;
