import { Action, AnyAction, createSelector, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { SETTINGS } from 'platform-components/src/components/constants';
import { getLocalStorageValue } from 'platform-components/src/hooks';

import { RootState } from '../store';

interface SettingsState {
    sortByDate: 'asc' | 'desc';
    showBadges: boolean;
    showMessageTime: boolean;
}

interface UpdateSetting {
    key: string;
    value: unknown;
}

const initialState: SettingsState = {
    sortByDate: getLocalStorageValue(SETTINGS.SORT_BY_DATE, 'desc'),
    showBadges: getLocalStorageValue(SETTINGS.SHOW_BADGES, true),
    showMessageTime: getLocalStorageValue(SETTINGS.SHOW_MESSAGE_TIME, true),
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        updateSetting: (state, action: PayloadAction<UpdateSetting>) => {
            //@ts-ignore
            state[action.payload.key] = action.payload.value;
        },
    },
});

export const settingsMiddleware = () => (next: Dispatch<AnyAction>) => (action: Action<unknown>) => {
    if (updateSetting.match(action)) {
        localStorage.setItem(action.payload.key, JSON.stringify(action.payload.value));
    }
    return next(action);
};

export const { updateSetting } = settingsSlice.actions;
export const getSettings = (state: RootState) => state.settings;
export const getSortByDateSetting = createSelector(
    getSettings,
    (settings) => settings.sortByDate,
);
export const getShowBadgesSetting = createSelector(
    getSettings,
    (settings) => settings.showBadges,
);
export const getShowMessageTimeSetting = createSelector(
    getSettings,
    (settings) => settings.showMessageTime,
);

export default settingsSlice.reducer;
