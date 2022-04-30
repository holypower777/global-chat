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
                    if (
                        !subBadges || //@ts-ignore
                        !subBadges.badgeSets || //@ts-ignore
                        !subBadges.badgeSets.subscriber || //@ts-ignore
                        !subBadges.badgeSets.subscriber.versions[version] ||//@ts-ignore
                        !subBadges.badgeSets.subscriber.versions[version].image_url_1x
                    ) {
                        imageSrc = commonBadges.subscriber.versions[1].image_url_1x;
                    } else {
                        //@ts-ignore
                        imageSrc = subBadges.badgeSets.subscriber.versions[version].image_url_1x;
                    }
                } else {
                    //@ts-ignore
                    // eslint-disable-next-line no-lonely-if
                    if (commonBadges[badge] && commonBadges[badge].versions[version] && commonBadges[badge].versions[version].image_url_1x) {
                        //@ts-ignore
                        imageSrc = commonBadges[badge].versions[version].image_url_1x;
                    }
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
