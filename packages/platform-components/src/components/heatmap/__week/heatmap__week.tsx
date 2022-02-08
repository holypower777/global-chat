import b from 'b_';
import React from 'react';

import HeatmapDay from '../__day/heatmap__day';
import { DAYS_IN_WEEK } from '../../constants';
import { DatesToCountType } from '../heatmap-typings';

interface HeatmapWeekProps {
    cellSize: number;
    datesToCount: DatesToCountType;
    numberOfDays: number;
    weekIndex: number;
    xPadding: number;
    yPadding: number;
}

const HeatmapWeek = React.memo(({ weekIndex, cellSize, numberOfDays, xPadding, yPadding, datesToCount }: HeatmapWeekProps) => {
    const transform = `translate(${weekIndex * cellSize}, ${yPadding})`;

    return (
        <g
            className={b('heatmap', 'week')}
            transform={transform}
        >
            {[...Array(DAYS_IN_WEEK).keys()].map((dayIndex) => (
                <HeatmapDay 
                    cellSize={cellSize}
                    datesToCount={datesToCount}
                    day={weekIndex * DAYS_IN_WEEK + dayIndex}
                    dayIndex={dayIndex}
                    key={dayIndex}
                    numberOfDays={numberOfDays}
                    xPadding={xPadding}
                />
            ))}
        </g>
    );
});

export default HeatmapWeek;
