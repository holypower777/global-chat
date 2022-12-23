import { createApi } from '@reduxjs/toolkit/query/react';

import {
    getMessagesByChannelIdDef,
    getMessagesByUserIdAndChannelIdDef,
} from '../api-defs';
import { TwitchMessages } from '../types';
import {
    GetMessagesByChannelIdQuery,
    GetMessagesByUserAndChannelIdQuery,
} from '../types/query';
import authFetchBase from '../utils/authFetchBase';
import convertApiToDTO from '../utils/convertApiToDTO';

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

interface MessagesResponseTypeRaw extends MessagesOfChannelsResponseCommonType {
    items: Array<unknown>;
}

export const messagesApi = createApi({
    reducerPath: 'messagesApi',
    baseQuery: authFetchBase,
    endpoints: (builder) => ({
        getMessagesByUserIdAndChannelId: builder.query<
            TwitchMessages,
            GetMessagesByUserAndChannelIdQuery
        >({
            query: getMessagesByUserIdAndChannelIdDef,
            transformResponse: (response: MessagesResponseTypeRaw) =>
                convertApiToDTO<TwitchMessages>(response.items, ['time']),
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
        getChannelMessages: builder.query<
            TwitchMessages,
            GetMessagesByChannelIdQuery
        >({
            query: getMessagesByChannelIdDef,
            transformResponse: (response: MessagesResponseTypeRaw) =>
                convertApiToDTO<TwitchMessages>(response.items, ['time']),
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
    }),
});

export const {
    useLazyGetChannelMessagesQuery,
    useLazyGetMessagesByUserIdAndChannelIdQuery,
} = messagesApi;
