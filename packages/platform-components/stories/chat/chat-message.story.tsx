import { boolean, date, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import ChatMessage from '../../src/components/chat-message/chat-message';
import { STORY_GROUPS } from '../constants';

const messages = [
    'сколько уже часов?',
    'Я НЕ КРИНЖУЮ KEKW Я НЕ КРИНЖУЮ KEKW Я НЕ КРИНЖУЮ KEKW',
    'ЗА ОЛДУ SMOrc SMOrc SMOrc',
    'ДЕД, ДАЙ ПОСПАТЬ, ПОЗДНО УЖЕ BibleThump BibleThump',
];

const badges = [
    'vip/1,broadcaster/1,moderator/1,partner/1',
    'moderator/1',
    'vip/1',
    'broadcaster/1',
    'moderator/1',
    'partner/1',
];

const StoryChatMessage = () => {
    return (
        <ChatMessage
            badges={select('badges', badges, badges[0])}
            channelName={text('channel name', '')}
            highlited={boolean('highlited', false)}
            message={select('message', messages, messages[0])}
            showBadges={boolean('show badges', true)}
            showMessageTime={boolean('show message time', true)}
            showReplyIcon={boolean('show reply icon', true)}
            subBadges={{}}
            time={new Date(date('time', new Date()))}
            username={text('username', 'Mariam58')}
        />
    );
};

storiesOf(STORY_GROUPS.chat, module)
    .addDecorator(withKnobs)
    .add('Chat message', StoryChatMessage);
