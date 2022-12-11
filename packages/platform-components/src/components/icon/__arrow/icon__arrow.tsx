import React from 'react';

import { DIRECTIONS } from '../../constants';
import Icon, { SingleIconProps } from '../icon';

import './icon__arrow.scss';

interface IconArrowProps extends SingleIconProps {
    direction?: DIRECTIONS;
}

const IconArrow = ({ direction = DIRECTIONS.BOTTOM, ...props }: IconArrowProps) => (
    <Icon ico="arrow" mods={{ direction }} {...props}>
        <svg data-testid="icon__arrow" viewBox="0 0 12 12">
            <path clipRule="evenodd" d="M5.33491 1.90909C5.33491 1.68327 5.52091 1.5 5.75008 1.5C5.97926 1.5 6.16526 1.68327 6.16526 1.90909V10.0909C6.16526 10.2567 6.06396 10.4056 5.9084 10.4689C5.85748 10.4896 5.80378 10.5 5.75008 10.5C5.64214 10.5 5.5353 10.4585 5.45614 10.3795L2.12089 7.07945C1.95924 6.91964 1.9598 6.66055 2.12199 6.50127C2.28474 6.342 2.54769 6.342 2.70933 6.50236L5.33491 9.10036V1.90909ZM8.79067 6.50231C8.95231 6.34195 9.21526 6.34195 9.37801 6.50122C9.5402 6.66049 9.54076 6.91958 9.37911 7.07995L7.5396 8.89958C7.45823 8.98031 7.35194 9.02013 7.24511 9.02013C7.13937 9.02013 7.03364 8.98031 6.95227 8.90067C6.78952 8.7414 6.78897 8.48286 6.95116 8.32249L8.79067 6.50231Z" fillRule="evenodd" />
        </svg>
    </Icon>
);

IconArrow.DIRECTIONS = DIRECTIONS;

export default IconArrow;
