import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Messages } from 'platform-apis/types';

import { RootState } from '../store';

interface MessagesState {
    messages: Messages;
    messagesDates: Array<Date>;
    isFetching: boolean;
}

const initialState: MessagesState = {
    messages: [],
    messagesDates: [],
    isFetching: false,
};

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessages: (state, action: PayloadAction<Messages>) => {
            state.messages = action.payload;
        },
        pushMessages: (state, action: PayloadAction<Messages>) => {
            state.messages.push(...action.payload);
        },
        setMessagesDates: (state, action: PayloadAction<Array<Date>>) => {
            state.messagesDates = action.payload;
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
    pushMessages,
    setMessagesDates,
    clearMessages,
    setIsMessagesFetching,
} = messagesSlice.actions;

const getRootMessages = (state: RootState) => state.messages;
export const getMessages = createSelector(
    getRootMessages,
    (rootMessages) => {
        let previousDay = 0;
        return rootMessages.messages.map((msg) => {
            if (previousDay !== msg.time!.getDate()) {
                previousDay = msg.time!.getDate();
                return { ...msg, renderDate: true };
            }

            return msg;
        });
    },
);
export const getMessagesDates = createSelector(
    getRootMessages,
    (rootMessages) => rootMessages.messagesDates,
);
export const getIsMessagesFetching = createSelector(
    getRootMessages,
    (rootMessages) => rootMessages.isFetching
);

export default messagesSlice.reducer;
