import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__bell.scss';

const IconBell = (props: SingleIconProps) => (
    <Icon ico="bell" {...props}>
        <svg data-testid="icon__bell" viewBox="0 0 12 12">
            <path d="M6 3.21997V4.88497" strokeLinecap="round" strokeMiterlimit="10" />
            <path
                d="M10.295 7.585C10.66 8.195 10.37 8.985 9.69497 9.21C7.30497 10.005 4.71997 10.005 2.32997 9.21C1.60997 8.97 1.33497 8.24 1.72997 7.585L2.36497 6.525C2.53997 6.235 2.67997 5.72 2.67997 5.385V4.335C2.67997 2.49 4.16997 1 6.00997 1C7.83997 1 9.33997 2.5 9.33997 4.33V5.38C9.33997 5.47 9.34997 5.57 9.36497 5.675"
                strokeLinecap="round"
                strokeMiterlimit="10"
            />
            <path
                d="M7.66496 9.40997C7.66496 10.325 6.91496 11.075 5.99996 11.075C5.54496 11.075 5.12496 10.885 4.82496 10.585C4.52496 10.285 4.33496 9.86497 4.33496 9.40997"
                strokeMiterlimit="10"
            />
        </svg>
    </Icon>
);

export default IconBell;
