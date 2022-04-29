import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__flag-ru.scss';

const IconFlagRu = (props: SingleIconProps) => {
    return (
        <Icon ico="flag-ru" {...props}>
            <svg viewBox="0 0 30 30">
                <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#F0F0F0" />
                <path d="M29.067 20.2173C29.67 18.5923 30 16.8348 30 15C30 13.1652 29.67 11.4076 29.067 9.78259H0.932988C0.330059 11.4076 0 13.1652 0 15C0 16.8348 0.330059 18.5923 0.932988 20.2173L15 21.5217L29.067 20.2173Z" fill="#0052B4" />
                <path d="M15.0001 30C21.4496 30 26.9477 25.9294 29.0671 20.2174H0.933105C3.0525 25.9294 8.55064 30 15.0001 30Z" fill="#D80027" />
            </svg>
        </Icon>
    );
};

export default IconFlagRu;
