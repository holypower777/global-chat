import b from 'b_';
import React, { useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'wouter';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { LINKS } from '../../constants';
import { IconCategory } from '../../icon/icon';

import './header__menu.scss';

interface HeaderMenuProps {
    isAuth: boolean;
}

const HeaderMenu = ({ isAuth }: HeaderMenuProps) => {
    const [navOpen, setNavOpen] = useState(false);
    const intl = useIntl();
    const ref = useRef(null);
    useOnClickOutside(ref, () => setNavOpen(false));

    return (
        <nav className={b('header', 'menu', { open: navOpen })} ref={ref}>
            <IconCategory handleClick={() => setNavOpen(!navOpen)} />
            {navOpen && <ul className={b('header', 'menu_links')}>
                {!isAuth && <li className={b('header', 'menu_links_link')}>
                    <a href={LINKS.AUTH}>{intl.formatMessage({ id: 'user-panel.login' })}</a>
                </li>}
                <li className={b('header', 'menu_links_link')}>
                    <Link to={LINKS.HOME}>{intl.formatMessage({ id: 'link.home' })}</Link>
                </li>
                <li className={b('header', 'menu_links_link')}>
                    <Link to={LINKS.MESSAGES}>{intl.formatMessage({ id: 'link.messages' })}</Link>
                </li>
                <li className={b('header', 'menu_links_link')}>
                    <Link to={LINKS.OVERALL_STATS}>{intl.formatMessage({ id: 'link.overallStats' })}</Link>
                </li>
                <li className={b('header', 'menu_links_link')}>
                    <Link to={LINKS.ABOUT}>{intl.formatMessage({ id: 'about.header' })}</Link>
                </li>
                <li className={b('header', 'menu_links_link')}>
                    <Link to={LINKS.LIVE_CHAT}>{intl.formatMessage({ id: 'link.liveChat' })}</Link>
                </li>
            </ul>}
        </nav>
    );
};

export default HeaderMenu;
