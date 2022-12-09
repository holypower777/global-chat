import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__settings.scss';

const IconSettings = (props: SingleIconProps) => (
    <Icon ico="settings" {...props}>
        <svg data-testid="icon__settings" viewBox="0 0 12 12">
            <path d="M9.5 9V5.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
            <path d="M9.5 11V10.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
            <path d="M2.5 9V5.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
            <path d="M2.5 11V10.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
            <path d="M9.5 3.5V1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
            <path d="M6 11V8.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
            <path d="M6 6.5V1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
            <path d="M2.5 3.5V1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
            <path d="M1.5 5.5H3.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
            <path d="M8.5 5.5H10.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
            <path d="M5 6.5H7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
        </svg>
    </Icon>
);

export default IconSettings;
