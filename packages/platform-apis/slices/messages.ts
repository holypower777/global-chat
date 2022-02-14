import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl, getMessagesByNameDef } from '../api-defs';
import { ChannelsAPI } from '../types/channel';
import { MessagesAPI } from '../types/messages';
import { TwitchUserAPI } from '../types/user';

interface MessagesResponseType {
    user: TwitchUserAPI;
    messages: MessagesAPI;
    channels: ChannelsAPI;
}

export const messagesApi = createApi({
    reducerPath: 'messagesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getMessagesByName: builder.query<MessagesResponseType, string>({
            query: getMessagesByNameDef,
        }),
    }),
});

export const { useGetMessagesByNameQuery } = messagesApi;
