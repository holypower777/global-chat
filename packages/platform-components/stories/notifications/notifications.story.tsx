import { select, withKnobs } from '@storybook/addon-knobs';
import { useState } from '@storybook/addons';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { NOTIFICATIONS_DIRECTION } from '../../src/components/constants';
import Notifications from '../../src/components/notifications/notifications';
import { NotificationsType } from '../../src/typings';
import { generateRandom } from '../../src/utils';
import { STORY_GROUPS } from '../constants';

const StoryNotifications = () => {
    const [items, setItems] = useState<NotificationsType>([]);

    return (
        <div style={{ height: 'calc(100vh - 2rem)', position: 'relative' }}>
            <button onClick={() => {
                const id = generateRandom(0, 5000);
                setItems([...items, {
                    children: `notification-${id}`,
                    autoHideDuration: 4000,
                    onClose: () => {
                        setItems(state =>
                            state.filter(i => {
                                return i.key !== id;
                            })
                        );
                    },
                    key: id,
                }]);
            }}
            >add item</button>
            <Notifications
                direction={select('direction', Object.values(NOTIFICATIONS_DIRECTION), NOTIFICATIONS_DIRECTION.BOTTOM_LEFT)}
                items={Object.values(items)}
            />
        </div>
    );
};

storiesOf(STORY_GROUPS.notifications, module)
    .addDecorator(withKnobs)
    .add('Notifications', StoryNotifications);
