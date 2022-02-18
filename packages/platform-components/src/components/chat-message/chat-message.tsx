import b from 'b_';
import cx from 'classnames';
import { getHoursAndMinutes } from 'platform-components/src/utils';
import React from 'react';

import Text from '../text/text';

import ChatMessageBadges from './__badges/chat-message__badges';
import { messageToSmile } from './format-message';

import './chat-message.scss';

interface ChatMessageProps {
    time: Date;
    username: string;
    message: string;
    subBadges: object;
    badges?: string;
    showBadges?: boolean;
    showMessageTime?: boolean;
    mix?: string;
}

const ChatMessage = ({ time, username, subBadges, badges, message, showMessageTime, showBadges, mix }: ChatMessageProps) => {
    return (
        <div className={cx('chat-message', mix)}>
            {showMessageTime && <Text mix={b('chat-message', 'time')}>{getHoursAndMinutes(time)}</Text>}
            {showBadges && <ChatMessageBadges badges={badges} subBadges={subBadges}/>}
            <Text mix={b('chat-message', 'username')} weight={Text.WEIGHT.L}>{username}</Text>
            <Text mix={b('chat-message', 'text')}>{messageToSmile(message)}</Text>
        </div>
    );
};

export default ChatMessage;
