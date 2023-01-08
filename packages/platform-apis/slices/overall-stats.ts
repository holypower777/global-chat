import { createApi } from '@reduxjs/toolkit/query/react';

import { getOverallStatsDef, getOverallStatsPlotsDef } from '../api-defs';
import authFetchBase from '../bases/authFetchBase';
import mockFetchBase from '../bases/mockFetchBase';
import { OverallStats, OverallStatsPlots } from '../types/overall-stats';
import { GetOverallStatsPlotsQuery } from '../types/query';
import convertApiToDTO from '../utils/convertApiToDTO';

export const overallStatsApi = createApi({
    reducerPath: 'overallStatsApi',
    baseQuery: (args, api) => mockFetchBase(args, api, { defaultBase: authFetchBase }),
    endpoints: (builder) => ({
        getOverallStats: builder.query<OverallStats, void>({
            query: getOverallStatsDef,
            transformResponse: (response) => convertApiToDTO<OverallStats>(response, ['time']),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
        getOverallStatsPlots: builder.query<OverallStatsPlots, GetOverallStatsPlotsQuery>({
            query: getOverallStatsPlotsDef,
            transformResponse: (response) => convertApiToDTO<OverallStatsPlots>(response, ['time']),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {},
        }),
    }),
});

export const { useGetOverallStatsQuery, useGetOverallStatsPlotsQuery } = overallStatsApi;
