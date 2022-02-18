import b from 'b_';
import { useGetSubscriberBadgesByChannelIdQuery } from 'platform-apis';
import { ChatDate, ChatMessage, UserCard, Text, Spin } from 'platform-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSelectedChannel } from '../../../store/slices/channels';
import { getMessagesDates, getSelectedMessages } from '../../../store/slices/messages';
import { getShowBadgesSetting, getShowMessageTimeSetting, updateSetting } from '../../../store/slices/settings';
import { getUser } from '../../../store/slices/twitch-user';

import './chat.scss';

const Chat = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const messagesDates = useSelector(getMessagesDates);
    const messages = useSelector(getSelectedMessages);
    const selectedChannel = useSelector(getSelectedChannel);
    const showBadges = useSelector(getShowBadgesSetting);
    const showMessageTime = useSelector(getShowMessageTimeSetting);
    const { data, isFetching } = useGetSubscriberBadgesByChannelIdQuery(messages.length ? messages[0].channelId : 0);

    let previousDay = 0;

    return (
        <section className="chat">
            <UserCard
                avatarSrc={user.avatarSrc}
                createdAt={new Date(user.createdAt!)}
                heatmapDates={messagesDates}
                mostActiveChannel={user.mostActiveChannel}
                totalMessages={user.totalMessages!}
                updateSettings={(key, value) => {
                    dispatch(updateSetting({ key, value }));
                }}
                userId={user.userId}
                username={user.username}
            />
            {selectedChannel && <Text id="chat.channelName" mix={b('chat', 'title')} size={Text.SIZE.XL}>
                <Text mix={b('chat', 'title-channel')} size={Text.SIZE.XL}>{selectedChannel}</Text>
            </Text>}
            {isFetching && <Spin center />}
            {data && !isFetching && <div className={b('chat', 'messages')}>
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
                            badges={message.badges}
                            message={message.message}
                            showBadges={showBadges}
                            showMessageTime={showMessageTime}
                            subBadges={data}
                            time={date}
                            username={user.username}
                        />
                    </React.Fragment>);
                })}
            </div>}
        </section>
    );
};

export default Chat;
