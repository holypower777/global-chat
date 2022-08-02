import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__hierarchy.scss';

const IconHierarchy = (props: SingleIconProps) => {
    return (
        <Icon ico="hierarchy" {...props}>
            <svg viewBox="0 0 15 16">
                <path d="M3.125 9.875V5.5" />
                <path d="M3.28125 14.25C4.40308 14.25 5.3125 13.3406 5.3125 12.2188C5.3125 11.0969 4.40308 10.1875 3.28125 10.1875C2.15942 10.1875 1.25 11.0969 1.25 12.2188C1.25 13.3406 2.15942 14.25 3.28125 14.25Z" />
                <path d="M3.125 5.5C4.16053 5.5 5 4.66053 5 3.625C5 2.58947 4.16053 1.75 3.125 1.75C2.08947 1.75 1.25 2.58947 1.25 3.625C1.25 4.66053 2.08947 5.5 3.125 5.5Z" />
                <path d="M11.875 5.5C12.9105 5.5 13.75 4.66053 13.75 3.625C13.75 2.58947 12.9105 1.75 11.875 1.75C10.8395 1.75 10 2.58947 10 3.625C10 4.66053 10.8395 5.5 11.875 5.5Z" />
                <path d="M3.2063 9.87498C3.48755 8.78123 4.48755 7.96873 5.6688 7.97498L7.81255 7.98123C8.3438 7.98123 8.8563 7.87499 9.31255 7.67499" />
            </svg>
        </Icon>
    );
};

export default IconHierarchy;