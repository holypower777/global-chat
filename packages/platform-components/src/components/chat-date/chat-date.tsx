import { formatDate } from 'platform-components/src/utils/format-date';
import React from 'react';

import Text from '../text/text';

import './chat-date.scss';

interface ChatProps {
    date: Date
}

const ChatDate = ({ date }: ChatProps) => {
    return (
        <div className="chat-date">
            <Text>{formatDate(date)}</Text>
        </div>
    );
};

export default ChatDate;
