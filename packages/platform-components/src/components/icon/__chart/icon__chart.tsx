import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__chart.scss';

const IconChart = (props: SingleIconProps) => (
    <Icon ico="chart" {...props}>
        <svg data-testid="icon__chart" viewBox="0 0 12 12">
            <path d="M1 11H11" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
            <path
                d="M4.875 2V11H7.125V2C7.125 1.45 6.9 1 6.225 1H5.775C5.1 1 4.875 1.45 4.875 2Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.5 5C3.5 4.45 3.3 4 2.7 4H2.3C1.7 4 1.5 4.45 1.5 5V11H3.5V6.995"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.5 7.5V11H10.5V7.5C10.5 6.95 10.3 6.5 9.7 6.5H9.3C8.7 6.5 8.5 6.95 8.5 7.5Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </Icon>
);

export default IconChart;
