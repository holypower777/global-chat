import { useGetOverallStatsPlotsQuery, useGetOverallStatsQuery } from 'platform-apis';
import { H1, WithSkeleton } from 'platform-components';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CommonHeader } from '../../common.components';
import ErrorBoundary from '../../containers/error-boundary/error-boundary';
import { 
    setIsPlotsFetching,
    setIsStatsFetching,
    setOverallPlots,
    setOverallStats,
} from '../../store/slices/overall-stats';

import OverallStatsPlots from './__plots/overall-stats__plots';
import OverallStatsStats from './__stats/overall-stats__stats';

import './overall-stats.scss';

const OverallStats = () => {
    const dispatch = useDispatch();
    const { data: stats, isFetching: isStatsFetching } = useGetOverallStatsQuery();
    const { data: plots, isFetching: isPlotsFetching } = useGetOverallStatsPlotsQuery({});

    useEffect(() => {
        dispatch(setIsStatsFetching(isStatsFetching));
    }, [isStatsFetching]);

    useEffect(() => {
        dispatch(setIsPlotsFetching(isPlotsFetching));
    }, [isPlotsFetching]);

    useEffect(() => {
        if (stats) {
            dispatch(setOverallStats(stats));
        }
    }, [stats]);

    useEffect(() => {
        if (plots) {
            dispatch(setOverallPlots(plots));
        }
    }, [plots]);

    return (
        <ErrorBoundary>
            <CommonHeader />
            <main className="overall-stats">
                <H1 id="overall-stats.header" />
                <WithSkeleton isLoading={isPlotsFetching || isStatsFetching} variant={WithSkeleton.SKELETON_VARIANT.OVERALL_STATS}>
                    <OverallStatsPlots />
                    <OverallStatsStats />
                </WithSkeleton>
            </main>
        </ErrorBoundary>
    );
};

export default OverallStats;
