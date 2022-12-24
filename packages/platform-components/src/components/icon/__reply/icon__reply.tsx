import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__reply.scss';

const IconReply = (props: SingleIconProps) => (
    <Icon ico="reply" {...props}>
        <svg data-testid="icon__reply" viewBox="0 0 12 12">
            <path
                d="M9.52246 4.98175C10.6012 4.98175 11.472 5.8453 11.472 6.91507V9.05462"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
            <path
                d="M0.52832 4.98175H6.64347"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
            <path
                d="M2.58187 2.94537L0.52832 4.98179L2.58187 7.01825"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
        </svg>
    </Icon>
);

export default IconReply;
