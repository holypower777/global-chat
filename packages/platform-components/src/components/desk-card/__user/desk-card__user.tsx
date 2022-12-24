import b from 'b_';
import cx from 'classnames';
import React, { useState } from 'react';

import { LINKS } from '../../constants';
import UserPanelInfo from '../../header/__user-panel/__user-panel__info/__user-panel__info';
import { UserPanelProps } from '../../header/__user-panel/header__user-panel';
import Text from '../../text/text';

import './desk-card__user.scss';

interface DeskCardDenseProps extends UserPanelProps {
    avatar: string;
    displayName: string;
    isAuth: boolean;
}

const DeskCardUser = ({
    avatar,
    displayName,
    isAuth,
    handleLogout,
    handleRemoveFavorite,
    user,
}: DeskCardDenseProps) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    if (!isAuth) {
        return (
            <a className={cx('desk-card', b('desk-card', 'user'))} href={LINKS.AUTH}>
                <Text id="user-panel.login" />
            </a>
        );
    }

    return (
        <>
            <div
                className={cx('desk-card', b('desk-card', 'user'))}
                onClick={() => setIsPanelOpen(true)}
            >
                <div className={b('desk-card', 'user-container')}>
                    <img alt="user avatar" src={avatar} />
                    <Text ellipsis size={Text.SIZE.S}>
                        {displayName}
                    </Text>
                </div>
            </div>
            <UserPanelInfo
                handleLogout={handleLogout}
                handleRemoveFavorite={handleRemoveFavorite}
                isPanelOpen={isPanelOpen}
                setIsPanelOpen={setIsPanelOpen}
                user={user}
            />
        </>
    );
};

export default DeskCardUser;
