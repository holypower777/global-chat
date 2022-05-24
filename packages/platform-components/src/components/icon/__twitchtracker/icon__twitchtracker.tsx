import { SimpleCallback } from 'platform-components/src/typings';
import React from 'react';

import Icon from '../icon';

import './icon__twitchtracker.scss';

interface IconTwitchProps {
    handleClick?: SimpleCallback;
}

const IconTwitchtracker = (props: IconTwitchProps) => {
    return (
        <Icon ico="twitchtracker" {...props}>
            <svg fill="none" height="11" viewBox="0 0 13 11" width="13">
                <rect fill="#E2E2E2" height="2" width="13" />
                <rect fill="#E2E2E2" height="9" width="2" x="3" y="2" />
                <rect fill="#E2E2E2" height="9" width="2" x="8" y="2" />
            </svg>

        </Icon>
    );
};

export default IconTwitchtracker;
