import b from 'b_';
import { useWindowSize } from 'platform-components/src/hooks';
import { formatDate } from 'platform-components/src/utils/format-date';
import React, { useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';

import UserCardStats from '../__stats/user-card__stats';
import Heatmap from '../../heatmap/heatmap';
import Text from '../../text/text';

import './user-card__content.scss';

interface UserCardContentProps {
    userId: number;
    profileImageUrl: string;
    messagesAmount: number;
    createdAt: Date | null;
    heatmapDates: Array<Date>;
    mostActiveChannel: string;
}

const UserCardContent = (props: UserCardContentProps) => {
    const {
        userId,
        profileImageUrl,
        messagesAmount,
        createdAt,
        heatmapDates,
        mostActiveChannel,
    } = props;
    const ref = useRef<HTMLDivElement>(null);
    const windowSize = useWindowSize();
    const [heatmapWidth, setHeatmapWidth] = useState(0);

    useEffect(() => {
        setHeatmapWidth(ref.current!.offsetWidth);
    }, [ref, windowSize]);

    const intl = useIntl();
    const date = createdAt ? formatDate(createdAt) : 'missing';

    return (
        <div className={b('user-card', 'content')} ref={ref}>
            <div className={b('user-card', 'content_user-info')}>
                <img
                    alt={intl.formatMessage({ id: 'chat.userCard.avatarImageAlt' })}
                    className={b('user-card', 'content_user-info_avatar')}
                    src={profileImageUrl}
                />
                <div className={b('user-card', 'content_user-info_content')}>
                    <Text>{`${intl.formatMessage({ id: 'chat.userCard.id' })}: ${userId}`}</Text>
                    <Text>{`${intl.formatMessage({ id: 'chat.userCard.createdAt' })}: ${date}`}</Text>
                </div>
            </div>
            {heatmapWidth && <Heatmap
                values={heatmapDates}
                width={heatmapWidth}
            />}
            <UserCardStats 
                messagesAmount={messagesAmount}
                mostActiveChannel={mostActiveChannel}  
            />
        </div>
    );
};

export default React.memo(UserCardContent);
