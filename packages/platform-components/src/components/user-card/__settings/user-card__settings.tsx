import b from 'b_';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import { getLocalStorageValue } from 'platform-components/src/hooks';

import { SETTINGS, SORT_ORDER } from '../../constants';
import Switcher from '../../switcher/switcher';
import Text from '../../text/text';

import './user-card__settings.scss';

interface UserCardSettingsProps {
    updateSettings: (key: string, value: unknown) => void;
}

const UserCardSettings = ({ updateSettings }: UserCardSettingsProps) => {
    const intl = useIntl();
    const [sortValue, setSortValue] = useState(
        getLocalStorageValue(SETTINGS.SORT_BY_DATE, SORT_ORDER.DESC)
    );
    const [showBadges, setShowBadges] = useState(getLocalStorageValue(SETTINGS.SHOW_BADGES, true));
    const [showMessageTime, setShowMessageTime] = useState(
        getLocalStorageValue(SETTINGS.SHOW_MESSAGE_TIME, true)
    );
    const titleMix = b('user-card', 'title');

    return (
        <div className={b('user-card', 'settings')} data-testid={b('user-card', 'settings')}>
            <Text center id="chat.userCard.settings" />
            <div className={b('user-card', 'tuning')}>
                <Text id="chat.userCard.settings.sort" mix={titleMix} />
                <select
                    onChange={(e) => {
                        updateSettings(SETTINGS.SORT_BY_DATE, e.target.value);
                        setSortValue(e.target.value);
                    }}
                    value={sortValue}
                >
                    <option value="desc">
                        {intl.formatMessage({ id: 'chat.userCard.settings.sort.desc' })}
                    </option>
                    <option value="asc">
                        {intl.formatMessage({ id: 'chat.userCard.settings.sort.asc' })}
                    </option>
                </select>
            </div>
            <div className={b('user-card', 'tuning')}>
                <Text id="chat.userCard.settings.showBadges" mix={titleMix} />
                <Switcher
                    checked={showBadges}
                    handleToggle={() => {
                        updateSettings(SETTINGS.SHOW_BADGES, !showBadges);
                        setShowBadges(!showBadges);
                    }}
                />
            </div>
            <div className={b('user-card', 'tuning')}>
                <Text id="chat.userCard.settings.showMessageTime" mix={titleMix} />
                <Switcher
                    checked={showMessageTime}
                    handleToggle={() => {
                        updateSettings(SETTINGS.SHOW_MESSAGE_TIME, !showMessageTime);
                        setShowMessageTime(!showMessageTime);
                    }}
                />
            </div>
        </div>
    );
};

export default UserCardSettings;
