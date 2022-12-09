import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__circle-exc.scss';

const IconCircleExc = (props: SingleIconProps) => (
    <Icon ico="circle-exc" {...props}>
        <svg data-testid="icon__circle-exc" viewBox="0 0 12 12">
            <path d="M6 4V6.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 3C1.375 3.835 1 4.875 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1C5.285 1 4.6 1.15 3.985 1.425" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.99731 8H6.00181" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </Icon>
);

export default IconCircleExc;
