import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__chart.scss';

const IconChart = (props: SingleIconProps) => {
    return (
        <Icon ico="chart" {...props}>
            <svg viewBox="0 0 20 20">
                <path d="M1.66675 18.3333H18.3334" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path d="M8.125 3.33335V18.3334H11.875V3.33335C11.875 2.41669 11.5 1.66669 10.375 1.66669H9.625C8.5 1.66669 8.125 2.41669 8.125 3.33335Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M5.83333 8.33335C5.83333 7.41669 5.5 6.66669 4.5 6.66669H3.83333C2.83333 6.66669 2.5 7.41669 2.5 8.33335V18.3334H5.83333V11.6584" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M14.1667 12.5V18.3333H17.5001V12.5C17.5001 11.5833 17.1667 10.8333 16.1667 10.8333H15.5001C14.5001 10.8333 14.1667 11.5833 14.1667 12.5Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
        </Icon>
    );
};

export default IconChart;
