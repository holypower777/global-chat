import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__reply.scss';

const IconReply = (props: SingleIconProps) => {
    return (
        <Icon ico="reply" {...props}>
            <svg>
                <path d="M10.7695 3.21198C11.9413 3.21198 12.8872 4.14998 12.8872 5.31198V7.63599" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M1 3.21198H7.64236" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M3.23059 1L1 3.21198L3.23059 5.42401" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
            </svg>
        </Icon>
    );
};

export default IconReply;
