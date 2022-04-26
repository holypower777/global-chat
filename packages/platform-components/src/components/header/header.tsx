import b from 'b_';
import { SimpleCallback } from 'platform-components/src/typings';
import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import Button from '../button/button';
import { IconSearch } from '../icon/icon';
import Input from '../input/input';
import Logo from '../logo/logo';

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
                <Button>{intl.formatMessage({ id: 'link.overallStats' })}</Button>
            </Link>
            <Link className={b('header', 'link')} to="/live-chat">
                <Button>{intl.formatMessage({ id: 'link.liveChat' })}</Button>
            </Link>
        </header>
    );
};

export default Header;
