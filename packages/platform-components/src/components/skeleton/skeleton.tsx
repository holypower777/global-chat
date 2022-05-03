import b from 'b_';
import cx from 'classnames';
import React from 'react';

import SkeletonChip from './__chip/skeleton__chip';
import SkeletonLiveChat from './__live-chat/skeleton__live-chat';
import SkeletonMessage from './__message/skeleton__message';
import SkeletonOverallStats from './__overall-stats/skeleton__overall-stats';

import './skeleton.scss';

export enum SKELETON_VARIANT {
    MESSAGE = 'message',
    CHIP = 'chip',
    LIVE_CHAT = 'live-chat',
    OVERALL_STATS = 'overall-stats',
    OVERALL_STATS_NO_PLOTS = 'overall-stats-no-plots',
}

interface SkeletonProps {
    variant: SKELETON_VARIANT;
    style?: React.CSSProperties;
    mix?: string;
}

const Skeleton = ({ variant, style, mix }: SkeletonProps) => {
    let comp;

    switch (variant) {
        case SKELETON_VARIANT.MESSAGE:
            comp = <SkeletonMessage />;
            break;
        case SKELETON_VARIANT.CHIP:
            comp = <SkeletonChip />;
            break;
        case SKELETON_VARIANT.LIVE_CHAT:
            comp = <SkeletonLiveChat />;
            break;
        case SKELETON_VARIANT.OVERALL_STATS:
            comp = <SkeletonOverallStats />;
            break;
        case SKELETON_VARIANT.OVERALL_STATS_NO_PLOTS:
            comp = <SkeletonOverallStats disablePlots />;
            break;
        default:
            comp = null;
    }

    return (
        <div className={cx(b('skeleton', { variant }), mix)} style={style}>
            {comp}
        </div>
    );
};

Skeleton.SKELETON_VARIANT = SKELETON_VARIANT;

export default Skeleton;
