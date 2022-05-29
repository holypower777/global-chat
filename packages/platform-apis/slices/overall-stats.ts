import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl, getDailyStats, getOverallStatsDef, getOverallStatsPlotsDef } from '../api-defs';
import { convertDailyStatsApi, convertOverallStatsApi, convertOverallStatsPlotsApi, DailyStats, OverallStats, OverallStatsPlots } from '../types/overall-stats';
import { GetOverallStatsPlotsQuery } from '../types/query';

export const overallStatsApi = createApi({
    reducerPath: 'overallStatsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getOverallStats: builder.query<OverallStats, void>({
            query: getOverallStatsDef,
            transformResponse: convertOverallStatsApi,
        }),
        getOverallStatsPlots: builder.query<OverallStatsPlots, GetOverallStatsPlotsQuery | object>({
            query: getOverallStatsPlotsDef,
            transformResponse: convertOverallStatsPlotsApi,
        }),
        getDailyStats: builder.query<DailyStats, void>({
            query: getDailyStats,
            transformResponse: convertDailyStatsApi,
        }),
    }),
});

export const { 
    useGetOverallStatsQuery, 
    useGetOverallStatsPlotsQuery,
    useGetDailyStatsQuery,
} = overallStatsApi;
