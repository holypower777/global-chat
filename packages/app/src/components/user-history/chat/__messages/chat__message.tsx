import { Message, TwitchUser } from 'platform-apis/types';
import { ChatDate, ChatMessage, Skeleton } from 'platform-components';
import React, { useEffect, useRef } from 'react';

interface RowProps {
    index: number;
    style: React.CSSProperties;
    message: Message;
    user: TwitchUser;
    setRowHeight: (index: number, size: number) => void;
    showMessageTime: boolean;
    showBadges: boolean;
    badgesData: object;
    isItemLoaded: boolean;
}

const ChatMessageRow = ({
    index,
    style,
    message,
    setRowHeight,
    user,
    showMessageTime,
    showBadges,
    badgesData,
    isItemLoaded,
}: RowProps) => {
    const rowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (rowRef) {
            if (rowRef.current && rowRef.current.clientHeight) {
                setRowHeight(index, rowRef.current.clientHeight);
            }
        }
    }, [rowRef]);

    let content;

    if (!isItemLoaded) {
        content = <Skeleton variant={Skeleton.SKELETON_VARIANT.MESSAGE} />;
    } else {
        content = (<>
            {message.renderDate && <ChatDate date={message.time!} />}
            <ChatMessage
                badges={message.badges}
                message={message.message}
                showBadges={showBadges}
                showMessageTime={showMessageTime}
                subBadges={badgesData}
                time={message.time!}
                username={user.displayName}
            />
        </>);
    }

    return (
        <li style={style}>
            <div ref={rowRef}>{content}</div>
        </li>
    );
};

export default ChatMessageRow;
