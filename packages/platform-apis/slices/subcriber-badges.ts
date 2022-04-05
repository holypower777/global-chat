/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { baseBadgesUrl, getSubscriberBadgesByChannelIdDef } from '../api-defs';
import { ChannelIdQuery } from '../types/query';

interface SubscriberBadgesResponseTypeRaw {
    badge_sets: object;
}

interface SubscriberBadgesResponseType {
    badgeSets: object;
}

export const subscriberBadgesApi = createApi({
    reducerPath: 'subscriberBadgesApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseBadgesUrl }),
    endpoints: (builder) => ({
        getSubscriberBadgesByChannelId: builder.query<SubscriberBadgesResponseType, ChannelIdQuery>({
            query: getSubscriberBadgesByChannelIdDef,
            transformResponse: (response: SubscriberBadgesResponseTypeRaw) => ({
                badgeSets: response.badge_sets,
            }),
        }),
    }),
});

export const { useGetSubscriberBadgesByChannelIdQuery } = subscriberBadgesApi;
