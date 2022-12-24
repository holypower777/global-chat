// @reference
// import { Message, TwitchUser } from 'platform-apis/types';
// import { ChatDate, ChatMessage, LINKS, NOTIFICATIONS_DURATION, SEARCH_PARAMS, Skeleton, SNACKBAR_TYPE } from 'platform-components';
// import React, { useEffect, useRef } from 'react';
// import { useDispatch } from 'react-redux';

// import { addNotification } from '../../../../utils';

// interface RowProps {
//     index: number;
//     style: React.CSSProperties;
//     message: Message;
//     user: TwitchUser;
//     setRowHeight: (index: number, size: number) => void;
//     showMessageTime: boolean;
//     showBadges: boolean;
//     badgesData: object;
//     isItemLoaded: boolean;
//     highlitedMessage?: string | null;
// }

// const ChatMessageRow = ({
//     index,
//     style,
//     message,
//     setRowHeight,
//     user,
//     showMessageTime,
//     showBadges,
//     badgesData,
//     isItemLoaded,
//     highlitedMessage = null,
// }: RowProps) => {
//     const rowRef = useRef<HTMLDivElement>(null);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (rowRef) {
//             if (rowRef.current && rowRef.current.clientHeight) {
//                 setRowHeight(index, rowRef.current.clientHeight);
//             }
//         }
//     }, [rowRef]);

//     let content;

//     if (!isItemLoaded) {
//         content = <Skeleton variant={Skeleton.SKELETON_VARIANT.MESSAGE} />;
//     } else {
//         content = (<>
//             {message.renderDate && <ChatDate date={message.time!} />}
//             <ChatMessage
//                 badges={message.badges}
//                 handleReply={() => {
//                     addNotification({
//                         id: 'notification.copied',
//                         type: SNACKBAR_TYPE.SUCCESS,
//                         autoHideDuration: NOTIFICATIONS_DURATION.S,
//                     }, dispatch, true);

//                     const reply = {
//                         channelId: message.channelId,
//                         messageId: message.messageId,
//                         index: index,
//                     };

//                     navigator.clipboard.writeText(`${window.location.origin}${LINKS.MESSAGES}/${user.displayName}?${SEARCH_PARAMS.REPLY}=${window.btoa(JSON.stringify(reply))}`);
//                 }}
//                 highlited={highlitedMessage === message.messageId}
//                 message={message.message}
//                 showBadges={showBadges}
//                 showMessageTime={showMessageTime}
//                 subBadges={badgesData}
//                 time={message.time!}
//                 username={user.displayName}
//             />
//         </>);
//     }

//     return (
//         <li style={style}>
//             <div ref={rowRef}>{content}</div>
//         </li>
//     );
// };

// export default ChatMessageRow;
