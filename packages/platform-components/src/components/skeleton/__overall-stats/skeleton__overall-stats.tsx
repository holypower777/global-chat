import b from 'b_';
import React from 'react';

import './skeleton__overall-stats.scss';

interface SkeletonOverallStatsProps {
    disablePlots?: boolean;
}

const SkeletonOverallStats = React.memo(({ disablePlots = false }: SkeletonOverallStatsProps) => {
    const baseClassName = b('skeleton', 'overall-stats');

    return (
        <div className={baseClassName}>
            {!disablePlots && <div className={b(baseClassName, 'plots')}>
                <div className={b(baseClassName, 'plots-plot')} />
                <div className={b(baseClassName, 'plots-plot')} />
                <div className={b(baseClassName, 'plots-plot')} />
            </div>} 
            <div className={b(baseClassName, 'stats')}>
                <div className={b(baseClassName, 'stats-amount-msg')} />
                <div className={b(baseClassName, 'stats-unique-users')} />
                <div className={b(baseClassName, 'stats-unique-channels')} />
                <div className={b(baseClassName, 'stats-users-most')} />
                <div className={b(baseClassName, 'stats-channels-most')} />
                <div className={b(baseClassName, 'stats-most-searched')} />
                <div className={b(baseClassName, 'stats-online-amount')} />
                <div className={b(baseClassName, 'stats-update')} />
            </div>
        </div>
    );
});

export default SkeletonOverallStats;
