import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__forbidden.scss';

const IconForbidden = (props: SingleIconProps) => (
    <Icon ico="forbidden" {...props}>
        <svg data-testid="icon__forbidden" viewBox="0 0 12 12">
            <path
                d="M2.46997 9.53996L9.53997 2.46997"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1 6.50999V7.45C1 7.79 1.2 8.26999 1.44 8.50999L3.49 10.56C3.73 10.8 4.21 11 4.55 11H7.45C7.79 11 8.27 10.8 8.51 10.56L10.56 8.50999C10.8 8.26999 11 7.79 11 7.45V4.55C11 4.21 10.8 3.73001 10.56 3.49001L8.51 1.44C8.27 1.2 7.79 1 7.45 1H4.55C4.21 1 3.73 1.2 3.49 1.44L1.44 3.49001C1.2 3.73001 1 4.21 1 4.55"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </Icon>
);

export default IconForbidden;
