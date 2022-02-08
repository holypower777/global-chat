import b from 'b_';
import React, { Dispatch, SetStateAction } from 'react';

import { IconArrow, IconTwitch } from '../../icon/icon';
import Text from '../../text/text';

import './user-card__header.scss';

interface UserCardHeaderProps {
    isExpanded: boolean;
    setIsExpanded: Dispatch<SetStateAction<boolean>>;
    username: string;
}

const UserCardHeader = ({ isExpanded, setIsExpanded, username }: UserCardHeaderProps) => {
    const arrowDirection = isExpanded ? IconArrow.DIREACTIONS.UP : IconArrow.DIREACTIONS.DOWN;

    return (
        <div className={b('user-card', 'header')}>
            <Text size={Text.SIZE.XL}>{username}</Text>
            <div className={b('user-card', 'header_icons')}>
                <IconArrow direction={arrowDirection} onClick={() => (setIsExpanded(!isExpanded))} />
                <a href={`https://www.twitch.tv/${username}`} target="_blank">
                    <IconTwitch />
                </a>
            </div>
        </div>
    );
};

export default React.memo(UserCardHeader);
