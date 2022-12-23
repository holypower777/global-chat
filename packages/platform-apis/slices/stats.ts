import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl, getDailyStatsDef } from '../api-defs';
import { DailyStats } from '../types/stats';
import convertApiToDTO from '../utils/convertApiToDTO';

export const statsApi = createApi({
    reducerPath: 'statsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getDailyStats: builder.query<DailyStats, void>({
            query: getDailyStatsDef,
            transformResponse: (response) =>
                convertApiToDTO<DailyStats>(response),
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
    }),
});

export const { useGetDailyStatsQuery } = statsApi;
