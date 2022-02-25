/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { baseBadgesUrl, getSubscriberBadgesByChannelIdDef } from '../api-defs';
import { TwitchUserId } from '../types/user';

interface SubscriberBadgesResponseType {
    badge_sets: object;
}

export const subscriberBadgesApi = createApi({
    reducerPath: 'subscriberBadgesApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseBadgesUrl }),
    endpoints: (builder) => ({
        getSubscriberBadgesByChannelId: builder.query<SubscriberBadgesResponseType, TwitchUserId>({
            query: getSubscriberBadgesByChannelIdDef,
        }),
    }),
});

export const { useGetSubscriberBadgesByChannelIdQuery } = subscriberBadgesApi;
