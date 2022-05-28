import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__triangle-exc.scss';

const IconTriangleExc = (props: SingleIconProps) => {
    return (
        <Icon ico="triangle-exc" {...props}>
            <svg viewBox="0 0 24 24">
                <path d="M12 9V14" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.2399 14L21.2999 15.9C22.9799 18.93 21.5199 21.41 18.0599 21.41H11.9999H5.93993C2.46993 21.41 1.01993 18.93 2.69993 15.9L5.81993 10.28L8.75993 5.00003C10.5399 1.79003 13.4599 1.79003 15.2399 5.00003L18.1799 10.29" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.9946 17H12.0036" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Icon>
    );
};

export default IconTriangleExc;
