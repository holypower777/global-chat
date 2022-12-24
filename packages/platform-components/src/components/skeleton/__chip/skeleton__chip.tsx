import b from 'b_';
import React from 'react';

import './skeleton__chip.scss';

const SkeletonChip = () => (
    <div className={b('skeleton', 'chip')} style={{ width: Math.random() * (210 - 140) + 140 }} />
);

export default SkeletonChip;
