import b from 'b_';
import React, { useState } from 'react';

import { User, TwitchUserCommon } from 'platform-apis/types';

import { SimpleCallback } from '../../../typings';
import { LINKS } from '../../constants';
import { IconUser } from '../../icon/icon';
import Text from '../../text/text';

import './header__user-panel.scss';
import UserPanelInfo from './__user-panel__info/__user-panel__info';

export interface UserPanelProps {
    user: User;
    handleLogout: SimpleCallback;
    handleRemoveFavorite: (user: TwitchUserCommon) => void;
}

const HeaderUserPanel = ({ user, handleLogout, handleRemoveFavorite }: UserPanelProps) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    return (
        <div className={b('header', 'user-panel', { open: isPanelOpen })}>
            {
                /** @ts-ignore */
                user.userId !== 0 ? (
                    <IconUser handleClick={() => setIsPanelOpen(true)} />
                ) : (
                    <a className={b('header', 'link')} href={LINKS.AUTH}>
                        <Text id="user-panel.login" weight={Text.WEIGHT.M} />
                    </a>
                )
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
