import { formatDate } from 'platform-components/src/utils/format-date';
import React from 'react';

import { DAYS_IN_WEEK, WEEK_IN_ONE_YEAR } from '../constants';

import { CIRCLE_SIZE, MONTH_LABEL_SIZE, WEEK_LABEL_SIZE } from './heatmap-constants';
import HeatmapView from './heatmap-view';

interface HeatmapProps {
    values: Array<string>;
    gutterSize?: number;
    showMonthLabel?: boolean;
    showWeekLabel?: boolean;
    width?: number;
    mix?: string;
}

const mapDatesToAmountOfMessages = (values: Array<string>) => {
    const result = new Map<string, number>();

    values.forEach((date) => {
        const dateString = formatDate(new Date(date));

        if (result.has(dateString)) {
            result.set(dateString, result.get(dateString)! + 1);
        } else {
            result.set(dateString, 1);
        }
    });

    return result;
};

const Heatmap = React.memo((props: HeatmapProps) => {
    const {
        gutterSize = 2,
        showMonthLabel = true,
        showWeekLabel = true,
        width: inputWidth = 0,
        values = [],
        mix = '',
    } = props;

    const currentDate = new Date();
    const currentDay = currentDate.getDay();

    const xPadding = showWeekLabel ? WEEK_LABEL_SIZE : 0;
    const yPadding = showMonthLabel ? MONTH_LABEL_SIZE : 0;

    const cellSize = CIRCLE_SIZE + gutterSize;

    const numberOfWeeks = inputWidth > 120
        ? Math.floor((inputWidth - WEEK_LABEL_SIZE) / (CIRCLE_SIZE + gutterSize))
        : WEEK_IN_ONE_YEAR;
    const numberOfDays = currentDay + (numberOfWeeks - 1) * DAYS_IN_WEEK;

    const width = inputWidth > 120 ? inputWidth : numberOfWeeks * cellSize + xPadding;
    const height = DAYS_IN_WEEK * cellSize + yPadding;

    const datesToCount = mapDatesToAmountOfMessages(values);

    return (
        <HeatmapView
            cellSize={cellSize}
            datesToCount={datesToCount}
            height={height}
            mix={mix}
            numberOfDays={numberOfDays}
            weekIndexes={[...Array(numberOfWeeks).keys()]}
            width={width}
            xPadding={xPadding}
            yPadding={yPadding}
        />
    );
});

export default Heatmap;
