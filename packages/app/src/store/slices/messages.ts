import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessagesAPI } from 'platform-apis/types/messages';

import { RootState } from '../store';
import { Messages } from '../types/messages';

import { getSelectedChannel } from './channels';

interface MessagesState {
    messages: Messages;
    isFetching: boolean;
}

const initialState: MessagesState = {
    messages: [],
    isFetching: false,
};

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessages: (state, action: PayloadAction<MessagesAPI>) => {
            state.messages = action.payload.map((message) => ({
                channelId: message.chan_id,
                channelLogin: message.chan_login,
                channelName: message.chan_name,
                badges: message.badges,
                message: message.message,
                messageId: message.message_id,
                time: message.time,
                userId: message.user_id,
            }));
        },
        clearMessages: (state) => {
            state.messages = [];
        },
        setIsMessagesFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload;
        },
    },
});

export const { 
    setMessages, 
    clearMessages,
    setIsMessagesFetching,
} = messagesSlice.actions;

export const getRootMessages = (state: RootState) => state.messages;
export const getMessages = (state: RootState) => state.messages.messages;
export const getMessagesDates = (state: RootState) => state.messages.messages.map(e => e.time);
export const getIsMessagesFetching = createSelector(
    getRootMessages, 
    (rootMessages) => rootMessages.isFetching
);
export const getSelectedMessages = createSelector(
    getMessages,
    getSelectedChannel,
    (messages, selectedChannel) => messages.filter((message) => message.channelName === selectedChannel)
);

export default messagesSlice.reducer;
