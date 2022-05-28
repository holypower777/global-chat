import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__message.scss';

const IconMessage = (props: SingleIconProps) => {
    return (
        <Icon ico="message" {...props}>
            <svg viewBox="0 0 15 15">
                <path d="M1.25 5.5C1.25 3 2.5 1.75 5 1.75H10C12.5 1.75 13.75 3 13.75 5.5V8.625C13.75 11.125 12.5 12.375 10 12.375H9.6875C9.49375 12.375 9.30625 12.4687 9.1875 12.625L8.25 13.875C7.8375 14.425 7.1625 14.425 6.75 13.875L5.8125 12.625C5.7125 12.4875 5.48125 12.375 5.3125 12.375H5C2.5 12.375 1.25 11.75 1.25 8.625V8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M9.99365 5.5H10.6249" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.375 5.5H7.81875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.375 8.625H8.125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Icon>
    );
};

export default IconMessage;
