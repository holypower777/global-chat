import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__cross.scss';

const IconCross = (props: SingleIconProps) => {
    return (
        <Icon ico="cross" {...props}>
            <svg viewBox="0 0 12 12">
                <path d="M13 13L7 7M13 1L1 13L13 1ZM1.00004 1L4 4L1.00004 1Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
        </Icon>
    );
};

export default IconCross;
