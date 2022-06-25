import b from 'b_';
import cx from 'classnames';
import { convertCommonUserToAPI } from 'platform-apis/types';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

import { useOnClickOutside } from '../../../../hooks';
import { LINKS } from '../../../constants';
import { IconCross } from '../../../icon/icon';
import Text from '../../../text/text';
import { UserPanelProps } from '../header__user-panel';

import './__user-panel__info.scss';

interface UserPanelInfoProps extends UserPanelProps {
    isPanelOpen: boolean;
    setIsPanelOpen: (arg0: boolean) => void;
}

const UserPanelInfo = ({
    user,
    handleLogout,
    isPanelOpen,
    setIsPanelOpen,
    handleRemoveFavorite,
}: UserPanelInfoProps) => {
    const rootClass = b('header', 'user-panel');
    const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, () => setIsPanelOpen(false));

    const { right } = useSpring({
        from: { right: '-100%' },
        right: isPanelOpen ? '0' : '-100%',
    });

    if (user.userId === 0) {
        return null;
    }

    return (
        <animated.aside
            className={b(rootClass, 'info')}
            ref={ref}
            style={{ right }}
        >
            <div className={b(rootClass, 'info_name')}>
                <Text
                    size={Text.SIZE.L}
                    weight={Text.WEIGHT.M}
                >
                    {user.displayName}
                </Text>
                <IconCross handleClick={() => setIsPanelOpen(false)} />
            </div>
            <Link to={`${LINKS.MESSAGES}/${user.displayName}`}>
                <Text
                    id="user-panel.user.messages"
                    mix={b(rootClass, 'info_messages')}
                    size={Text.SIZE.L}
                    weight={Text.WEIGHT.M}
                />
            </Link>
            <Text
                handleClick={() => (setIsSearchOpen(!isSearchOpen))}
                id="user-panel.user.search"
                mix={b(rootClass, 'info_collapse')}
                size={Text.SIZE.L}
                weight={Text.WEIGHT.M}
            />
            {isSearchOpen && <ul className={cx(b(rootClass, 'info_list'), 'custom-scroll')}>
                {user.searchHistory.map((e) => (
                    <Link key={e.userId} to={`${LINKS.MESSAGES}/${e.displayName}`}>
                        <Text tag={Text.TAG.LI}>{e.displayName}</Text>
                    </Link>
                ))}
            </ul>}
            <div
                className={b(rootClass, 'info_collapse')}
                onClick={() => (setIsFavoritesOpen(!isFavoritesOpen))}
            >
                <Text
                    id="user-panel.user.favorites"
                    size={Text.SIZE.L}
                    weight={Text.WEIGHT.M}
                />
            </div>
            {isFavoritesOpen && <ul className={cx(b(rootClass, 'info_list'), 'custom-scroll')}>
                {user.favorites.map((e) => (
                    <li key={e.userId}>
                        <Link to={`${LINKS.MESSAGES}/${e.displayName}`}>
                            <Text>{e.displayName}</Text>
                        </Link>
                        <IconCross handleClick={() => handleRemoveFavorite(convertCommonUserToAPI(e))} />
                    </li>
                ))}
            </ul>}
            <Text
                handleClick={() => (handleLogout())}
                id="user-panel.logout"
                mix={b(rootClass, 'info_logout')}
                size={Text.SIZE.L}
                weight={Text.WEIGHT.M}
            />
        </animated.aside>
    );
};

export default UserPanelInfo;
