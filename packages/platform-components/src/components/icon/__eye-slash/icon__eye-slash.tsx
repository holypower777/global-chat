import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__eye-slash.scss';

const IconEyeSlash = (props: SingleIconProps) => (
    <Icon ico="eye-slash" {...props}>
        <svg data-testid="icon__eye-slash" viewBox="0 0 12 12">
            <path
                d="M7.26496 4.73502L4.73496 7.26502C4.40996 6.94002 4.20996 6.49502 4.20996 6.00002C4.20996 5.01002 5.00996 4.21002 5.99996 4.21002C6.49496 4.21002 6.93996 4.41002 7.26496 4.73502Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.79992 8.88C2.29992 8.45 1.84492 7.92 1.44492 7.295C0.994922 6.59 0.994922 5.405 1.44492 4.7C2.03492 3.775 2.75492 3.05 3.55992 2.565"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.91 2.88499C8.035 2.22499 7.035 1.86499 6 1.86499"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.20996 9.76503C4.77996 10.005 5.38496 10.135 5.99996 10.135C7.76496 10.135 9.40996 9.09503 10.555 7.29503C11.005 6.59003 11.005 5.40503 10.555 4.70003C10.39 4.44003 10.21 4.19503 10.025 3.96503"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.75497 6.34998C7.62497 7.05498 7.04997 7.62998 6.34497 7.75998"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M4.735 7.26501L1 11" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.9999 1L7.26489 4.735" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </Icon>
);

export default IconEyeSlash;
