import b from 'b_';
import cx from 'classnames';
import { SimpleCallback } from 'platform-components/src/typings';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { SIZE, THEME } from '../constants';
import Spin from '../spin/spin';

import './button.scss';

interface ButtonProps {
    size?: SIZE;
    theme?: THEME;
    mix?: string;
    disabled?: boolean;
    loading?: boolean;
    children?: ReactNode | Array<ReactNode>;
    icon?: JSX.Element;
    href?: string;
    handleClick?: SimpleCallback;
}

const Button = (props: ButtonProps) => {
    const {
        size = SIZE.L,
        theme = THEME.light,
        mix = '',
        disabled = false,
        loading = false,
        children,
        icon = null,
        href,
        handleClick,
    } = props;

    const className = cx(b('button', { size, theme, disabled }), mix);

    if (href) {
        return (
            <Link to={href}>
                <button
                    className={className}
                    disabled={disabled}
                    onClick={handleClick}
                >
                    {loading && <Spin
                        size={Spin.SIZE.S}
                        theme={theme === THEME.light ? Spin.THEME.BLACK : Spin.THEME.WHITE}
                    />}
                    {children}
                    {icon}
                </button>
            </Link>
        );
    }

    return (
        <button
            className={className}
            disabled={disabled}
            onClick={handleClick}
        >
            {loading && <Spin
                size={Spin.SIZE.S}
                theme={theme === THEME.light ? Spin.THEME.BLACK : Spin.THEME.WHITE}
            />}
            {children}
            {icon}
        </button>
    );
};

Button.SIZE = SIZE;
Button.THEME = THEME;

export default Button;
