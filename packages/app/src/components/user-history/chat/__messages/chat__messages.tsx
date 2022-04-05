import b from 'b_';
import { useGetMessagesByUserIdAndChannelIdQuery, useGetSubscriberBadgesByChannelIdQuery } from 'platform-apis';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSelectedChannel } from '../../../../store/slices/channels';
import {
    clearMessages,
    getIsMessagesFetching,
    getMessages,
    pushMessages,
    setIsMessagesFetching,
} from '../../../../store/slices/messages';
import { getUserId } from '../../../../store/slices/twitch-user';

import InifiniteScrollWrapper from './infinite-scroll-wrapper';

import './chat__messages.scss';

const ChatMessages = () => {
    const dispatch = useDispatch();

    const messages = useSelector(getMessages);
    const isMessagesFetching = useSelector(getIsMessagesFetching);
    const selectedChannel = useSelector(getSelectedChannel);

    const userId = useSelector(getUserId);
    const [offset, setOffset] = useState(0);
    const [skipMessages, setSkipMessages] = useState(true);
    const [skipBadges, setSkipBadges] = useState(true);
    const [hasNextPage, setHasNextPage] = useState(true);
    const { data: badgesData, isFetching: isBadgesFetching } =
        useGetSubscriberBadgesByChannelIdQuery({ channelId: selectedChannel ? selectedChannel.userId : 0 }, { skip: skipBadges });
    const { data, isFetching } = useGetMessagesByUserIdAndChannelIdQuery({ 
        userId, 
        channelId: selectedChannel ? selectedChannel.userId : 0, 
        offset, 
        limit: 100,
    }, { skip: skipMessages });

    const loadNextPage = (startIndex: number) => {
        setOffset(startIndex);
        setSkipMessages(false);
    };

    useEffect(() => {
        if (badgesData) {
            setSkipBadges(true);
        }
    }, [badgesData]);

    useEffect(() => {
        dispatch(setIsMessagesFetching(isFetching));
    }, [isFetching]);

    useEffect(() => {
        if (selectedChannel) {
            dispatch(clearMessages());
            setSkipBadges(false);
            setHasNextPage(true);
            loadNextPage(0);
        }
    }, [selectedChannel]);

    useEffect(() => {
        if (data) {
            setSkipMessages(true);
            dispatch(pushMessages(data.items));
            if (data && messages.length + data.items.length >= data.total) {
                setHasNextPage(false);
            }
        }
    }, [data]);

    return (
        <div className={b('chat', 'messages')}>
            <InifiniteScrollWrapper
                badgesData={badgesData || {}}
                hasNextPage={hasNextPage}
                isNextPageLoading={isBadgesFetching && isMessagesFetching}
                items={messages}
                loadNextPage={loadNextPage}
            />
        </div>
    );
};

export default ChatMessages;
