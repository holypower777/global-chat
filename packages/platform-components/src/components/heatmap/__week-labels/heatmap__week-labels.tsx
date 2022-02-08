import b from 'b_';
import React from 'react';
import { useIntl } from 'react-intl';

import { DAYS_OF_THE_WEEK } from '../../constants';
import { DEFAULT_WEEK_PADDING } from '../heatmap-constants';

interface HeatmapWeekLabelsProps {
    cellSize: number;
    yPadding: number;
}

const HeatmapWeekLabels = React.memo(({ cellSize, yPadding }: HeatmapWeekLabelsProps) => {
    const intl = useIntl();

    return (
        <>
            {DAYS_OF_THE_WEEK.map((day, i) => {
                const dy = cellSize * i + DEFAULT_WEEK_PADDING + yPadding;

                return (
                    <text 
                        className={b('heatmap', 'week-label')} 
                        dx={0} 
                        dy={dy}
                        key={i}
                        style={{ display: i % 2 === 0 ? 'none' : 'block' }}
                        textAnchor="start"
                    >
                        {intl.formatMessage({ id: `common.${day}.short` })}
                    </text>
                );
            })}
        </>
    );
});

export default HeatmapWeekLabels;
