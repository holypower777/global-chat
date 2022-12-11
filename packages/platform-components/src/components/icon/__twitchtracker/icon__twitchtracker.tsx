import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__twitchtracker.scss';

const IconTwitchtracker = (props: SingleIconProps) => (
    <Icon ico="twitchtracker" {...props}>
        <svg viewBox="0 0 12 12">
            <rect height="8" width="1.84615" x="2.75" y="3" />
            <rect height="8" width="1.84615" x="7.36523" y="3" />
            <rect height="2" width="10" x="1" y="1" />
        </svg>
    </Icon>
);

export default IconTwitchtracker;
