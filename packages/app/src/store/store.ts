import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { messagesApi } from 'platform-apis';

import channelsSlice from './slices/channels';
import messagesSlice from './slices/messages';
import twitchUserSlice from './slices/twitch-user';

export const store = configureStore({
    reducer: {
        [messagesApi.reducerPath]: messagesApi.reducer,
        messages: messagesSlice,
        channels: channelsSlice,
        user: twitchUserSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(messagesApi.middleware),
    devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
