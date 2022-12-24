import b from 'b_';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useSpringCarousel } from 'react-spring-carousel';

import Text from '../../text/text';

import './desk-card__stats.scss';

interface DeskCardStatsProps {
    messagesAmount: number;
    messagesPerDay: number;
    usersAmount: number;
    usersPerDay: number;
    parsedChannels: number;
}

const DeskCardStats = ({
    messagesAmount,
    messagesPerDay,
    usersAmount,
    usersPerDay,
    parsedChannels,
}: DeskCardStatsProps) => {
    const intl = useIntl();
    const [currentItem, setCurrentItem] = useState(0);

    const { carouselFragment, slideToNextItem, getCurrentActiveItem } = useSpringCarousel({
        withLoop: true,
        disableGestures: true,
        items: [
            {
                id: 'messages',
                renderItem: (
                    <div className={b('desk-card', 'stats')}>
                        <Text
                            id="desk-card.stats.messages.title"
                            size={Text.SIZE.S}
                            weight={Text.WEIGHT.M}
                        />
                        <Text mix={b('desk-card', 'stats-value')}>
                            {intl.formatNumber(messagesAmount)}
                        </Text>
                        <div>
                            <Text size={Text.SIZE.S} weight={Text.WEIGHT.M}>
                                +{intl.formatNumber(messagesPerDay)}{' '}
                            </Text>
                            <Text id="desk-card.stats.messages.perDay" />
                        </div>
                    </div>
                ),
            },
            {
                id: 'users',
                renderItem: (
                    <div className={b('desk-card', 'stats')}>
                        <Text
                            id="desk-card.stats.users.title"
                            size={Text.SIZE.S}
                            weight={Text.WEIGHT.M}
                        />
                        <Text mix={b('desk-card', 'stats-value')}>
                            {intl.formatNumber(usersAmount)}
                        </Text>
                        <div>
                            <Text size={Text.SIZE.S} weight={Text.WEIGHT.M}>
                                +{intl.formatNumber(usersPerDay)}{' '}
                            </Text>
                            <Text id="desk-card.stats.users.perDay" />
                        </div>
                    </div>
                ),
            },
            {
                id: 'online',
                renderItem: (
                    <div className={b('desk-card', 'stats')}>
                        <Text
                            id="desk-card.stats.online.title"
                            size={Text.SIZE.S}
                            weight={Text.WEIGHT.M}
                        />
                        <Text mix={b('desk-card', 'stats-value')}>
                            {intl.formatNumber(parsedChannels)}
                        </Text>
                    </div>
                ),
            },
        ],
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            slideToNextItem();
            const { index } = getCurrentActiveItem();
            setCurrentItem(index);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [slideToNextItem]);

    return (
        <div className="desk-card" style={{ flexDirection: 'column' }}>
            {carouselFragment}
            <div className={b('desk-card', 'dots')}>
                <div className={b('desk-card', 'dot', { active: currentItem === 0 })} />
                <div className={b('desk-card', 'dot', { active: currentItem === 1 })} />
                <div className={b('desk-card', 'dot', { active: currentItem === 2 })} />
            </div>
        </div>
    );
};

export default DeskCardStats;
