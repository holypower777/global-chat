import cx from 'classnames';
import React from 'react';

import HeatmapMonthLabels from './__month-labels/heatmap__month-labels';
import HeatmapWeekLabels from './__week-labels/heatmap__week-labels';
import HeatmapWeek from './__week/heatmap__week';
import { DatesToCountType, xPaddingType, yPaddingType } from './heatmap-typings';

import './heatmap.scss';

interface HeatmapViewProps {
    cellSize: number;
    datesToCount: DatesToCountType;
    height: number;
    numberOfDays: number;
    weekIndexes: Array<number>;
    width: number;
    xPadding: xPaddingType;
    yPadding: yPaddingType;
    mix: string;
}

const HeatmapView = React.memo((props: HeatmapViewProps) => {
    const {
        cellSize,
        datesToCount,
        height,
        numberOfDays,
        weekIndexes,
        width,
        xPadding,
        yPadding,
        mix,
    } = props;

    return (
        <svg className={cx('heatmap', mix)} height={height} width={width}>
            <g>
                {weekIndexes.map((weekIndex) => (
                    <HeatmapWeek
                        cellSize={cellSize}
                        datesToCount={datesToCount}
                        key={weekIndex}
                        numberOfDays={numberOfDays}
                        weekIndex={weekIndex}
                        xPadding={xPadding}
                        yPadding={yPadding}
                    />
                ))}
                {xPadding && <HeatmapWeekLabels
                    cellSize={cellSize}
                    yPadding={yPadding}
                />}
                {yPadding && <HeatmapMonthLabels
                    cellSize={cellSize}
                    numberOfDays={numberOfDays}
                    weekIndexes={weekIndexes}
                    xPadding={xPadding}
                />}
            </g>
        </svg>
    );
});

export default HeatmapView;
