import b from 'b_';
import cx from 'classnames';
import React, { useRef, useState } from 'react';

import { getLocalStorageValue, useOnClickOutside } from '../../../hooks';
import { SEARCH_TYPE, SETTINGS } from '../../constants';
import { IconDots } from '../../icon/icon';
import Text from '../../text/text';

import './header__settings.scss';

interface HeaderSettingsProps {
    updateSettings: (key: string, value: unknown) => void;
    mix?: string;
}

const HeaderSettings = ({ updateSettings, mix }: HeaderSettingsProps) => {
    const [value, setValue] = useState(getLocalStorageValue(SETTINGS.USER_TYPE, SEARCH_TYPE.USERNAME));
    const [settingsOpen, setSettingsOpen] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, () => setSettingsOpen(false));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const res = e.target.value as SEARCH_TYPE;
        updateSettings(SETTINGS.USER_TYPE, res);
        setValue(res);
    };

    return (
        <div ref={ref}>
            <IconDots handleClick={() => setSettingsOpen(!settingsOpen)} />
            {settingsOpen && <div className={cx(b('header', 'settings'), mix)}>
                <Text id="header.settings.type" style={{ marginBottom: 10 }}/>
                <label className={b('header', 'settings-label', { checked: value === SEARCH_TYPE.USERNAME })}>
                    <input
                        checked={value === SEARCH_TYPE.USERNAME}
                        name="header-settings"
                        onChange={handleChange}
                        type="radio"
                        value={SEARCH_TYPE.USERNAME}
                    />
                    <Text id="common.username" size={Text.SIZE.S}/>
                </label>
                <label className={b('header', 'settings-label', { checked: value === SEARCH_TYPE.USER_ID })}>
                    <input
                        checked={value === SEARCH_TYPE.USER_ID}
                        name="header-settings"
                        onChange={handleChange}
                        type="radio"
                        value={SEARCH_TYPE.USER_ID}
                    />
                    <Text id="common.userId" size={Text.SIZE.S}/>
                </label>
            </div>}
        </div>
    );
};

export default HeaderSettings;
