import b from 'b_';
import cx from 'classnames';
import React, { ReactNode } from 'react';

import { SimpleCallback } from '../../typings';
import { CHIP_TAG } from '../constants';
import Text from '../text/text';

import './chip.scss';

interface ChipProps {
    label: string | number;
    secondLabel?: string | number;
    avatar?: ReactNode;
    clickable?: boolean;
    selected?: boolean;
    handleClick?: SimpleCallback;
    tag?: CHIP_TAG;
    mix?: string;
}

//TODO: avatar support
const Chip = React.memo(({
    label,
    secondLabel,
    avatar,
    clickable = true,
    selected = false,
    handleClick,
    tag = CHIP_TAG.DIV,
    mix,
}: ChipProps) => {
    return React.createElement(
        tag,
        {
            className: cx(b('chip', { clickable, selected }), mix),
            onClick: clickable ? handleClick : () => ({}),
        },
        <>
            {avatar}
            < Text > {label}</Text >
            {secondLabel && <Text mix={b('chip', 'second-label')}>{secondLabel}</Text>}
        </>
    );
}, (prevProps, nextProps) => {
    return prevProps.selected === nextProps.selected
        && prevProps.label === nextProps.label
        && prevProps.secondLabel === nextProps.secondLabel
        && prevProps.mix === nextProps.mix;
});

export default Chip;
