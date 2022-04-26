import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { messagesApi, twitchUsersApi, overallStatsApi, subscriberBadgesApi } from 'platform-apis';

import rtkQueryErrorMiddleware from './middlewares/errors';
import settingsMiddleware from './middlewares/settings';
import channelsSlice from './slices/channels';
import liveChatSlice from './slices/live-chat';
import messagesSlice from './slices/messages';
import notificationsSlice from './slices/notifications';
import overallStatsSlice from './slices/overall-stats';
import settingsSlice from './slices/settings';
import twitchUserSlice from './slices/twitch-user';

export const store = configureStore({
    reducer: {
        [messagesApi.reducerPath]: messagesApi.reducer,
        [twitchUsersApi.reducerPath]: twitchUsersApi.reducer,
        [overallStatsApi.reducerPath]: overallStatsApi.reducer,
        [subscriberBadgesApi.reducerPath]: subscriberBadgesApi.reducer,
        messages: messagesSlice,
        notifications: notificationsSlice,
        channels: channelsSlice,
        liveChat: liveChatSlice,
        twitchUser: twitchUserSlice,
        settings: settingsSlice,
        overallStats: overallStatsSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            messagesApi.middleware,
            twitchUsersApi.middleware,
            overallStatsApi.middleware,
            subscriberBadgesApi.middleware,
            settingsMiddleware,
            rtkQueryErrorMiddleware,
        ),
    devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
