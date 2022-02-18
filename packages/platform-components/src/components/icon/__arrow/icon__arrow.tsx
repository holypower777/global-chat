import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__arrow.scss';

enum DIRECTIONS {
    UP = 'up',
    DOWN = 'down',
    RIGHT = 'right',
    LEFT = 'left'
}

interface IconArrowProps extends SingleIconProps {
    direction?: DIRECTIONS;
}

const IconArrow = ({ direction = DIRECTIONS.DOWN, ...props }: IconArrowProps) => {
    return (
        <Icon ico="arrow" mods={{ direction }} {...props}>
            <svg viewBox="0 0 15 15">
                <path d="M6.66863 2.38636C6.66863 2.10409 6.90113 1.875 7.1876 1.875C7.47408 1.875 7.70657 2.10409 7.70657 2.38636V12.6136C7.70657 12.8209 7.57995 13.007 7.3855 13.0861C7.32184 13.112 7.25472 13.125 7.1876 13.125C7.05267 13.125 6.91912 13.0732 6.82017 12.9743L2.65111 8.84932C2.44906 8.64955 2.44975 8.32568 2.65249 8.12659C2.85593 7.9275 3.18461 7.9275 3.38666 8.12795L6.66863 11.3755V2.38636ZM10.9883 8.12789C11.1904 7.92743 11.5191 7.92743 11.7225 8.12652C11.9253 8.32561 11.9259 8.64948 11.7239 8.84993L9.42451 11.1245C9.32279 11.2254 9.18993 11.2752 9.05638 11.2752C8.92422 11.2752 8.79205 11.2254 8.69034 11.1258C8.4869 10.9268 8.48621 10.6036 8.68895 10.4031L10.9883 8.12789Z"/>
            </svg>
        </Icon>
    );
};

IconArrow.DIREACTIONS = DIRECTIONS;

export default IconArrow;
