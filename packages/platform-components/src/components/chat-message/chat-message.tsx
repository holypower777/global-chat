import b from 'b_';
import cx from 'classnames';
import React from 'react';

import { getHoursAndMinutes } from '../../utils/format-date';
import Text from '../text/text';

import { messageToSmile } from './format-message';

import './chat-message.scss';

interface ChatMessageProps {
    time: Date;
    username: string;
    message: string;
    mix?: string;
}

const ChatMessage = ({ time, username, message, mix }: ChatMessageProps) => {
    return (
        <div className={cx('chat-message', mix)}>
            <Text mix={b('chat-message', 'time')}>{getHoursAndMinutes(time)}</Text>
            <Text mix={b('chat-message', 'username')} weight={Text.WEIGHT.L}>{username}</Text>
            <Text mix={b('chat-message', 'text')}>{messageToSmile(message)}</Text>
        </div>
    );
};

export default ChatMessage;
