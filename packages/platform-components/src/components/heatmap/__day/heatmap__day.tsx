import b from 'b_';
import { formatDate } from 'platform-components/src/utils/format-date';
import React from 'react';

import { SECONDS_IN_ONE_DAY } from '../../constants';
import { CIRCLE_RADIUS } from '../heatmap-constants';
import { DatesToCountType } from '../heatmap-typings';

import './heatmap__day.scss';

interface HeatmapDayProps {
    cellSize: number;
    datesToCount: DatesToCountType;
    day: number;
    dayIndex: number;
    numberOfDays: number;
    xPadding: number;
}

const getDataLevel = (amountOfMessages: number | undefined) => {
    switch (true) {
        case (!amountOfMessages):
            return 0;
        case (amountOfMessages! <= 30):
            return 1;
        case (amountOfMessages! <= 80):
            return 2;
        case (amountOfMessages! <= 120):
            return 3;
        default:
            return 4;
    }
};

const HeatmapDay = React.memo(({ dayIndex, day, numberOfDays, cellSize, xPadding, datesToCount }: HeatmapDayProps) => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const secondsDiff = (numberOfDays - day - 1) * SECONDS_IN_ONE_DAY;
    const newTimestamp = currentTimestamp - secondsDiff;
    const date = new Date((currentTimestamp - secondsDiff) * 1000);

    const formattedDate = formatDate(date);
    const amountOfMessages = datesToCount.get(formattedDate);

    if (newTimestamp > currentTimestamp) {
        return null;
    }

    return (
        <circle
            className={b('heatmap', 'day')}
            cx={xPadding + CIRCLE_RADIUS}
            cy={dayIndex * cellSize + CIRCLE_RADIUS}
            data-count={amountOfMessages}
            data-date={formattedDate}
            data-level={getDataLevel(amountOfMessages)}
            r={CIRCLE_RADIUS}
        >
            <title>{`${amountOfMessages ? amountOfMessages : 'No'} messages on ${formatDate(date, true)}`}</title>
        </circle>
    );
});

export default HeatmapDay;
