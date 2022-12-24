// @reference
// import b from 'b_';
// import {
//     useLazyGetMessagesByUserIdAndChannelIdQuery,
//     useLazyGetSubscriberBadgesByChannelIdQuery,
// } from 'platform-apis';
// import { NOTIFICATIONS_DURATION, REPLY_MESSAGE, SEARCH_PARAMS, Skeleton, SNACKBAR_TYPE } from 'platform-components';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';

// import ErrorBoundary from '../../../../containers/error-boundary/error-boundary';
// import { getChannels, getSelectedChannel, setSelectedChannel } from '../../../../store/slices/channels';
// import { getIsMessagesFetching, getMessages } from '../../../../store/slices/messages';
// import { getSortByDateSetting } from '../../../../store/slices/settings';
// import { getTwitchUserId } from '../../../../store/slices/twitch-user';
// import { addNotification } from '../../../../utils';

// import InifiniteScrollWrapper from './infinite-scroll-wrapper';

// import './chat__messages.scss';

// const ChatMessages = () => {
//     const dispatch = useDispatch();
//     const [searchParams] = useSearchParams();

//     const channels = useSelector(getChannels);
//     const messages = useSelector(getMessages);
//     const isMessagesFetching = useSelector(getIsMessagesFetching);
//     const selectedChannel = useSelector(getSelectedChannel);
//     const sort = useSelector(getSortByDateSetting);
//     const userId = useSelector(getTwitchUserId);

//     const [limit, setLimit] = useState(100);
//     const [highlitedMessage, setHighlitedMessage] = useState<REPLY_MESSAGE | null>(null);
//     const [hasNextPage, setHasNextPage] = useState(true);

//     const [fetchBadges, { data: badgesData, isFetching: isBadgesFetching }] = useLazyGetSubscriberBadgesByChannelIdQuery();
//     const [fetchMessages, { data, error }] = useLazyGetMessagesByUserIdAndChannelIdQuery();

//     const loadNextPage = (offset: number) => {
//         fetchMessages({ userId, channelId: selectedChannel!.userId, offset, sort, limit });
//     };

//     useEffect(() => {
//         if (searchParams.get(SEARCH_PARAMS.REPLY) && channels.length > 0) {
//             const reply = JSON.parse(window.atob(searchParams.get(SEARCH_PARAMS.REPLY)!)) as REPLY_MESSAGE;
//             setLimit(reply.index + 100);
//             setHighlitedMessage(reply);
//             dispatch(setSelectedChannel(channels.find((e) => e.userId === reply.channelId)));
//         }
//     }, [searchParams, channels]);

//     useEffect(() => {
//         if (selectedChannel) {
//             loadNextPage(0);
//             if (isMessagesFetching) {
//                 addNotification({
//                     id: 'notification.chat.sortChange',
//                     autoHideDuration: NOTIFICATIONS_DURATION.L,
//                     type: SNACKBAR_TYPE.WARNING,
//                     disableReloadButton: false,
//                 }, dispatch);
//             }
//         }
//     }, [sort]);

//     useEffect(() => {
//         if (selectedChannel) {
//             fetchBadges({ channelId: selectedChannel.userId });
//             setHasNextPage(true);
//             loadNextPage(0);
//         }
//     }, [selectedChannel]);

//     useEffect(() => {
//         if (data) {
//             setLimit(100);
//             if (data && messages.length + data.items.length >= data.total) {
//                 setHasNextPage(false);
//             }
//         }
//     }, [data]);

//     return (
//         <div className={b('chat', 'messages')}>
//             {selectedChannel && <ErrorBoundary>
//                 {error && <div className={b('chat', 'messages-error')}>
//                     <img
//                         alt="clear gif"
//                         src="https://cdn.betterttv.net/emote/600f61ebf1cfbf65dbe0c078/3x"
//                     />
//                 </div>}
//                 {isMessagesFetching && messages.length === 0 && <Skeleton variant={Skeleton.SKELETON_VARIANT.MESSAGE} />}
//                 <InifiniteScrollWrapper
//                     badgesData={badgesData || {}}
//                     hasNextPage={hasNextPage}
//                     highlitedMessage={highlitedMessage}
//                     isNextPageLoading={isBadgesFetching || isMessagesFetching}
//                     items={messages}
//                     loadNextPage={loadNextPage}
//                 />
//             </ErrorBoundary>}
//         </div>
//     );
// };

// export default ChatMessages;
