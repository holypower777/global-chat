import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl, getMessagesByUserIdAndChannelIdDef, getMessagesByUserIdDef } from '../api-defs';
import { convertMessagesApi, Messages, MessagesAPI } from '../types/messages';
import { GetTwitchUserWithChannelsQuery, UserIdQuery } from '../types/query';

interface MessagesResponseTypeRaw {
    items: MessagesAPI;
    total: number;
}

interface MessagesResponseType {
    items: Messages;
    total: number;
}

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
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getMessagesByUserId: builder.query<MessagesResponseType, UserIdQuery>({
            query: getMessagesByUserIdDef,
            transformResponse: (response: MessagesResponseTypeRaw) => ({
                ...response,
                items: convertMessagesApi(response.items),
            }),
        }),
        getMessagesByUserIdAndChannelId: 
            builder.query<MessagesOfChannelsResponseType, GetTwitchUserWithChannelsQuery>({
                query: getMessagesByUserIdAndChannelIdDef,
                transformResponse: (response: MessagesOfChannelsResponseTypeRaw) => ({
                    ...response,
                    items: convertMessagesApi(response.items),
                }),
            }),
    }),
});

export const {
    useGetMessagesByUserIdQuery,
    useGetMessagesByUserIdAndChannelIdQuery,
} = messagesApi;
