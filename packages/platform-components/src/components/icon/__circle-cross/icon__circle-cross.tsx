import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__circle-cross.scss';

const IconCircleCross = (props: SingleIconProps) => (
    <Icon ico="circle-cross" {...props}>
        <svg data-testid="icon__circle-cross" viewBox="0 0 12 12">
            <path
                d="M6.99512 5.00502L7.41512 4.58502"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.58496 7.41498L5.95996 6.03998"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.41496 7.41502L4.58496 4.58502"
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

export default IconCircleCross;
