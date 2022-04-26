import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import NotificationsSnackbar from '../../src/components/notifications/__snackbar/notifications__snackbar';
import { STORY_GROUPS } from '../constants';

const StorySnackbar = () => {
    const refMap = new WeakMap();

    return (
        <NotificationsSnackbar
            disableCloseButton={boolean('disable close button', false)}
            setRef={(ref: HTMLDivElement) => (refMap.set({}, ref))}
            type={select('type', Object.values(NotificationsSnackbar.TYPE), NotificationsSnackbar.TYPE.ERROR)}
        >
            <div>{text('message', 'kek')}</div>
        </NotificationsSnackbar>
    );
};

storiesOf(STORY_GROUPS.notifications, module)
    .addDecorator(withKnobs)
    .add('Notification Snackbar', StorySnackbar);
