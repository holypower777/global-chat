import b from 'b_';
import cx from 'classnames';
import React from 'react';

import { SPIN_SIZES, SPIN_THEMES } from '../constants';

import './spin.scss';

interface SpinProps {
    center?: boolean;
    hidden?: boolean;
    mix?: string;
    size?: SPIN_SIZES;
    theme?: SPIN_THEMES;
}

const Spin = ({ center, hidden, size = SPIN_SIZES.M, theme = SPIN_THEMES.TWITCH, mix }: SpinProps) => {
    return (
        <div className={cx(b('spin', { center, hidden, size }), mix)}>
            <div className={b('spin', 'cube', { first: true, theme })} />
            <div className={b('spin', 'cube', { second: true, theme })} />
            <div className={b('spin', 'cube', { fourth: true, theme })} />
            <div className={b('spin', 'cube', { third: true, theme })} />
        </div>
    );
};

Spin.SIZE = SPIN_SIZES;
Spin.THEME = SPIN_THEMES;

export default Spin;
