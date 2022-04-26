import b from 'b_';
import cx from 'classnames';
import { getHoursAndMinutes } from 'platform-components/src/utils';
import React, { ReactNode } from 'react';

import Text from '../text/text';

import ChatMessageBadges from './__badges/chat-message__badges';
import { messageToSmile } from './format-message';

import './chat-message.scss';

interface ChatMessageProps {
    time: Date;
    username: string | ReactNode;
    message: string;
    subBadges?: object;
    badges?: string;
    channelName?: string | ReactNode;
    showBadges?: boolean;
    showMessageTime?: boolean;
    useColors?: boolean;
    color?: string;
    mix?: string;
}

const ChatMessage = React.memo(({ 
    time, 
    username, 
    subBadges = {}, 
    badges, 
    message, 
    channelName, 
    showMessageTime = true, 
    showBadges = true,
    useColors = false,
    color,
    mix,
}: ChatMessageProps) => {
    const style = useColors ? { color } : {};

    return (
        <div className={cx('chat-message', mix)}>
            {showMessageTime && <Text mix={b('chat-message', 'time')}>{getHoursAndMinutes(time)}</Text>}
            {channelName && <Text mix={b('chat-message', 'username')} weight={Text.WEIGHT.L}>{channelName}:</Text>}
            {showBadges && <ChatMessageBadges badges={badges} subBadges={subBadges!}/>}
            <Text mix={b('chat-message', 'username')} style={style} weight={Text.WEIGHT.L}>{username}:</Text>
            <Text mix={b('chat-message', 'text')}>{messageToSmile(message)}</Text>
        </div>
    );
});

export default ChatMessage;
