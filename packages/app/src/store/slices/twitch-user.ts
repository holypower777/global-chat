import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TwitchUser } from 'platform-apis/types/twitch-user';

import { RootState } from '../store';

interface TwitchUserState {
    user: TwitchUser;
    isFetching: boolean;
    mostActiveChannel: string,
}

const initialState: TwitchUserState = {
    user: {
        userId: 0,
        login: '',
        displayName: '',
        type: '',
        broadcasterType: '',
        description: '',
        profileImageUrl: '',
        offlineImageUrl: '',
        viewCount: 0,
        createdAt: null,
        wereInterested: 0,
        messagesAmount: 0,
        meta: {},
    },
    isFetching: false,
    mostActiveChannel: '',
};

export const twitchUserSlice = createSlice({
    name: 'twitchUser',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<TwitchUser>) => {
            state.user = action.payload;
        },
        setMostActiveChannel: (state, action: PayloadAction<string>) => {
            state.mostActiveChannel = action.payload;
        },
        setIsUserWithChannelsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload;
        },
        clearUser: (state) => {
            state.user.userId = 0;
            state.user.login = '';
            state.user.displayName = '';
            state.user.type = '';
            state.user.broadcasterType = '';
            state.user.description = '';
            state.user.profileImageUrl = '';
            state.user.offlineImageUrl = '';
            state.user.viewCount = 0;
            state.user.createdAt = null;
            state.user.wereInterested = 0;
            state.user.messagesAmount = 0;
            state.user.meta = {};
            state.mostActiveChannel = '';
        },
    },
});

export const {
    setUser,
    setMostActiveChannel,
    setIsUserWithChannelsFetching,
    clearUser,
} = twitchUserSlice.actions;

const getRootUser = (state: RootState) => state.twitchUser;
export const getUser = createSelector(
    getRootUser,
    (rootUser) => rootUser.user,
);
export const getMostActiveChannel = createSelector(
    getRootUser,
    (user) => user.mostActiveChannel,
);
export const getDisplayName = createSelector(
    getUser,
    (user) => user.displayName,
);
export const getUserId = createSelector(
    getUser,
    (user) => user.userId,
);
export const getIsUserFetching = createSelector(
    getRootUser,
    (rootUser) => rootUser.isFetching,
);

export default twitchUserSlice.reducer;
