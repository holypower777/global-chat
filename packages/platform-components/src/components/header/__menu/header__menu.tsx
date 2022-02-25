import b from 'b_';
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { IconCategory } from '../../icon/icon';

import './header__menu.scss';

const HeaderMenu = () => {
    const [navOpen, setNavOpen] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, () => setNavOpen(false));

    return (
        <nav className={b('header', 'menu', { open: navOpen })} ref={ref}>
            <IconCategory handleClick={() => setNavOpen(!navOpen)}/>
            {navOpen && <ul className={b('header', 'menu_links')}>
                <li className={b('header', 'menu_links_link')}>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className={b('header', 'menu_links_link')}>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>}
        </nav>
    );
};

export default HeaderMenu;
