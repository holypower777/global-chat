import b from 'b_';
import cx from 'classnames';
import React, { useState } from 'react';

import UserCardContent from './__content/user-card__content';
import UserCardHeader from './__header/user-card__header';

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
    } = props;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={cx(b('user-card', { expanded: isExpanded }), mix)}>
            <UserCardHeader
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                username={username}
            />
            {isExpanded && <>
                <UserCardContent
                    avatarSrc={avatarSrc}
                    createdAt={createdAt}
                    heatmapDates={heatmapDates}
                    mostActiveChannel={mostActiveChannel}
                    totalMessages={totalMessages}
                    userId={userId}
                />
            </>}
        </div>
    );
};

export default React.memo(UserCard);
