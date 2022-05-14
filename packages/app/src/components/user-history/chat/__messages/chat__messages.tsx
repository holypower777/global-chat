import b from 'b_';
import {
    useGetMessagesByUserIdAndChannelIdQuery,
    useGetSubscriberBadgesByChannelIdQuery,
} from 'platform-apis';
import { REPLY_MESSAGE, SEARCH_PARAMS, Skeleton, SNACKBAR_TYPE } from 'platform-components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import ErrorBoundary from '../../../../containers/error-boundary/error-boundary';
import { getChannels, getSelectedChannel, setSelectedChannel } from '../../../../store/slices/channels';
import {
    clearMessages,
    getIsMessagesFetching,
    getMessages,
    pushMessages,
    setIsMessagesFetching,
} from '../../../../store/slices/messages';
import { getSortByDateSetting } from '../../../../store/slices/settings';
import { getUserId } from '../../../../store/slices/twitch-user';
import { addNotification } from '../../../../utils';

import InifiniteScrollWrapper from './infinite-scroll-wrapper';

import './chat__messages.scss';

const ChatMessages = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const channels = useSelector(getChannels);

    const messages = useSelector(getMessages);
    const isMessagesFetching = useSelector(getIsMessagesFetching);
    const selectedChannel = useSelector(getSelectedChannel);
    const sort = useSelector(getSortByDateSetting);

    const userId = useSelector(getUserId);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(100);
    const [highlitedMessage, setHighlitedMessage] = useState<string | null>(null);
    const [skipMessages, setSkipMessages] = useState(true);
    const [skipBadges, setSkipBadges] = useState(true);
    const [hasNextPage, setHasNextPage] = useState(true);
    const { data: badgesData, isFetching: isBadgesFetching } =
        useGetSubscriberBadgesByChannelIdQuery({ channelId: selectedChannel ? selectedChannel.userId : 0 }, { skip: skipBadges });
    const { data, error, isFetching } = useGetMessagesByUserIdAndChannelIdQuery({
        userId,
        channelId: selectedChannel?.userId || 0,
        offset,
        sort,
        limit,
    }, { skip: skipMessages });

    const loadNextPage = (startIndex: number) => {
        setOffset(startIndex);
        if (selectedChannel) {
            setSkipMessages(false);
        }
    };

    useEffect(() => {
        if (badgesData) {
            setSkipBadges(true);
        }
    }, [badgesData]);

    useEffect(() => {
        if (searchParams.get(SEARCH_PARAMS.REPLY) && channels.length > 0) {
            const reply = JSON.parse(window.atob(searchParams.get(SEARCH_PARAMS.REPLY)!)) as REPLY_MESSAGE;
            setLimit(reply.index + 100);
            setHighlitedMessage(reply.messageId);
            dispatch(setSelectedChannel(channels.find((e) => e.userId === reply.channelId)));
            
        }
    }, [searchParams, channels]);

    useEffect(() => {
        if (selectedChannel) {
            dispatch(clearMessages());
            loadNextPage(0);
            if (isMessagesFetching) {
                addNotification({
                    id: 'notification.chat.sortChange',
                    autoHideDuration: 7000,
                    type: SNACKBAR_TYPE.WARNING,
                    disableReloadButton: false,
                }, dispatch);
            }
        }
    }, [sort]);

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
            setLimit(100);
            dispatch(pushMessages(data.items));
            if (data && messages.length + data.items.length >= data.total) {
                setHasNextPage(false);
            }
        }
    }, [data]);

    return (
        <div className={b('chat', 'messages')}>
            {selectedChannel && <ErrorBoundary>
                {error && <div className={b('chat', 'messages-error')}>
                    <img
                        alt="clear gif"
                        src="https://cdn.betterttv.net/emote/600f61ebf1cfbf65dbe0c078/3x"
                    />
                </div>}
                {isMessagesFetching && offset === 0 && <Skeleton variant={Skeleton.SKELETON_VARIANT.MESSAGE} />}
                <InifiniteScrollWrapper
                    badgesData={badgesData || {}}
                    hasNextPage={hasNextPage}
                    highlitedMessage={highlitedMessage}
                    isNextPageLoading={isBadgesFetching || isMessagesFetching}
                    items={messages}
                    loadNextPage={loadNextPage}
                />
            </ErrorBoundary>}
        </div>
    );
};

export default ChatMessages;
