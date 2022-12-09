import b from 'b_';
import cx from 'classnames';
import React from 'react';

import { MixProps, SimpleCallback } from '../../typings';
import { SIZE } from '../constants';

import './switcher.scss';

export interface SwitcherProps extends MixProps {
    /** Whether toggle is checked */
    checked: boolean;
    /** Whether toggle is disabled */
    disabled?: boolean;
    /** The size of the toggle */
    size?: SIZE;
    /** Set the handler to handle toggle state changes */
    handleToggle?: SimpleCallback;
}

const Switcher = ({
    checked = false,
    disabled = false,
    size = SIZE.M,
    handleToggle,
    mix,
}: SwitcherProps) => {
    return(
        <label
            className={cx(b('switcher', { disabled, size, checked: checked && size }), mix)}
            data-testid="switcher"
        >
            <input 
                checked={checked}
                className={b('switcher', 'input')}
                data-testid={b('switcher', 'input')}
                disabled={disabled}
                onChange={() => {
                    if (handleToggle && !disabled) {
                        handleToggle();
                    }
                }}
                type="checkbox"
            />
            <span className={b('switcher', 'button')} />
        </label>
    );
};

Switcher.SIZE = SIZE;

export default Switcher;
