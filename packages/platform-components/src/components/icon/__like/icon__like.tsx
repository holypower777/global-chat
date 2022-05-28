import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__like.scss';

const IconLike = (props: SingleIconProps) => {
    return (
        <Icon ico="like" {...props}>
            <svg viewBox="0 0 12 12">
                <path d="M10.74 5.97498C10.99 5.27498 10.54 4.67498 9.78999 4.67498H7.78999C7.48999 4.67498 7.23999 4.42498 7.28999 4.07498L7.53999 2.47498C7.63999 2.02498 7.33999 1.52498 6.88999 1.37498C6.48999 1.22498 5.98999 1.42498 5.78999 1.72498L3.73999 4.77498" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M3.73999 9.17499L5.28999 10.375C5.48999 10.575 5.93999 10.675 6.23999 10.675H8.13999C8.73999 10.675 9.38999 10.225 9.53999 9.62499L10.16 7.73999" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M1.18994 9.17501V4.27501C1.18994 3.57501 1.48994 3.32501 2.18994 3.32501H2.68994C3.38994 3.32501 3.68994 3.57501 3.68994 4.27501V9.17501C3.68994 9.87501 3.38994 10.125 2.68994 10.125H2.18994C1.48994 10.125 1.18994 9.87501 1.18994 9.17501Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Icon>
    );
};

export default IconLike;
