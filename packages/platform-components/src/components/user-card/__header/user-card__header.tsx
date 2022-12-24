import b from 'b_';
import React from 'react';
import { useIntl } from 'react-intl';

import { SimpleCallback } from '../../../typings';
import { IconCog, IconStar, IconTwitch, IconTwitchtracker } from '../../icon/icon';
import Text from '../../text/text';

import './user-card__header.scss';

interface UserCardHeaderProps {
    displayName: string;
    isFavorite: boolean;
    isBroadcaster: boolean;
    handleStarClick: SimpleCallback;
    handleToggle: SimpleCallback;
}

const UserCardHeader = ({
    displayName,
    isFavorite,
    isBroadcaster,
    handleStarClick,
    handleToggle,
}: UserCardHeaderProps) => {
    const intl = useIntl();

    return (
        <div
            className={b('user-card', 'header')}
            data-testid={b('user-card', 'header')}
            onClick={handleToggle}
        >
            <Text size={Text.SIZE.XL}>{displayName}</Text>
            <div className={b('user-card', 'icons')} data-testid={b('user-card', 'icons')}>
                <IconStar
                    clickable
                    filled={isFavorite}
                    handleClick={(e: React.MouseEvent<HTMLElement>) => {
                        e.stopPropagation();
                        handleStarClick();
                    }}
                />
                <IconCog
                    clickable
                    title={intl.formatMessage({ id: 'chat.userCard.settings.title' })}
                />
                {isBroadcaster ? (
                    <a
                        href={`https://twitchtracker.com/${displayName}`}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        title={intl.formatMessage({ id: 'chat.userCard.twitchtracker.title' })}
                    >
                        <IconTwitchtracker clickable />
                    </a>
                ) : null}
                <a
                    href={`https://www.twitch.tv/${displayName}`}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    title={intl.formatMessage({ id: 'chat.userCard.twitch.title' })}
                >
                    <IconTwitch clickable />
                </a>
            </div>
        </div>
    );
};

export default UserCardHeader;
