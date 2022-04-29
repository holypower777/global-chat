import b from 'b_';
import React from 'react';

import Text from '../../text/text';

import './user-card__stats.scss';

interface UserCardStatsProps {
    messagesAmount: number;
    wereInterested: number;
    mostActiveChannel: string;
}

const UserCardStats = ({ messagesAmount, wereInterested, mostActiveChannel }: UserCardStatsProps) => {
    const valueClassName = b('user-card', 'content_user-stats_value');

    return (
        <ul className={b('user-card', 'content_user-stats')}>
            <Text id="chat.userCard.totalCount" tag={Text.TAG.LI} weight={Text.WEIGHT.M}>
                : <span className={valueClassName}>{messagesAmount}</span>
            </Text>
            <Text id="chat.userCard.wereInterested" tag={Text.TAG.LI} weight={Text.WEIGHT.M}>
                : <span className={valueClassName}>{wereInterested}</span>
            </Text>
            <Text id="chat.userCard.mostSentMessages" tag={Text.TAG.LI}  weight={Text.WEIGHT.M}>
                : <span className={valueClassName}>{mostActiveChannel}</span>
            </Text>
        </ul>
    );
};

export default UserCardStats;
