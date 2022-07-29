import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__search-zoom-out.scss';

const IconSearchZoomOut = (props: SingleIconProps) => {
    return (
        <Icon ico="search-zoom-out" {...props}>
            <svg viewBox="0 0 15 16">
                <path d="M5.625 7.8125H8.75" />
                <path d="M7.1875 1.75C10.4688 1.75 13.125 4.40625 13.125 7.6875C13.125 10.9688 10.4688 13.625 7.1875 13.625C3.90625 13.625 1.25 10.9688 1.25 7.6875C1.25 5.375 2.56875 3.375 4.5 2.39375" />
                <path d="M13.75 14.25L12.5 13" />
            </svg>
        </Icon>
    );
};

export default IconSearchZoomOut;
