import b from 'b_';
import { convertCommonUserToAPI, TwitchUser, UserCommonAPI } from 'platform-apis/types';
import React, { Dispatch, SetStateAction } from 'react';
import { useIntl } from 'react-intl';

import { IconArrow, IconCog, IconStar, IconTwitch, IconTwitchtracker } from '../../icon/icon';
import Text from '../../text/text';

import './user-card__header.scss';

interface UserCardHeaderProps {
    isContentExpanded: boolean;
    isSettingsExpanded: boolean;
    isBroadcaster: boolean;
    setIsExpanded: Dispatch<SetStateAction<boolean>>;
    setIsSettingsExpanded: Dispatch<SetStateAction<boolean>>;
    isAuth: boolean;
    isFavorite: boolean;
    handleFavorite?: (user: UserCommonAPI) => void;
    twitchUser: TwitchUser;
}

const UserCardHeader = ({ 
    isContentExpanded, 
    isSettingsExpanded, 
    isBroadcaster,
    isAuth,
    isFavorite,
    handleFavorite,
    setIsExpanded, 
    setIsSettingsExpanded, 
    twitchUser,
}: UserCardHeaderProps) => {
    const intl = useIntl();

    const arrowDirection = isContentExpanded ? IconArrow.DIREACTIONS.UP : IconArrow.DIREACTIONS.DOWN;
    const handleHeaderClick = () => {
        if (isContentExpanded || isSettingsExpanded) {
            setIsExpanded(false);
            setIsSettingsExpanded(false);
            return;
        }

        setIsExpanded(!isContentExpanded);
    };

    return (
        <div className={b('user-card', 'header')} onClick={handleHeaderClick}>
            <Text size={Text.SIZE.XL}>{twitchUser.displayName}</Text>
            <div className={b('user-card', 'header_icons')}>
                <IconArrow
                    direction={arrowDirection}
                    handleClick={(e) => {
                        e.stopPropagation();
                        setIsExpanded(!isContentExpanded);
                    }}
                />
                {isAuth && <IconStar 
                    filled={isFavorite}
                    handleClick={(e) => {
                        e.stopPropagation();
                        if (handleFavorite) {
                            handleFavorite(convertCommonUserToAPI({
                                userId: twitchUser.userId,
                                displayName: twitchUser.displayName,
                                profileImageUrl: twitchUser.profileImageUrl,
                            }));
                        }
                    }}
                />}
                <IconCog
                    handleClick={(e) => {
                        e.stopPropagation();
                        setIsSettingsExpanded(!isSettingsExpanded);
                    }}
                    title={intl.formatMessage({ id: 'chat.userCard.settings.title' })}
                />
                {isBroadcaster && <a
                    href={`https://twitchtracker.com/${twitchUser.displayName}`}
                    onClick={(e) => (e.stopPropagation())}
                    target="_blank"
                    title={intl.formatMessage({ id: 'chat.userCard.twitchtracker.title' })}
                >
                    <IconTwitchtracker />
                </a>}
                <a
                    href={`https://www.twitch.tv/${twitchUser.displayName}`}
                    onClick={(e) => (e.stopPropagation())}
                    target="_blank"
                    title={intl.formatMessage({ id: 'chat.userCard.twitch.title' })}
                >
                    <IconTwitch />
                </a>
            </div>
        </div>
    );
};

export default React.memo(UserCardHeader);
