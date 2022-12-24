import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__pause.scss';

const IconPause = (props: SingleIconProps) => (
    <Icon ico="pause" {...props}>
        <svg data-testid="icon__pause" viewBox="0 0 12 12">
            <path
                d="M2.505 1.5C1.785 1.5 1.5 1.77 1.5 2.445V9.555C1.5 10.23 1.785 10.5 2.505 10.5H4.32C5.035 10.5 5.325 10.23 5.325 9.555V2.445C5.325 1.77 5.04 1.5 4.32 1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.49505 10.5C10.21 10.5 10.5 10.23 10.5 9.555V2.445C10.5 1.77 10.215 1.5 9.49505 1.5H7.68005C6.96505 1.5 6.67505 1.77 6.67505 2.445V9.555C6.67505 10.23 6.96005 10.5 7.68005 10.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </Icon>
);

export default IconPause;
