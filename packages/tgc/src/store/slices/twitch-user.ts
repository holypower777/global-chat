// @reference
// import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { TwitchUser } from 'platform-apis/types';

// import { RootState } from '../store';

// interface TwitchUserState {
//     user: TwitchUser;
//     isFetching: boolean;
//     mostActiveChannel: string;
//     suggestions: Array<string>;
//     isSuggestionsLoading: boolean;
// }

// const initialState: TwitchUserState = {
//     user: {
//         userId: 0,
//         login: '',
//         displayName: '',
//         type: '',
//         broadcasterType: '',
//         description: '',
//         profileImageUrl: '',
//         offlineImageUrl: '',
//         viewCount: 0,
//         createdAt: null,
//         wereInterested: 0,
//         messagesAmount: 0,
//         meta: {},
//     },
//     isFetching: false,
//     mostActiveChannel: '',
//     suggestions: [],
//     isSuggestionsLoading: false,
// };

// export const twitchUserSlice = createSlice({
//     name: 'twitchUser',
//     initialState,
//     reducers: {
//         setTwitchUser: (state, action: PayloadAction<TwitchUser>) => {
//             state.user = action.payload;
//         },
//         setMostActiveChannel: (state, action: PayloadAction<string>) => {
//             state.mostActiveChannel = action.payload;
//         },
//         setIsUserWithChannelsFetching: (state, action: PayloadAction<boolean>) => {
//             state.isFetching = action.payload;
//         },
//         clearTwitchUser: (state) => {
//             state.user.userId = 0;
//             state.user.login = '';
//             state.user.displayName = '';
//             state.user.type = '';
//             state.user.broadcasterType = '';
//             state.user.description = '';
//             state.user.profileImageUrl = '';
//             state.user.offlineImageUrl = '';
//             state.user.viewCount = 0;
//             state.user.createdAt = null;
//             state.user.wereInterested = 0;
//             state.user.messagesAmount = 0;
//             state.user.meta = {};
//             state.mostActiveChannel = '';
//         },
//         setSuggestions: (state, action: PayloadAction<Array<string>>) => {
//             state.suggestions = action.payload;
//         },
//         clearSuggestions: (state) => {
//             state.suggestions = [];
//         },
//         setIsSuggestionsLoading: (state, action: PayloadAction<boolean>) => {
//             state.isSuggestionsLoading = action.payload;
//         },
//     },
// });

// export const {
//     setTwitchUser,
//     setMostActiveChannel,
//     setIsUserWithChannelsFetching,
//     clearTwitchUser,
//     setSuggestions,
//     clearSuggestions,
//     setIsSuggestionsLoading,
// } = twitchUserSlice.actions;

// const getRootTwitchUser = (state: RootState) => state.twitchUser;
// export const getTwitchUser = createSelector(getRootTwitchUser, (rootUser) => rootUser.user);
// export const getMostActiveChannel = createSelector(
//     getRootTwitchUser,
//     (user) => user.mostActiveChannel
// );
// export const getTwitchUserId = createSelector(getTwitchUser, (user) => user.userId);
// export const getIsTwitchUserFetching = createSelector(
//     getRootTwitchUser,
//     (rootUser) => rootUser.isFetching
// );
// export const getSuggestions = createSelector(getRootTwitchUser, (rootUser) => rootUser.suggestions);
// export const getIsSuggestionsLoading = createSelector(
//     getRootTwitchUser,
//     (rootUser) => rootUser.isSuggestionsLoading
// );

// export default twitchUserSlice.reducer;
