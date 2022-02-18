import b from 'b_';
import cx from 'classnames';
import { SimpleCallback } from 'platform-components/src/typings';
import React from 'react';

import './switcher.scss';

interface SwitcherProps {
    isOn: boolean;
    handleToggle: SimpleCallback;
    disabled?: boolean;
    mix?: string;
}

const Switcher = ({ isOn, handleToggle, disabled = false, mix }: SwitcherProps) => {
    return (
        <label className={cx(b('switch', 'label', { on: isOn, disabled }), mix)}>
            <input
                checked={isOn}
                className="switch"
                disabled={disabled}
                onChange={handleToggle}
                type="checkbox"
            />
            <span className={b('switch', 'button')} />
        </label>
    );
};

export default Switcher;
