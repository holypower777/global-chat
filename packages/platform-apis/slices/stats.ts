import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl, getDailyStatsDef } from '../api-defs';
import mockFetchBase from '../bases/mockFetchBase';
import { DailyStats } from '../types/stats';
import convertApiToDTO from '../utils/convertApiToDTO';

export const statsApi = createApi({
    reducerPath: 'statsApi',
    baseQuery: (args, api) =>
        mockFetchBase(args, api, { defaultBase: fetchBaseQuery({ baseUrl }) }),
    endpoints: (builder) => ({
        getDailyStats: builder.query<DailyStats, void>({
            query: getDailyStatsDef,
            transformResponse: (response) => convertApiToDTO<DailyStats>(response),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
    }),
});

export const { useGetDailyStatsQuery } = statsApi;
