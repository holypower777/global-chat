import b from 'b_';
import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import Text from '../../text/text';

import './desk-card__user.scss';

interface DeskCardDenseProps {
    avatar: string;
    displayName: string;
}

const DeskCardUser = ({ avatar, displayName }: DeskCardDenseProps) => {
    return (
        <div className={cx('desk-card', b('desk-card', 'user'))}>
            <div className={b('desk-card', 'user-container')}>
                <img alt="user avatar" src={avatar} />
                <Text ellipsis size={Text.SIZE.S}>{displayName}</Text>
            </div>
            <Link to={`/messages/${displayName}`}>
                <Text id="desk-card.user.my-messages" />
            </Link>
        </div>
    );
};

export default DeskCardUser;
