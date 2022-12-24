import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__circle-tick.scss';

const IconCircleTick = (props: SingleIconProps) => (
    <Icon ico="circle-tick" {...props}>
        <svg data-testid="icon__circle-tick" viewBox="0 0 12 12">
            <path
                d="M2 3C1.375 3.835 1 4.875 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1C5.285 1 4.6 1.15 3.985 1.425"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M7.5 5.19L8.06 4.625" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M3.93994 6L5.30994 7.375L6.58494 6.105"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </Icon>
);

export default IconCircleTick;
