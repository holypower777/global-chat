import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__lock.scss';

const IconLock = (props: SingleIconProps) => {
    return (
        <Icon ico="lock" {...props}>
            <svg viewBox="0 0 15 16">
                <path d="M3.75 6.75V5.5C3.75 3.43125 4.375 1.75 7.5 1.75C10.625 1.75 11.25 3.43125 11.25 5.5V6.75" />
                <path d="M5.9375 10.5C5.9375 11.3625 6.6375 12.0625 7.5 12.0625C8.3625 12.0625 9.0625 11.3625 9.0625 10.5C9.0625 9.6375 8.3625 8.9375 7.5 8.9375" />
                <path d="M13.75 11.125V9.875C13.75 7.375 13.125 6.75 10.625 6.75H4.375C1.875 6.75 1.25 7.375 1.25 9.875V11.125C1.25 13.625 1.875 14.25 4.375 14.25H10.625C11.725 14.25 12.4625 14.1313 12.9437 13.7812" />
            </svg>
        </Icon>
    );
};

export default IconLock;
