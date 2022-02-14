import { SimpleCallback } from 'platform-components/src/typings';
import React from 'react';

import Icon from '../icon';

import './icon__twitch.scss';

interface IconTwitchProps {
    handleClick?: SimpleCallback;
}

const IconTwitch = (props: IconTwitchProps) => {
    return (
        <Icon ico="twitch" {...props}>
            <svg viewBox="0 0 108 108">
                <path clipRule="evenodd" d="M76.5 90H58.5L45 103.5H31.5V90H9V29.8665L24.138 9H99V67.5L76.5 90ZM90 58.5V18H27V72H40.5V85.5L54 72H76.5L90 58.5Z" fillRule="evenodd" />
                <path d="M72 31.5H81V54H72V31.5ZM49.5 31.5H58.5V54H49.5V31.5Z" />
            </svg>
        </Icon>
    );
};

export default IconTwitch;
