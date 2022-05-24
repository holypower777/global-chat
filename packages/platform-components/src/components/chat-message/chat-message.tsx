import b from 'b_';
import cx from 'classnames';
import { getFullDate, getHoursAndMinutes } from 'platform-components/src/utils';
import React, { ReactNode } from 'react';
import { useIntl } from 'react-intl';

import { SimpleCallback } from '../../typings';
import { IconReply } from '../icon/icon';
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
    showReplyIcon?: boolean;
    useColors?: boolean;
    highlited?: boolean;
    color?: string;
    mix?: string;
    handleReply?: SimpleCallback;
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
    showReplyIcon = true,
    useColors = false,
    highlited = false,
    handleReply,
    color,
    mix,
}: ChatMessageProps) => {
    const style = useColors ? { color } : {};
    const intl = useIntl();

    return (
        <div className={cx(b('chat-message', { highlited }), mix)}>
            <div className={b('chat-message', 'container')}>
                {showMessageTime && <Text mix={b('chat-message', 'time')} title={getFullDate(time, true, true)}>{getHoursAndMinutes(time)}</Text>}
                {channelName && <Text mix={b('chat-message', 'username')} weight={Text.WEIGHT.L}>{channelName}:</Text>}
                {showBadges && <ChatMessageBadges badges={badges} subBadges={subBadges!} />}
                <Text mix={b('chat-message', 'username')} style={style} weight={Text.WEIGHT.L}>{username}:</Text>
                <Text mix={b('chat-message', 'text')}>{messageToSmile(message)}</Text>
            </div>
            {showReplyIcon && <IconReply 
                handleClick={handleReply} 
                mix={b('chat-message', 'reply')} 
                title={intl.formatMessage({ id: 'chatMessage.reply.title' })}
            />}
        </div>
    );
});

export default ChatMessage;
