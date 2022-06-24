import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__settings.scss';

const IconSettings = (props: SingleIconProps) => {
    return (
        <Icon ico="settings" {...props}>
            <svg viewBox="0 0 15 16">
                <path d="M11.875 11.75V7.375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M11.875 14.25V13.625" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M3.125 11.75V7.375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M3.125 14.25V13.625" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M11.875 4.875V1.75" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M7.5 14.25V11.125" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M7.5 8.625V1.75" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M3.125 4.875V1.75" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M1.875 7.375H4.375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M10.625 7.375H13.125" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M6.25 8.625H8.75" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
            </svg>
        </Icon>
    );
};

export default IconSettings;
