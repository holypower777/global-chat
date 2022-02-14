import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TwitchUserAPI } from 'platform-apis/types/user';

import { RootState } from '../store';
import { TwitchUser } from '../types/twitch-user';

interface TwitchUserState extends TwitchUser {}

const initialState: TwitchUserState = {
    avatarSrc: '',
    createdAt: null,
    mostActiveChannel: '',
    totalMessages: null,
    userId: 0,
    username: '',
};

export const twitchUserSlice = createSlice({
    name: 'twitchUser',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<TwitchUserAPI>) => {
            state.avatarSrc = action.payload.profile_image_url;
            state.createdAt = action.payload.created_at;
            state.userId = action.payload.user_id;
            state.username = action.payload.display_name;
        },
        setMostActiveChannel: (state, action: PayloadAction<string>) => {
            state.mostActiveChannel = action.payload;
        },
        setTotalMessages: (state, action: PayloadAction<number>) => {
            state.totalMessages = action.payload;
        },
        clearUser: (state) => {
            state.avatarSrc = '';
            state.createdAt = null;
            state.mostActiveChannel = '';
            state.totalMessages = null;
            state.userId = 0;
            state.username = '';
        },
    },
});

export const { 
    setUser,
    setMostActiveChannel,
    setTotalMessages,
    clearUser,
} = twitchUserSlice.actions;
export const getUser = (state: RootState) => state.user;
export const getUsername = (state: RootState) => state.user.username;

export default twitchUserSlice.reducer;
