import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl, getOverallStatsDef, getOverallStatsPlotsDef } from '../api-defs';
import { convertOverallStatsApi, convertOverallStatsPlotsApi, OverallStats, OverallStatsPlots } from '../types/overall-stats';
import { GetOverallStatsPlotsQuery } from '../types/query';

export const overallStatsApi = createApi({
    reducerPath: 'overallStatsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getOverallStats: builder.query<OverallStats, void>({
            query: getOverallStatsDef,
            transformResponse: convertOverallStatsApi,
        }),
        getOverallStatsPlots: builder.query<OverallStatsPlots, GetOverallStatsPlotsQuery>({
            query: getOverallStatsPlotsDef,
            transformResponse: convertOverallStatsPlotsApi,
        }),
    }),
});

export const { useGetOverallStatsQuery, useGetOverallStatsPlotsQuery } = overallStatsApi;
