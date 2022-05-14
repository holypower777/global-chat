import b from 'b_';
import { SimpleCallback } from 'platform-components/src/typings';
import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { IconSearch } from '../icon/icon';
import Input from '../input/input';
import Logo from '../logo/logo';
import Text from '../text/text';

import HeaderMenu from './__menu/header__menu';
import HeaderSettings from './__settings/header__settings';

import './header.scss';

interface HeaderProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    updateSettings: (key: string, value: unknown) => void;
    handleSubmit: SimpleCallback;
    value: string;
    isLoading: boolean;
}

const Header = ({ handleChange, updateSettings, handleSubmit, value, isLoading }:  HeaderProps) => {
    const intl = useIntl();
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (value.length && e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <header className="header">
            <Logo />
            <HeaderMenu />
            <Input 
                disabled={isLoading}
                fullWidth={true}
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
                icon={<IconSearch />}
                name="user-search"
                placeholder={intl.formatMessage({ id: 'header.inputPlaceholder' })}
                settings={<HeaderSettings updateSettings={updateSettings} />}
                value={value}
            />
            <Link className={b('header', 'link')} to="/overall-stats">
                <Text id="link.overallStats" weight={Text.WEIGHT.M} />
            </Link>
            <Link className={b('header', 'link')} to="/live-chat">
                <Text id="link.liveChat" weight={Text.WEIGHT.M} />
            </Link>
        </header>
    );
};

export default Header;
