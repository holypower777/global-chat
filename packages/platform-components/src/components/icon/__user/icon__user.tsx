import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__user.scss';

const IconUser = (props: SingleIconProps) => (
    <Icon ico="user" {...props}>
        <svg data-testid="icon__user" viewBox="0 0 12 12">
            <path
                d="M7.8401 1.98C8.0801 2.335 8.2201 2.76 8.2201 3.22C8.2151 4.42 7.2701 5.395 6.0801 5.435C6.0301 5.43 5.9701 5.43 5.9151 5.435C4.8101 5.4 3.9151 4.555 3.7951 3.475C3.6501 2.19 4.7051 1 5.9951 1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.4949 7.28C2.2849 8.09 2.2849 9.41 3.4949 10.215C4.8699 11.135 7.1249 11.135 8.4999 10.215C9.7099 9.405 9.7099 8.085 8.4999 7.28C7.1349 6.365 4.8799 6.365 3.4949 7.28Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </Icon>
);

export default IconUser;
