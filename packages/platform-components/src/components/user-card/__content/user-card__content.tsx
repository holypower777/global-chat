import b from 'b_';
import { TwitchUser } from 'platform-apis/types';
import { formatDate } from 'platform-components/src/utils/format-date';
import React from 'react';
import { useIntl } from 'react-intl';

import UserCardStats from '../__stats/user-card__stats';
import Heatmap from '../../heatmap/heatmap';
import Text from '../../text/text';

import './user-card__content.scss';

interface UserCardContentProps {
    user: TwitchUser;
    heatmapDates: Array<Date>;
    mostActiveChannel: string;
    width: number;
}

const UserCardContent = (props: UserCardContentProps) => {
    const {
        user,
        heatmapDates,
        mostActiveChannel,
        width,
    } = props;
    const intl = useIntl();
    const date = user.createdAt ? formatDate(user.createdAt) : 'missing';

    return (
        <div className={b('user-card', 'content')}>
            <div className={b('user-card', 'content_user-info')}>
                <img
                    alt={intl.formatMessage({ id: 'chat.userCard.avatarImageAlt' })}
                    className={b('user-card', 'content_user-info_avatar')}
                    src={user.profileImageUrl}
                />
                <div className={b('user-card', 'content_user-info_content')}>
                    <Text>{`${intl.formatMessage({ id: 'chat.userCard.id' })}: ${user.userId}`}</Text>
                    <Text>{`${intl.formatMessage({ id: 'chat.userCard.createdAt' })}: ${date}`}</Text>
                </div>
            </div>
            {width && <Heatmap
                values={heatmapDates}
                width={width}
            />}
            <UserCardStats 
                messagesAmount={user.messagesAmount}
                meta={user.meta}  
                mostActiveChannel={mostActiveChannel}
                wereInterested={user.wereInterested}
            />
        </div>
    );
};

export default React.memo(UserCardContent);
