import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { messagesApi, subscriberBadgesApi } from 'platform-apis';

import channelsSlice from './slices/channels';
import messagesSlice from './slices/messages';
import settingsSlice, { settingsMiddleware } from './slices/settings';
import twitchUserSlice from './slices/twitch-user';

export const store = configureStore({
    reducer: {
        [messagesApi.reducerPath]: messagesApi.reducer,
        [subscriberBadgesApi.reducerPath]: subscriberBadgesApi.reducer,
        messages: messagesSlice,
        channels: channelsSlice,
        user: twitchUserSlice,
        settings: settingsSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            messagesApi.middleware,
            subscriberBadgesApi.middleware,
            settingsMiddleware,
        ),
    devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
