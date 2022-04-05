import b from 'b_';
import React, { Dispatch, SetStateAction } from 'react';

import { IconArrow, IconCog, IconTwitch } from '../../icon/icon';
import Text from '../../text/text';

import './user-card__header.scss';

interface UserCardHeaderProps {
    isContentExpanded: boolean;
    isSettingsExpanded: boolean;
    setIsExpanded: Dispatch<SetStateAction<boolean>>;
    setIsSettingsExpanded: Dispatch<SetStateAction<boolean>>;
    displayName: string;
}

const UserCardHeader = ({ isContentExpanded, isSettingsExpanded, setIsExpanded, setIsSettingsExpanded, displayName }: UserCardHeaderProps) => {
    const arrowDirection = isContentExpanded ? IconArrow.DIREACTIONS.UP : IconArrow.DIREACTIONS.DOWN;

    return (
        <div className={b('user-card', 'header')} onClick={() => (setIsExpanded(!isContentExpanded))}>
            <Text size={Text.SIZE.XL}>{displayName}</Text>
            <div className={b('user-card', 'header_icons')}>
                <IconArrow direction={arrowDirection} />
                <IconCog handleClick={(e) => {
                    e.stopPropagation();
                    setIsSettingsExpanded(!isSettingsExpanded);
                }}
                />
                <a href={`https://www.twitch.tv/${displayName}`} target="_blank">
                    <IconTwitch />
                </a>
            </div>
        </div>
    );
};

export default React.memo(UserCardHeader);
