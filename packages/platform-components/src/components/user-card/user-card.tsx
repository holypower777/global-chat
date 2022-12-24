import b from 'b_';
import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import { useMeasure } from '../../hooks';
import { MixProps, SimpleCallback, UpdateSettingsHandler } from '../../typings';

import UserCardHeader from './__header/user-card__header';
import UserCardSettings from './__settings/user-card__settings';

import './user-card.scss';

export interface UserCardProps extends MixProps {
    /** The username of the user */
    displayName: string;
    /** Whether the user is already favorite */
    isFavorite: boolean;
    /** Whether the user is broadcaster */
    isBroadcaster: boolean;
    /** Set the handler to handle click event on the star icon */
    handleStarClick: SimpleCallback;
    /** Set the handler to settings update */
    handleSettingsUpdate: UpdateSettingsHandler;
}

const UserCard = ({
    displayName,
    isFavorite = false,
    isBroadcaster = false,
    handleStarClick,
    handleSettingsUpdate,
    mix,
}: UserCardProps) => {
    const defaultHeight = 44;
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(defaultHeight);
    const [ref, { height }] = useMeasure<HTMLDivElement>();

    const expand = useSpring({ height: isOpen ? contentHeight : defaultHeight });

    useEffect(() => {
        setContentHeight(height);
    }, [height]);

    return (
        <animated.div
            className={cx(b('user-card', { open: isOpen }), mix)}
            data-testid="user-card"
            style={expand}
        >
            <div ref={ref}>
                <UserCardHeader
                    displayName={displayName}
                    handleStarClick={handleStarClick}
                    handleToggle={() => setIsOpen(!isOpen)}
                    isBroadcaster={isBroadcaster}
                    isFavorite={isFavorite}
                />
                {isOpen ? <UserCardSettings updateSettings={handleSettingsUpdate} /> : null}
            </div>
        </animated.div>
    );
};

export default UserCard;
