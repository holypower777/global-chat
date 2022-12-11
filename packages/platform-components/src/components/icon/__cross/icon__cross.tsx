import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__cross.scss';

const IconCross = (props: SingleIconProps) => (
    <Icon ico="cross" {...props}>
        <svg data-testid="icon__cross" viewBox="0 0 12 12">
            <path d="M10 10L6 6M10 2L2 10L10 2ZM2.00003 2L4 4L2.00003 2Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </Icon>
);

export default IconCross;
