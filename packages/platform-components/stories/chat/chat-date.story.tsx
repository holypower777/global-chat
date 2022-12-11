import { date, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import ChatDate from '../../src/components/chat-date/chat-date';
import { STORY_GROUPS } from '../constants';

const StoryChatDate = () => (
    <ChatDate
        date={new Date(date('date', new Date('1995-12-17T03:24:00')))}
    />
);

storiesOf(STORY_GROUPS.chat, module)
    .addDecorator(withKnobs)
    .add('Chat date', StoryChatDate);
