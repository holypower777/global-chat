import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserCommons } from 'platform-apis/types';

import { RootState } from '../store';

import { getTwitchUserId } from './twitch-user';

interface UserState extends User {}

const initialState: UserState = {
    userId: 0,
    displayName: '',
    profileImageUrl: '',
    favorites: [],
    searchHistory: [],
    donationTier: 0,
    donationExp: null,
    isHiddenFromSearch: false,
    meta: {},
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.userId = action.payload.userId;
            state.displayName = action.payload.displayName;
            state.profileImageUrl = action.payload.profileImageUrl;
            state.favorites = action.payload.favorites;
            state.searchHistory = action.payload.searchHistory;
            state.donationTier = action.payload.donationTier;
            state.donationExp = action.payload.donationExp;
            state.isHiddenFromSearch = action.payload.isHiddenFromSearch;
            state.meta = action.payload.meta;
        },
        clearUser: (state) => {
            state.userId = 0;
            state.displayName = '';
            state.profileImageUrl = '';
            state.favorites = [];
            state.searchHistory = [];
            state.donationTier = 0;
            state.donationExp = null;
            state.isHiddenFromSearch = false;
            state.meta = {};
        },
        updateUserFavorites: (state, action: PayloadAction<UserCommons>) => {
            state.favorites = action.payload;
        },
        updateUserHistory: (state, action: PayloadAction<UserCommons>) => {
            state.searchHistory = action.payload;
        },
    },
});

export const {
    setUser,
    clearUser,
    updateUserFavorites,
    updateUserHistory,
} = userSlice.actions;

export const getUser = (state: RootState) => state.user;
export const getUserId = createSelector(
    getUser,
    (user) => user.userId,
);
const getUserFavorites = createSelector(
    getUser,
    (user) => user.favorites,
);
export const getIsFavorite = createSelector(
    [getUserFavorites, getTwitchUserId],
    (favorites, userId) => favorites.some((e) => e.userId === userId),
);
export const getIsAuth = createSelector(
    getUserId,
    (userId) => userId !== 0,
);

export default userSlice.reducer;
