import { createApi } from '@reduxjs/toolkit/query/react';

import { getOverallStatsDef, getOverallStatsPlotsDef } from '../api-defs';
import { OverallStats, OverallStatsPlots } from '../types/overall-stats';
import { GetOverallStatsPlotsQuery } from '../types/query';
import authFetchBase from '../utils/authFetchBase';
import convertApiToDTO from '../utils/convertApiToDTO';

export const overallStatsApi = createApi({
    reducerPath: 'overallStatsApi',
    baseQuery: authFetchBase,
    endpoints: (builder) => ({
        getOverallStats: builder.query<OverallStats, void>({
            query: getOverallStatsDef,
            transformResponse: (response) =>
                convertApiToDTO<OverallStats>(response, ['time']),
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
        getOverallStatsPlots: builder.query<
            OverallStatsPlots,
            GetOverallStatsPlotsQuery
        >({
            query: getOverallStatsPlotsDef,
            transformResponse: (response) =>
                convertApiToDTO<OverallStatsPlots>(response, ['time']),
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
    }),
});

export const { useGetOverallStatsQuery, useGetOverallStatsPlotsQuery } =
    overallStatsApi;
