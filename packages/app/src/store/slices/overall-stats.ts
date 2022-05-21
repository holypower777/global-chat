import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OverallStats, OverallStatsPlots } from 'platform-apis/types';

import { RootState } from '../store';

interface OverallStatsState {
    isPlotsFetching: boolean;
    isStatsFetching: boolean;
    stats: OverallStats | null;
    plots: OverallStatsPlots;
}

const initialState: OverallStatsState = {
    isPlotsFetching: false,
    isStatsFetching: false,
    stats: null,
    plots: [],
};

export const overallStatsSlice = createSlice({
    name: 'overallStats',
    initialState,
    reducers: {
        setOverallStats: (state, action: PayloadAction<OverallStats>) => {
            state.stats = action.payload;
        },
        setOverallPlots: (state, action: PayloadAction<OverallStatsPlots>) => {
            state.plots = action.payload;
        },
        setIsStatsFetching: (state, action: PayloadAction<boolean>) => {
            state.isStatsFetching = action.payload;
        },
        setIsPlotsFetching: (state, action: PayloadAction<boolean>) => {
            state.isPlotsFetching = action.payload;
        },
    },
});

export const {
    setOverallStats,
    setOverallPlots,
    setIsStatsFetching,
    setIsPlotsFetching,
} = overallStatsSlice.actions;

const getRootStats = (state: RootState) => state.overallStats;
export const getIsStatsFetching = createSelector(
    getRootStats,
    (rootStats) => rootStats.isStatsFetching,
);
export const getIsPlotsFetching = createSelector(
    getRootStats,
    (rootStats) => rootStats.isPlotsFetching,
);
export const getOverallStats = createSelector(
    getRootStats,
    (rootState) => rootState.stats,
);
export const getOverallStatsPlots = createSelector(
    getRootStats,
    (rootState) => rootState.plots,
);
const getOverallStatsTimes = createSelector(
    getOverallStatsPlots,
    (plots) => plots.map((e) => e.time!.getTime()),
);
export const getTotalMessagesPlots = createSelector(
    [getOverallStatsPlots, getOverallStatsTimes],
    (plots, times) => ({ x: times, y: plots.map((e) => e.totalMessages) }),
);
export const getTotalUsersPlots = createSelector(
    [getOverallStatsPlots, getOverallStatsTimes],
    (plots, times) => ({ x: times, y: plots.map((e) => e.totalUsers) }),
);
export const getPeriodActivityPlots = createSelector(
    [getOverallStatsPlots, getOverallStatsTimes],
    (plots, times) => ({ x: times, y: plots.map((e) => e.periodActivity) }),
);
export const getOnlineParsedChannels = createSelector(
    [getOverallStatsPlots, getOverallStatsTimes],
    (plots, times) => ({ x: times, y: plots.map((e) => e.currentlyActiveChannels) }),
);

export default overallStatsSlice.reducer;
