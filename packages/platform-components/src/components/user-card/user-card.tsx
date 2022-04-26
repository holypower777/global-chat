import b from 'b_';
import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import { useMeasure } from '../../hooks';

import UserCardContent from './__content/user-card__content';
import UserCardHeader from './__header/user-card__header';
import UserCardSettings from './__settings/user-card__settings';

import './user-card.scss';

interface UserCardProps {
    userId: number;
    displayName: string;
    profileImageUrl: string;
    messagesAmount: number;
    createdAt: Date | null;
    heatmapDates: Array<Date>;
    mostActiveChannel: string;
    updateSettings: (key: string, value: unknown) => void;
    mix?: string;
}

const UserCard = (props: UserCardProps) => {
    const {
        displayName,
        userId,
        profileImageUrl,
        messagesAmount,
        createdAt,
        heatmapDates,
        mix,
        mostActiveChannel,
        updateSettings,
    } = props;
    const defaultHeight = 45;
    const [isContentExpanded, setIsContentExpanded] = useState(false);
    const [isSettingsExpanded, setIsSettingsExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState(defaultHeight);
    const [ref, { height, width }] = useMeasure<HTMLDivElement>();

    const expand = useSpring({
        height: isContentExpanded || isSettingsExpanded ? contentHeight : defaultHeight,
    });

    useEffect(() => {
        setContentHeight(height);
    }, [height]);

    return (
        <div>
            <animated.div className={cx(b('user-card', { expanded: isContentExpanded || isSettingsExpanded }), mix)} style={expand}>
                <div ref={ref}>
                    <UserCardHeader
                        displayName={displayName}
                        isContentExpanded={isContentExpanded}
                        isSettingsExpanded={isSettingsExpanded}
                        setIsExpanded={setIsContentExpanded}
                        setIsSettingsExpanded={setIsSettingsExpanded}
                    />
                    {isContentExpanded && <UserCardContent
                        createdAt={createdAt}
                        heatmapDates={heatmapDates}
                        messagesAmount={messagesAmount}
                        mostActiveChannel={mostActiveChannel}
                        profileImageUrl={profileImageUrl}
                        userId={userId}
                        width={width}
                    />}
                    {isSettingsExpanded && <UserCardSettings
                        updateSettings={updateSettings}
                    />}
                </div>
            </animated.div>
        </div>
    );
};

export default React.memo(UserCard);
