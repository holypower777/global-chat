import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__circle-tick.scss';

const IconCircleTick = (props: SingleIconProps) => {
    return (
        <Icon ico="circle-tick" {...props}>
            <svg viewBox="0 0 24 24">
                <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 10.38L16.12 9.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.87988 12L10.6199 14.75L13.1699 12.21" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Icon>
    );
};

export default IconCircleTick;
