import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__message-remove.scss';

const IconMessageRemove = (props: SingleIconProps) => (
    <Icon ico="message-remove" {...props}>
        <svg data-testid="icon__message-remove" viewBox="0 0 12 12">
            <path
                d="M4.5 8.75C4.5 8.91 4.48 9.065 4.44 9.215C4.395 9.415 4.31501 9.61 4.21001 9.78C3.86501 10.36 3.23 10.75 2.5 10.75C1.985 10.75 1.52 10.555 1.17 10.235C1.02 10.105 0.889993 9.95 0.789993 9.78C0.604993 9.48 0.5 9.125 0.5 8.75C0.5 8.21 0.715002 7.71501 1.065 7.35501C1.43 6.98001 1.94 6.75 2.5 6.75C3.09 6.75 3.625 7.00501 3.985 7.41501C4.305 7.77001 4.5 8.24 4.5 8.75Z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
            <path
                d="M3.0351 9.26996L1.9751 8.21497"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
            <path
                d="M3.02509 8.22998L1.96509 9.28497"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
            <path
                d="M4.25 5.25H7.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
            <path
                d="M11 5.76996V6.71497C11 7.46497 10.75 8.08997 10.31 8.52997C9.875 8.96497 9.25 9.21497 8.5 9.21497V10.28C8.5 10.68 8.05501 10.92 7.72501 10.7L5.5 9.21497H4.44C4.48 9.06497 4.5 8.90997 4.5 8.74997C4.5 8.23997 4.305 7.76998 3.985 7.41498C3.625 7.00498 3.09 6.74997 2.5 6.74997C1.94 6.74997 1.43 6.97998 1.065 7.35498C1.02 7.15498 1 6.93997 1 6.71497V3.71497C1 2.21497 2 1.21497 3.5 1.21497H8.5C10 1.21497 11 2.21497 11 3.71497"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
        </svg>
    </Icon>
);

export default IconMessageRemove;
