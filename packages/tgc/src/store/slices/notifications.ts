import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NotificationsType, Notification } from 'platform-components/src/typings';

import { RootState } from '../store';

interface NotificationsState {
    notifications: NotificationsType;
}

const initialState: NotificationsState = {
    notifications: [],
};

interface UpdateLoadingState {
    key: number;
    isLoading: boolean;
}

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
        updateNotificationLoadingState: (state, action: PayloadAction<UpdateLoadingState>) => {
            state.notifications = state.notifications.map((item) => {
                if (item.key === action.payload.key) {
                    return { ...item, isLoading: action.payload.isLoading };
                }
                return item;
            });
        },
    },
});

export const {
    pushNotification,
    clearNotifications,
    removeNotification,
    updateNotificationLoadingState,
} = notificationsSlice.actions;

const getRootNotifications = (state: RootState) => state.notifications;
export const getNotifications = createSelector(
    getRootNotifications,
    (rootNotifications) => rootNotifications.notifications
);

export default notificationsSlice.reducer;
