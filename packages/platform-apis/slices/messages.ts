import { createApi } from '@reduxjs/toolkit/query/react';
import { pushMessages, setIsMessagesFetching } from 'twitch-chat/src/store/slices/messages';

import { getMessagesByUserIdAndChannelIdDef } from '../api-defs';
import { convertMessagesApi, Messages, MessagesAPI } from '../types/messages';
import { GetTwitchUserWithChannelsQuery } from '../types/query';
import authFetchBase from '../utils/authFetchBase';

interface MessagesOfChannelsResponseCommonType {
    dateFrom: string;
    dateTo: string;
    limit: number;
    next: string;
    offset: string;
    previous: string;
    sort: 'asc' | 'desc';
    total: number;
}

interface MessagesOfChannelsResponseTypeRaw extends MessagesOfChannelsResponseCommonType {
    items: MessagesAPI;
}

interface MessagesOfChannelsResponseType extends MessagesOfChannelsResponseCommonType {
    items: Messages;
}

export const messagesApi = createApi({
    reducerPath: 'messagesApi',
    baseQuery: authFetchBase,
    endpoints: (builder) => ({
        getMessagesByUserIdAndChannelId: 
            builder.query<MessagesOfChannelsResponseType, GetTwitchUserWithChannelsQuery>({
                query: getMessagesByUserIdAndChannelIdDef,
                transformResponse: (response: MessagesOfChannelsResponseTypeRaw) => ({
                    ...response,
                    items: convertMessagesApi(response.items),
                }),
                onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                    dispatch(setIsMessagesFetching(true));

                    const { data } = await queryFulfilled;

                    dispatch(pushMessages(data.items));
                    dispatch(setIsMessagesFetching(false));
                },
            }),
    }),
});

export const {
    useLazyGetMessagesByUserIdAndChannelIdQuery,
} = messagesApi;
