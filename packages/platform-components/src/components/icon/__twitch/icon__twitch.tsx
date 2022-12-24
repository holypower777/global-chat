import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__twitch.scss';

const IconTwitch = (props: SingleIconProps) => (
    <Icon ico="twitch" {...props}>
        <svg data-testid="icon__twitch" viewBox="0 0 12 12">
            <path
                clipRule="evenodd"
                d="M8.5 10H6.5L5 11.5H3.5V10H1V3.3185L2.682 1H11V7.5L8.5 10ZM10 6.5V2H3V8H4.5V9.5L6 8H8.5L10 6.5Z"
                fillRule="evenodd"
            />
            <path d="M8 3.5H9V6H8V3.5ZM5.5 3.5H6.5V6H5.5V3.5Z" />
        </svg>
    </Icon>
);

export default IconTwitch;
