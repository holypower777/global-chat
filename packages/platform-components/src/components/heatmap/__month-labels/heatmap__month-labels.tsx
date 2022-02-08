import b from 'b_';
import React from 'react';
import { useIntl } from 'react-intl';

import { DAYS_IN_WEEK, MONTHS, SECONDS_IN_ONE_DAY } from '../../constants';
import { DEFAULT_MONTH_PADDING } from '../heatmap-constants';

interface HeatmapMonthLabelsProps {
    cellSize: number;
    numberOfDays: number;
    weekIndexes: Array<number>;
    xPadding: number;
}

const HeatmapMonthLabels = React.memo(({ weekIndexes, numberOfDays, xPadding, cellSize }: HeatmapMonthLabelsProps) => {
    const intl = useIntl();
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const firstDay = (currentTimestamp - (numberOfDays - 1) * SECONDS_IN_ONE_DAY) * 1000;

    return (
        <>
            {weekIndexes.slice(0, -1).map((weekIndex) => {
                const day = firstDay + weekIndex * DAYS_IN_WEEK * SECONDS_IN_ONE_DAY * 1000;
                const date = new Date(day);

                return date.getDate() >= 1 && date.getDate() <= DAYS_IN_WEEK ?
                    (<text
                        className={b('heatmap', 'label')}
                        key={weekIndex}
                        x={weekIndex * cellSize + xPadding}
                        y={DEFAULT_MONTH_PADDING}
                    >
                        {intl.formatMessage({ id: `common.${MONTHS[date.getMonth()]}.short` })}
                    </text>)
                    : null;
            })}
        </>
    );
});

export default HeatmapMonthLabels;
