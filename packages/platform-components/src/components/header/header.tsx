import { SimpleCallback } from 'platform-components/src/typings';
import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import Button from '../button/button';
import { IconSearch } from '../icon/icon';
import Input from '../input/input';
import Logo from '../logo/logo';

import HeaderMenu from './__menu/header__menu';

import './header.scss';

interface HeaderProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: SimpleCallback;
    value: string;
    isLoading: boolean;
}

const Header = ({ handleChange, handleSubmit, value, isLoading }:  HeaderProps) => {
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
                value={value}
            />
            <Link to="/overall-stats">
                <Button>{intl.formatMessage({ id: 'link.overallStats' })}</Button>
            </Link>
        </header>
    );
};

export default Header;
