import b from 'b_';
import { User, UserCommonAPI } from 'platform-apis/types';
import { SimpleCallback } from 'platform-components/src/typings';
import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'wouter';

import { LINKS } from '../constants';
import { IconSearch } from '../icon/icon';
import Input from '../input/input';
import Logo from '../logo/logo';
import Text from '../text/text';

import HeaderMenu from './__menu/header__menu';
import HeaderSettings from './__settings/header__settings';
import HeaderUserPanel from './__user-panel/header__user-panel';

import './header.scss';

interface HeaderProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    updateSettings: (key: string, value: unknown) => void;
    handleSubmit: SimpleCallback;
    handleLogout: SimpleCallback;
    handleRemoveFavorite: (user: UserCommonAPI) => void;
    handleSelect: (e: string) => void;
    handleKeyUp: (e: React.KeyboardEvent) => void;
    handleKeyDown: (e: React.KeyboardEvent) => void;
    suggestions: Array<string>;
    value: string;
    isLoading: boolean;
    isSuggestionsLoading: boolean;
    user: User;
}

const Header = ({
    handleChange,
    updateSettings,
    handleSubmit,
    handleLogout,
    handleRemoveFavorite,
    handleSelect,
    handleKeyUp,
    handleKeyDown,
    value,
    isLoading,
    isSuggestionsLoading,
    suggestions = [],
    user,
}: HeaderProps) => {
    const intl = useIntl();
    const handleKeyDownCombined = (e: React.KeyboardEvent) => {
        handleKeyDown(e);

        if (value.length && e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <header className="header">
            <Logo />
            <HeaderMenu isAuth={user.userId !== 0} />
            <Input
                disabled={isLoading}
                dropdownItems={suggestions.map((e) => (<li
                    key={e}
                    onClick={() => (handleSelect(e))}
                >{e}</li>))}
                fullWidth={true}
                handleChange={handleChange}
                handleKeyDown={handleKeyDownCombined}
                handleKeyUp={handleKeyUp}
                icon={<IconSearch />}
                isDropdownLoading={isSuggestionsLoading}
                name="user-search"
                placeholder={intl.formatMessage({ id: 'header.inputPlaceholder' })}
                settings={<HeaderSettings updateSettings={updateSettings} />}
                value={value}
            />
            <Link className={b('header', 'link')} to={LINKS.OVERALL_STATS}>
                <Text id="link.overallStats" weight={Text.WEIGHT.M} />
            </Link>
            <Link className={b('header', 'link')} to={LINKS.LIVE_CHAT}>
                <Text id="link.liveChat" weight={Text.WEIGHT.M} />
            </Link>
            <HeaderUserPanel
                handleLogout={handleLogout}
                handleRemoveFavorite={handleRemoveFavorite}
                user={user}
            />
        </header>
    );
};

export default Header;
