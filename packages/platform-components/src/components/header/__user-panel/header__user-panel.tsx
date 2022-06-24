import b from 'b_';
import { User, UserCommonAPI } from 'platform-apis/types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { SimpleCallback } from '../../../typings';
import { IconUser } from '../../icon/icon';
import Text from '../../text/text';

import './header__user-panel.scss';
import UserPanelInfo from './__user-panel__info/__user-panel__info';

export interface UserPanelProps {
    user: User;
    handleLogout: SimpleCallback;
    handleRemoveFavorite: (user: UserCommonAPI) => void;
}

const HeaderUserPanel = ({ user, handleLogout, handleRemoveFavorite }: UserPanelProps) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const link = process.env.NODE_ENV === 'development'
        ? (<a className={b('header', 'link')} href="http://localhost:3000/auth/twitch/login">
            <Text id="user-panel.login" weight={Text.WEIGHT.M} />
        </a>)
        : (<Link className={b('header', 'link')} to="/auth/twitch/login">
            <Text id="user-panel.login" weight={Text.WEIGHT.M} />
        </Link>);

    return (
        <div className={b('header', 'user-panel', { open: isPanelOpen })}>
            {user.userId !== 0
                ? <IconUser handleClick={() => setIsPanelOpen(true)} />
                : link
            }
            <UserPanelInfo
                handleLogout={handleLogout}
                handleRemoveFavorite={handleRemoveFavorite}
                isPanelOpen={isPanelOpen}
                setIsPanelOpen={setIsPanelOpen}
                user={user}
            />
        </div>
    );
};

export default HeaderUserPanel;
