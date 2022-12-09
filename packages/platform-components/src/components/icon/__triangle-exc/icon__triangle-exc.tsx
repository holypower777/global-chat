import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__triangle-exc.scss';

const IconTriangleExc = (props: SingleIconProps) => (
    <Icon ico="triangle-exc" {...props}>
        <svg data-testid="icon__triangle-exc" viewBox="0 0 12 12">
            <path d="M6 4.5V7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.12 7.00001L10.65 7.95001C11.49 9.46501 10.76 10.705 9.02997 10.705H5.99997H2.96997C1.23497 10.705 0.509966 9.46501 1.34997 7.95001L2.90997 5.14001L4.37997 2.50001C5.26997 0.895015 6.72997 0.895015 7.61997 2.50001L9.08997 5.14501" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.99731 8.5H6.00181" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </Icon>
);

export default IconTriangleExc;
