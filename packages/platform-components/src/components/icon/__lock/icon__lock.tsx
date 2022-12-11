import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__lock.scss';

const IconLock = (props: SingleIconProps) => (
    <Icon ico="lock" {...props}>
        <svg data-testid="icon__lock" viewBox="0 0 12 12">
            <path d="M3 5V4C3 2.345 3.5 1 6 1C8.5 1 9 2.345 9 4V5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.75 8C4.75 8.69 5.31 9.25 6 9.25C6.69 9.25 7.25 8.69 7.25 8C7.25 7.31 6.69 6.75 6 6.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 8.5V7.5C11 5.5 10.5 5 8.5 5H3.5C1.5 5 1 5.5 1 7.5V8.5C1 10.5 1.5 11 3.5 11H8.5C9.38 11 9.97 10.905 10.355 10.625" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </Icon>
);

export default IconLock;
