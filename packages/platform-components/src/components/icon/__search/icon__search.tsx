import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__search.scss';

const IconSearch = (props: SingleIconProps) => (
    <Icon ico="search" {...props}>
        <svg data-testid="icon__search" viewBox="0 0 12 12">
            <path
                d="M5.75 1C8.375 1 10.5 3.125 10.5 5.75C10.5 8.375 8.375 10.5 5.75 10.5C3.125 10.5 1 8.375 1 5.75C1 3.9 2.055 2.3 3.6 1.515"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M11 11L10 10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </Icon>
);

export default IconSearch;
