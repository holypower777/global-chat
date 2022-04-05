import b from 'b_';
import React, { useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { IconCategory } from '../../icon/icon';

import './header__menu.scss';

const HeaderMenu = () => {
    const [navOpen, setNavOpen] = useState(false);
    const intl = useIntl();
    const ref = useRef(null);
    useOnClickOutside(ref, () => setNavOpen(false));

    return (
        <nav className={b('header', 'menu', { open: navOpen })} ref={ref}>
            <IconCategory handleClick={() => setNavOpen(!navOpen)}/>
            {navOpen && <ul className={b('header', 'menu_links')}>
                <li className={b('header', 'menu_links_link')}>
                    <Link to="/">{intl.formatMessage({ id: 'link.home' })}</Link>
                </li>
                <li className={b('header', 'menu_links_link')}>
                    <Link to="/messages">{intl.formatMessage({ id: 'link.messages' })}</Link>
                </li>
                <li className={b('header', 'menu_links_link')}>
                    <Link to="/overall-stats">{intl.formatMessage({ id: 'link.overallStats' })}</Link>
                </li>
            </ul>}
        </nav>
    );
};

export default HeaderMenu;
