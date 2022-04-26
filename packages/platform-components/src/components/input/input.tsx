import b from 'b_';
import cx from 'classnames';
import React, { ReactNode, useState } from 'react';

import { SIZE } from '../constants';

import './input.scss';

interface InputProps {
    mix?: string;
    icon?: JSX.Element;
    placeholder?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    name?: string;
    readOnly?: boolean;
    required?: boolean;
    type?: string;
    value?: string;
    size?: SIZE;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown?: (e: React.KeyboardEvent) => void;
    autoFocus?: boolean;
    settings?: ReactNode | Array<ReactNode>;
}

const Input = (props: InputProps) => {
    const {
        mix,
        icon = null,
        placeholder,
        disabled = false,
        fullWidth = false,
        name,
        readOnly = false,
        required = false,
        type = 'string',
        value,
        size = SIZE.L,
        handleChange,
        handleKeyDown,
        autoFocus = false,
        settings,
    } = props;
    const [focus, setFocus] = useState(false);

    return (
        <div className={cx(b('input', 'container', { full: fullWidth, size, focus, disabled }), mix)}>
            {icon}
            <input 
                autoFocus={autoFocus}
                className={b('input', 'field', { disabled })}
                disabled={disabled}
                name={name}
                onBlur={() => (setFocus(false))}
                onChange={handleChange}
                onFocus={() => (setFocus(true))}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                readOnly={readOnly}
                required={required}
                spellCheck={false}
                type={type}
                value={value}
            />
            {settings}
        </div>
    );
};

Input.SIZE = SIZE;

export default Input;
