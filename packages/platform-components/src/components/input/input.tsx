import b from 'b_';
import cx from 'classnames';
import React, { ReactNode, useState } from 'react';

import { SIZE } from '../constants';
import Spin from '../spin/spin';

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
    isDropdownLoading?: boolean;
    size?: SIZE;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown?: (e: React.KeyboardEvent) => void;
    handleKeyUp?: (e: React.KeyboardEvent) => void;
    autoFocus?: boolean;
    settings?: ReactNode | Array<ReactNode>;
    dropdownItems?: Array<ReactNode>;
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
        isDropdownLoading = false,
        size = SIZE.L,
        handleChange,
        handleKeyDown,
        handleKeyUp,
        autoFocus = false,
        settings,
        dropdownItems = [],
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
                onKeyUp={handleKeyUp}
                placeholder={placeholder}
                readOnly={readOnly}
                required={required}
                spellCheck={false}
                type={type}
                value={value}
            />
            {settings}
            {(dropdownItems.length > 0 || isDropdownLoading) &&
                <ul className={cx(b('input', 'dropdown'), 'custom-scroll')}>
                    {isDropdownLoading && <Spin size={Spin.SIZE.S} />}
                    {dropdownItems}
                </ul>}
        </div>
    );
};

Input.SIZE = SIZE;

export default Input;
