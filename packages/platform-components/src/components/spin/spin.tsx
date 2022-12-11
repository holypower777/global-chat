import b from 'b_';
import cx from 'classnames';
import React from 'react';

import { MixProps } from '../../typings';
import { SIZE, THEME_EXTENDED } from '../constants';

import './spin.scss';

export interface SpinProps extends MixProps {
    /** Whether the spin is must be centered */
    center?: boolean;
    /** Whether the spin is hidden */
    hidden?: boolean;
    /** The size of the spin. */
    size?: SIZE;
    /** The weight of the spin. */
    theme?: THEME_EXTENDED;
}

const Spin = ({
    center = false, 
    hidden = false, 
    size = SIZE.M, 
    theme = THEME_EXTENDED.TWITCH, 
    mix,
}: SpinProps) => {
    return (
        <div className={cx(b('spin', { center, hidden, size }), mix)} data-testid="spin">
            <div className={b('spin', 'cube', { first: true, theme })} />
            <div className={b('spin', 'cube', { second: true, theme })} />
            <div className={b('spin', 'cube', { fourth: true, theme })} />
            <div className={b('spin', 'cube', { third: true, theme })} />
        </div>
    );
};

Spin.SIZE = SIZE;
Spin.THEME = THEME_EXTENDED;

export default Spin;
