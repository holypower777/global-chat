import b from 'b_';
import cx from 'classnames';
import React, { useState } from 'react';

import UserCardContent from './__content/user-card__content';
import UserCardHeader from './__header/user-card__header';
import UserCardSettings from './__settings/user-card__settings';

import './user-card.scss';

interface UserCardProps {
    username: string;
    userId: number;
    avatarSrc: string;
    totalMessages: number;
    createdAt: Date;
    heatmapDates: Array<string>;
    mostActiveChannel: string;
    mix?: string;
    updateSettings: (key: string, value: unknown) => void;
}

const UserCard = (props: UserCardProps) => {
    const {
        username,
        userId,
        avatarSrc,
        totalMessages,
        createdAt,
        heatmapDates,
        mix,
        mostActiveChannel,
        updateSettings,
    } = props;
    const [isContentExpanded, setIsContentExpanded] = useState(false);
    const [isSettingsExpanded, setIsSettingsExpanded] = useState(false);

    return (
        <div className={cx(b('user-card', { expanded: isContentExpanded || isSettingsExpanded }), mix)}>
            <UserCardHeader
                isContentExpanded={isContentExpanded}
                isSettingsExpanded={isSettingsExpanded}
                setIsExpanded={setIsContentExpanded}
                setIsSettingsExpanded={setIsSettingsExpanded}
                username={username}
            />
            {isContentExpanded && <UserCardContent
                avatarSrc={avatarSrc}
                createdAt={createdAt}
                heatmapDates={heatmapDates}
                mostActiveChannel={mostActiveChannel}
                totalMessages={totalMessages}
                userId={userId}
            />}
            {isSettingsExpanded && <UserCardSettings 
                updateSettings={updateSettings}
            />}
        </div>
    );
};

export default React.memo(UserCard);
