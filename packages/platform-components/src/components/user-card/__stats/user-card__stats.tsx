import b from 'b_';
import { TwitchUserMeta } from 'platform-apis/types';
import React from 'react';

import Text from '../../text/text';

import './user-card__stats.scss';

interface UserCardStatsProps {
    messagesAmount: number;
    wereInterested: number;
    mostActiveChannel: string;
    meta: TwitchUserMeta;
}

const UserCardStats = ({ messagesAmount, wereInterested, mostActiveChannel, meta }: UserCardStatsProps) => {
    const valueClassName = b('user-card', 'content_user-stats_value');

    return (
        <ul className={b('user-card', 'content_user-stats')}>
            <Text id="chat.userCard.totalCount" tag={Text.TAG.LI} weight={Text.WEIGHT.M}>
                : <span className={valueClassName}>{messagesAmount}</span>
            </Text>
            <Text id="chat.userCard.wereInterested" tag={Text.TAG.LI} weight={Text.WEIGHT.M}>
                : <span className={valueClassName}>{wereInterested}</span>
            </Text>
            {meta.username_history && <Text id="chat.userCard.previousUsernames" tag={Text.TAG.LI}  weight={Text.WEIGHT.M}>
                : {Array.from(new Set(meta.username_history)).map((username) => <span className={valueClassName} key={username}>{username}</span>)}
            </Text>}
            <Text id="chat.userCard.mostSentMessages" tag={Text.TAG.LI}  weight={Text.WEIGHT.M}>
                : <span className={valueClassName}>{mostActiveChannel || <Text id="chat.userCard.noChannel" weight={Text.WEIGHT.M} />}</span>
            </Text>
        </ul>
    );
};

export default UserCardStats;
