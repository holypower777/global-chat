import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__message-text.scss';

const IconMessageText = (props: SingleIconProps) => {
    return (
        <Icon ico="message-text" {...props}>
            <svg viewBox="0 0 20 20">
                <path d="M18.3334 6.66669C18.3334 3.33335 16.6667 1.66669 13.3334 1.66669H6.66675C3.33341 1.66669 1.66675 3.33335 1.66675 6.66669V17.5C1.66675 17.9584 2.04175 18.3334 2.50008 18.3334H13.3334C16.6667 18.3334 18.3334 16.6667 18.3334 13.3334V10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M12.5 7.91669H14.1667" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path d="M5.83325 7.91669H9.99992" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path d="M5.83325 12.0833H11.6666" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            </svg>
        </Icon>
    );
};

export default IconMessageText;
