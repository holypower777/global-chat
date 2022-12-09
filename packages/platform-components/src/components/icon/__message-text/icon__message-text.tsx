import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__message-text.scss';

const IconMessageText = (props: SingleIconProps) => (
    <Icon ico="message-text" {...props}>
        <svg data-testid="icon__message-text" viewBox="0 0 12 12">
            <path d="M11 4C11 2 10 1 8 1H4C2 1 1 2 1 4V10.5C1 10.775 1.225 11 1.5 11H8C10 11 11 10 11 8V6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 4.75H8.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
            <path d="M3.5 4.75H6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
            <path d="M3.5 7.25H7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </svg>
    </Icon>
);

export default IconMessageText;
