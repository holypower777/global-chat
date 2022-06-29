import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setDailyStats, setIsDailyStatsFetching, setIsPlotsFetching, setIsStatsFetching, setOverallPlots, setOverallStats } from 'twitch-chat/src/store/slices/overall-stats';

import { baseUrl, getDailyStatsDef, getOverallStatsDef, getOverallStatsPlotsDef } from '../api-defs';
import { convertDailyStatsApi, convertOverallStatsApi, convertOverallStatsPlotsApi, DailyStats, OverallStats, OverallStatsPlots } from '../types/overall-stats';
import { GetOverallStatsPlotsQuery } from '../types/query';

export const overallStatsApi = createApi({
    reducerPath: 'overallStatsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getOverallStats: builder.query<OverallStats, void>({
            query: getOverallStatsDef,
            transformResponse: convertOverallStatsApi,
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                dispatch(setIsStatsFetching(true));

                const { data } = await queryFulfilled;
                
                dispatch(setOverallStats(data));
                dispatch(setIsStatsFetching(false));
            },
        }),
        getOverallStatsPlots: builder.query<OverallStatsPlots, GetOverallStatsPlotsQuery | object>({
            query: getOverallStatsPlotsDef,
            transformResponse: convertOverallStatsPlotsApi,
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                dispatch(setIsPlotsFetching(true));

                const { data } = await queryFulfilled;

                dispatch(setOverallPlots(data));
                dispatch(setIsPlotsFetching(false));
            },
        }),
        getDailyStats: builder.query<DailyStats, void>({
            query: getDailyStatsDef,
            transformResponse: convertDailyStatsApi,
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                dispatch(setIsDailyStatsFetching(true));

                const { data } = await queryFulfilled;

                dispatch(setDailyStats(data));
                dispatch(setIsDailyStatsFetching(false));
            },
        }),
    }),
});

export const { 
    useGetOverallStatsQuery, 
    useGetOverallStatsPlotsQuery,
    useGetDailyStatsQuery,
} = overallStatsApi;
