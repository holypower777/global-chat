import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__message.scss';

const IconMessage = (props: SingleIconProps) => (
    <Icon ico="message" {...props}>
        <svg data-testid="icon__message" viewBox="0 0 12 12">
            <path
                d="M4.25 5.25H7.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
            <path
                d="M1 5.77997V6.71497C1 8.21497 2 9.21497 3.5 9.21497H5.5L7.72501 10.695C8.05501 10.915 8.5 10.68 8.5 10.28V9.21497C10 9.21497 11 8.21497 11 6.71497V3.71497C11 2.21497 10 1.21497 8.5 1.21497H3.5C2 1.21497 1 2.21497 1 3.71497"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
        </svg>
    </Icon>
);

export default IconMessage;
