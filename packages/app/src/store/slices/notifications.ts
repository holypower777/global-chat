import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationsType, Notification } from 'platform-components/src/typings';

import { RootState } from '../store';

interface NotificationsState {
    notifications: NotificationsType;
}

const initialState: NotificationsState = {
    notifications: [],
};

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        pushNotification: (state, action: PayloadAction<Notification>) => {
            if (!state.notifications.some((e) => e.key === action.payload.key)) {
                state.notifications.push(action.payload);
            }
        },
        clearNotifications: (state) => {
            state.notifications = [];
        },
        removeNotification: (state, action: PayloadAction<number>) => {
            state.notifications = state.notifications.filter((item) => item.key !== action.payload);
        },
    },
});

export const {
    pushNotification,
    clearNotifications,
    removeNotification,
} = notificationsSlice.actions;

const getRootNotifications = (state: RootState) => state.notifications;
export const getNotifications = createSelector(
    getRootNotifications,
    (rootNotifications) => rootNotifications.notifications,
);

export default notificationsSlice.reducer;
