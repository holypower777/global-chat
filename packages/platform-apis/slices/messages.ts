import { createApi } from '@reduxjs/toolkit/query/react';

import { getMessagesByChannelIdDef, getMessagesByUserIdAndChannelIdDef } from '../api-defs';
import authFetchBase from '../bases/authFetchBase';
import mockFetchBase from '../bases/mockFetchBase';
import { TwitchMessages } from '../types';
import { GetMessagesByChannelIdQuery, GetMessagesByUserAndChannelIdQuery } from '../types/query';
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

interface MessagesResponse {
    items: TwitchMessages;
    total: number;
    sort: 'asc' | 'desc';
}

export const messagesApi = createApi({
    reducerPath: 'messagesApi',
    baseQuery: (args, api) => mockFetchBase(args, api, { defaultBase: authFetchBase }),
    endpoints: (builder) => ({
        getMessagesByUserIdAndChannelId: builder.query<
            MessagesResponse,
            GetMessagesByUserAndChannelIdQuery
        >({
            query: getMessagesByUserIdAndChannelIdDef,
            transformResponse: (response: MessagesResponseTypeRaw) => ({
                items: convertApiToDTO<TwitchMessages>(response.items, ['time']),
                sort: response.sort,
                total: response.total,
            }),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
        getChannelMessages: builder.query<MessagesResponse, GetMessagesByChannelIdQuery>({
            query: getMessagesByChannelIdDef,
            transformResponse: (response: MessagesResponseTypeRaw) => ({
                items: convertApiToDTO<TwitchMessages>(response.items, ['time']),
                sort: response.sort,
                total: response.total,
            }),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
    }),
});

export const { useLazyGetChannelMessagesQuery, useLazyGetMessagesByUserIdAndChannelIdQuery } =
    messagesApi;
