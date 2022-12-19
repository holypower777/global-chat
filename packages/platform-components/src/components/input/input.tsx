import b from 'b_';
import cx from 'classnames';
import React, { ReactNode, useState } from 'react';

import { MixProps, SimpleCallback } from '../../typings';
import { SIZE } from '../constants';

import './input.scss';

export interface InputProps extends MixProps {
    /** Whether the input must be in focus initially */
    autoFocus?: boolean;
    /** Whether the input is disabled */
    disabled?: boolean;
    /** The input placeholder value */
    placeholder?: string;
    /** The prefix icon for the Input */
    prefix?: ReactNode;
    /** The size of the input box */
    size?: SIZE;
    /** The prefix icon for the Input */
    suffix?: ReactNode;
    /** The type of input, see: https://developer.mozilla.org/ru/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types */
    type?: 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel' | 'text';
    /** The input content value */
    value?: string;
    /** Callback when user input */
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** The callback function that is triggered when Enter key is pressed. Note: input value must not be empty */
    handleEnterPress?: SimpleCallback;
    /** The callback function that is triggered when key is presssed */
    handleKeyUp?: SimpleCallback;
    /** The callback function that is triggered when key is released */
    handleKeyDown?: SimpleCallback;
    /** The input name value */
    name?: string;
    /** Whether the input is readOnly */
    readonly?: boolean;
    /** Whether the input is required */
    required?: boolean;
}

const Input = ({
    autoFocus = false,
    disabled = false,
    mix,
    placeholder,
    prefix,
    size = SIZE.M,
    suffix,
    type = 'text',
    value,
    handleChange,
    handleEnterPress,
    handleKeyUp,
    handleKeyDown,
    name,
    readonly = false,
    required = false,
}: InputProps) => {
    const [focus, setFocus] = useState(false);

    const keyDownHandler = (e: React.KeyboardEvent) => {
        if (handleEnterPress && value && e.key === 'Enter') {
            handleEnterPress();
            return;
        }

        if (handleKeyDown) {
            handleKeyDown();
        }
    };

    return (
        <div className={cx(b('input', { disabled, readonly, size, focus }), mix)} data-testid="input">
            {prefix && <div className={b('input', 'prefix', { size, disabled })}>{prefix}</div>}
            <input
                autoFocus={autoFocus}
                className={b('input', 'field', { size, disabled })}
                data-testid={b('input', 'field')}
                disabled={disabled}
                name={name}
                onBlur={() => (setFocus(false))}
                onChange={handleChange}
                onFocus={() => (setFocus(true))}
                onKeyDown={keyDownHandler}
                onKeyUp={handleKeyUp}
                placeholder={placeholder}
                readOnly={readonly}
                required={required}
                spellCheck={false}
                type={type}
                value={value}
            />
            {suffix && <div className={b('input', 'suffix', { size, disabled })}>{suffix}</div>}
        </div>
    );
};

Input.SIZE = SIZE;

export default Input;
