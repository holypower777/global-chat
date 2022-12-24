import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__time.scss';

const IconTime = (props: SingleIconProps) => (
    <Icon ico="time" {...props}>
        <svg data-testid="icon__time" viewBox="0 0 12 12">
            <path
                d="M7.85494 7.59L6.30494 6.665C6.03494 6.505 5.81494 6.12 5.81494 5.805V3.755"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 3C1.375 3.835 1 4.875 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1C5.285 1 4.6 1.15 3.985 1.425"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </Icon>
);

export default IconTime;
