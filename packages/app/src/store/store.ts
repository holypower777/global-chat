import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
    messagesApi,
    twitchUsersApi,
    overallStatsApi,
    subscriberBadgesApi,
    usersApi,
    authApi,
} from 'platform-apis';

import channelsMiddleware from './middlewares/channels';
import rtkQueryErrorMiddleware from './middlewares/errors';
import settingsMiddleware from './middlewares/settings';
import usersMiddleware from './middlewares/users';
import channelsSlice from './slices/channels';
import commonSlice from './slices/common';
import liveChatSlice from './slices/live-chat';
import messagesSlice from './slices/messages';
import notificationsSlice from './slices/notifications';
import overallStatsSlice from './slices/overall-stats';
import settingsSlice from './slices/settings';
import twitchUserSlice from './slices/twitch-user';
import userSlice from './slices/user';

export const store = configureStore({
    reducer: {
        [messagesApi.reducerPath]: messagesApi.reducer,
        [twitchUsersApi.reducerPath]: twitchUsersApi.reducer,
        [overallStatsApi.reducerPath]: overallStatsApi.reducer,
        [subscriberBadgesApi.reducerPath]: subscriberBadgesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        messages: messagesSlice,
        notifications: notificationsSlice,
        channels: channelsSlice,
        liveChat: liveChatSlice,
        twitchUser: twitchUserSlice,
        settings: settingsSlice,
        overallStats: overallStatsSlice,
        user: userSlice,
        common: commonSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            messagesApi.middleware,
            twitchUsersApi.middleware,
            overallStatsApi.middleware,
            subscriberBadgesApi.middleware,
            usersApi.middleware,
            authApi.middleware,
            settingsMiddleware,
            channelsMiddleware,
            rtkQueryErrorMiddleware,
            usersMiddleware,
        ),
    devTools: process.env.NODE_ENV === 'production' ? false : true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
