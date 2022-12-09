import React from 'react';

import { formatDate } from '../../utils';
import Text from '../text/text';

import './chat-date.scss';

export interface ChatProps {
    /** The date to be shown */
    date: Date;
}

const ChatDate = ({ date }: ChatProps) => 
    <Text data-testid="chat-date" mix="chat-date">{formatDate(date)}</Text>;

export default ChatDate;
