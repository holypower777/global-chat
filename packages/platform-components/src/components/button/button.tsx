import b from 'b_';
import cx from 'classnames';
import React, { ReactNode } from 'react';

import { MixProps, OptionalChildrenProps, SimpleCallback } from '../../typings';
import { SIZE, THEME_EXTENDED } from '../constants';

import './button.scss';

export interface ButtonProps extends OptionalChildrenProps, MixProps {
    /** Option to fit button width to its parent width */
    block?: boolean;
    /** Disabled state of button */
    disabled?: boolean;
    /** Set the icon component of button. Children are ommited when icon is provided */
    icon?: ReactNode;
    /** Whether the button is loading */
    loading?: boolean;
    /** The prefix icon for the button. Note: if suffix provided prefix is ommited */
    prefix?: ReactNode;
    /** The size of the button */
    size?: SIZE;
    /** The prefix icon for the button */
    suffix?: ReactNode;
    /** Set the handler to handle click event */
    handleClick?: SimpleCallback;
    /** The theme of the button */
    theme?: THEME_EXTENDED;
}

const Button = ({
    block = false,
    disabled = false,
    icon = null,
    loading = false,
    prefix = null,
    size = SIZE.M,
    suffix = null,
    handleClick,
    theme = THEME_EXTENDED.LIGHT,
    mix,
    children = null,
}: ButtonProps) => {
    return (
        <button
            className={cx(
                b('button', {
                    size,
                    disabled,
                    theme,
                    loading: loading && theme,
                    block,
                    icon: !!icon && size,
                }),
                mix
            )}
            data-testid="button"
            disabled={disabled}
            onClick={() => {
                if (handleClick && !disabled && !loading) {
                    handleClick();
                }
            }}
        >
            {!suffix && prefix}
            {icon || children}
            {suffix}
        </button>
    );
};

Button.SIZE = SIZE;
Button.THEME = THEME_EXTENDED;

export default Button;
