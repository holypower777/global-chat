import b from 'b_';
import { ChatDate, ChatMessage, UserCard } from 'platform-components';
import React from 'react';
import { useSelector } from 'react-redux';

import { getMessagesDates, getSelectedMessages } from '../../../store/slices/messages';
import { getUser } from '../../../store/slices/twitch-user';

import './chat.scss';

const Chat = () => {

    const user = useSelector(getUser);
    const messagesDates = useSelector(getMessagesDates);
    const messages = useSelector(getSelectedMessages);
    let previousDay = 0;

    return (
        <section className="chat">
            <UserCard
                avatarSrc={user.avatarSrc}
                createdAt={new Date(user.createdAt!)}
                heatmapDates={messagesDates}
                mostActiveChannel={user.mostActiveChannel}
                totalMessages={user.totalMessages!}
                userId={user.userId}
                username={user.username}
            />
            <div className={b('chat', 'messages')}>
                {messages.map((message, i) => {
                    const date = new Date(message.time);
                    let renderDate = false;

                    if (previousDay !== date.getDate()) {
                        previousDay = date.getDate();
                        renderDate = true;
                    }

                    return (<React.Fragment key={`${i}:${message.messageId}`}>
                        {renderDate && <ChatDate date={date} />}
                        <ChatMessage
                            message={message.message}
                            time={date}
                            username={user.username}
                        />
                    </React.Fragment>);
                })}
            </div>
        </section>
    );
};

export default Chat;
