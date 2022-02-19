/* eslint-disable react/no-multi-comp */
import b from 'b_';
import React from 'react';

import Badge from './badge';
import commonBadges from './common-badges';

import './chat-message__badges.scss';

interface ChatMessageBadges {
    subBadges: object;
    badges: string | undefined;
}

const ChatMessageBadges = ({ subBadges, badges }: ChatMessageBadges) => {
    if (!badges) {
        return null;
    }

    return (
        <span className={b('chat-message', 'badges')}>
            {badges.split(',').map((e, i) => {
                const badge = e.split('/')[0];
                const version = e.split('/')[1];
                let imageSrc = '';

                if (badge === 'subscriber') {
                    //@ts-ignore
                    imageSrc = subBadges.badge_sets.subscriber.versions[version].image_url_1x;
                } else {
                    //@ts-ignore
                    imageSrc = commonBadges[badge].versions[version].image_url_1x;
                }
                
                if (imageSrc) {
                    return <Badge imageSrc={imageSrc} key={i} />;
                }

                return null;
            })}
        </span>
    );
};

export default ChatMessageBadges;
