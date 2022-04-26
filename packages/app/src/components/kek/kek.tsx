import { Skeleton, H1 } from 'platform-components';
import React from 'react';

import { CommonHeader } from '../../common.components';

import './kek.scss';

const Kek = () => {
    return (
        <>
            <CommonHeader />
            <main className="kek">
                <H1 id="overall-stats.header" />
                <Skeleton variant={Skeleton.SKELETON_VARIANT.OVERALL_STATS} />
            </main>
        </>
    );
};

export default Kek;
