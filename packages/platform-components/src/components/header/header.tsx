import React from 'react';
import { useIntl } from 'react-intl';

import Button from '../button/button';
import { IconSearch } from '../icon/icon';
import Input from '../input/input';
import Logo from '../logo/logo';

import './header.scss';
import HeaderMenu from './__menu/header__menu';

interface HeaderProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const Header = ({ handleChange, value }:  HeaderProps) => {
    const intl = useIntl();

    return (
        <header className="header">
            <Logo />
            <HeaderMenu />
            <Input 
                fullWidth={true}
                handleChange={handleChange}
                icon={<IconSearch />}
                name="user-search"
                placeholder={intl.formatMessage({ id: 'header.inputPlaceholder' })}
                value={value}
            />
            <Button>{intl.formatMessage({ id: 'header.overallStatsButton' })}</Button>
        </header>
    );
};

export default Header;
