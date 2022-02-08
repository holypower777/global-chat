import { date, select, text, withKnobs } from '@storybook/addon-knobs';
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

const StoryChatMessage = () => {
    return (
        <>
            <ChatMessage
                message={select('message', messages, messages[0])}
                time={new Date(date('time', new Date()))}
                username={text('username', 'Mariam58')}
            />
        </>
    );
};

storiesOf(STORY_GROUPS.chat, module)
    .addDecorator(withKnobs)
    .add('Chat message', StoryChatMessage);
