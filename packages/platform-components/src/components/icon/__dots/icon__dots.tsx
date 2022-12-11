import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__dots.scss';

const IconDots = (props: SingleIconProps) => (
    <Icon ico="dots" {...props}>
        <svg data-testid="icon__dots" viewBox="0 0 12 12">
            <path d="M5 9.5C5 10.05 5.45 10.5 6 10.5C6.55 10.5 7 10.05 7 9.5C7 8.95 6.55 8.5 6 8.5C5.45 8.5 5 8.95 5 9.5Z" />
            <path d="M5 2.5C5 3.05 5.45 3.5 6 3.5C6.55 3.5 7 3.05 7 2.5C7 1.95 6.55 1.5 6 1.5C5.45 1.5 5 1.95 5 2.5Z" />
            <path d="M6 7C6.55 7 7 6.55 7 6C7 5.45 6.55 5 6 5C5.45 5 5 5.45 5 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </Icon>
);

export default IconDots;
