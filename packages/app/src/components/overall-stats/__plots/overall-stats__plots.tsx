import b from 'b_';
import { getSumOfArray, sliceIntoChunks } from 'platform-components/src/utils';
import React from 'react';
//@ts-ignore
import Charty from 'react-charty';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import { 
    getPeriodActivityPlots, 
    getTotalMessagesPlots,
    getTotalUsersPlots,
} from '../../../store/slices/overall-stats';

import './overall-stats__plots.scss';

interface PlotData {
    x: Array<number>;
    y: Array<number>;
}

const commonConfig = {
    xAxisType: 'time',
    rangeTextType: 'longDateWeekDay',
    showPreview: false,
    stepX: 86400000 * 2,
};

const OverallStatsPlots = () => {
    const intl = useIntl();
    const totalMessages = useSelector(getTotalMessagesPlots);
    const totalUsers = useSelector(getTotalUsersPlots);
    const periodActivity = useSelector(getPeriodActivityPlots);

    const messagesConfig = {
        colors: { y: '#558DED' },
        names: { y: intl.formatMessage({ id: 'overall-stats.plots.messages' }) },
        ...commonConfig,
    };
    
    const usersConfig = {
        colors: { y: '#558DED' },
        names: { y: intl.formatMessage({ id: 'overall-stats.plots.users' }) },
        ...commonConfig,
    };

    const periodActivityConfig = {
        ...commonConfig,
        colors: { y: '#a5d258' },
        names: { y: intl.formatMessage({ id: 'overall-stats.plots.messagesPerActivity' }) },
        type: 'stacked_bar',
    };

    const handleZoomIn = (xPos: number, data: PlotData, config: object) => new Promise((resolve) => {
        const firstIndex = data.x.findIndex((e) => e > xPos - 86400000 * 4);
        const lastIndex = data.x.findIndex((e) => e > xPos + 86400000 * 4);
        const newData = {
            ...config,
            data: {
                x: data.x.slice(firstIndex, lastIndex),
                y: data.y.slice(firstIndex, lastIndex),
            },
        };

        resolve(newData);
    });

    const splitDataByDay = (data: PlotData) => ({
        x: data.x.filter((v, i) => i % 48 === 0),
        y: data.y.filter((v, i) => i % 48 === 0),
    });

    const splitDataByDayIntoBar = (data: PlotData) => ({
        x: data.x.filter((v, i) => i % 48 === 0),
        y: sliceIntoChunks(data.y, 48).map(getSumOfArray),
    });

    return (
        <div className={b('overall-stats', 'plots')}>
            {totalMessages.x.length > 0 && <Charty
                colors={{ y: '#2373DB' }}
                data={splitDataByDay(totalMessages)}
                names={{ y: intl.formatMessage({ id: 'overall-stats.plots.messages' }) }}
                onZoomIn={(x: number) => handleZoomIn(x, totalMessages, messagesConfig)}
                rangeTextType="longDate"
                title={intl.formatMessage({ id: 'overall-stats.plots.totalMessages' })}
                xAxisType="date"
            />}
            {totalUsers.x.length > 0 && <Charty
                colors={{ y: '#2373DB' }}
                data={splitDataByDay(totalUsers)}
                names={{ y: intl.formatMessage({ id: 'overall-stats.plots.users' }) }}
                onZoomIn={(x: number) => handleZoomIn(x, totalUsers, usersConfig)}
                rangeTextType="longDate"
                title={intl.formatMessage({ id: 'overall-stats.plots.totalUsers' })}
                xAxisType="date"
            />}
            {periodActivity.x.length > 0 && <Charty
                colors={{ y: '#6fb34d' }}
                data={splitDataByDayIntoBar(periodActivity)}
                names={{ y: intl.formatMessage({ id: 'overall-stats.plots.messagesPerDay' }) }}
                onZoomIn={(x: number) => handleZoomIn(x, periodActivity, periodActivityConfig)}
                rangeTextType="longDate"
                startX={periodActivity.x[0]}
                title={intl.formatMessage({ id: 'overall-stats.plots.periodActivity' })}
                type="bar"
                xAxisType="date"
            />}
        </div>
    );
};

export default OverallStatsPlots;
