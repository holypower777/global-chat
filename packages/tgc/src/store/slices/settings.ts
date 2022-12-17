import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { decode } from 'jws';
import { LANGUAGES, SEARCH_TYPE, SETTINGS, SORT_ORDER } from 'platform-components/src/components/constants';
import { getLocalStorageValue } from 'platform-components/src/hooks';
import { getDefaultLanguage } from 'platform-components/src/utils';

import { RootState } from '../store';

interface SettingsState {
    sortByDate: SORT_ORDER;
    showBadges: boolean;
    showMessageTime: boolean;
    userType: SEARCH_TYPE;
    liveChatShowBadges: boolean;
    liveChatShowMessageTime: boolean;
    liveChatUseChatColors: boolean;
    language: LANGUAGES;
    at: string | null;
    rt: string | null;
    firstRequest: number;
}

export interface UpdateSetting {
    key: string;
    value: unknown;
}

const initialState = (): SettingsState => {
    const defaultLanguage = getDefaultLanguage();

    return {
        sortByDate: getLocalStorageValue(SETTINGS.SORT_BY_DATE, SORT_ORDER.DESC),
        showBadges: getLocalStorageValue(SETTINGS.SHOW_BADGES, true),
        showMessageTime: getLocalStorageValue(SETTINGS.SHOW_MESSAGE_TIME, true),
        userType: getLocalStorageValue(SETTINGS.USER_TYPE, SEARCH_TYPE.USERNAME),
        liveChatShowBadges: getLocalStorageValue(SETTINGS.LIVE_CHAT_SHOW_BADGES, true),
        liveChatShowMessageTime: getLocalStorageValue(SETTINGS.LIVE_CHAT_SHOW_MESSAGE_TIME, true),
        liveChatUseChatColors: getLocalStorageValue(SETTINGS.LIVE_CHAT_USE_CHAT_COLORS, true),
        language: getLocalStorageValue(SETTINGS.LANGUAGE, defaultLanguage),
        at: getLocalStorageValue(SETTINGS.ACCESS_TOKEN, null),
        rt: getLocalStorageValue(SETTINGS.REFRESH_TOKEN, null),
        firstRequest: getLocalStorageValue(SETTINGS.FIRST_REQUEST, 0),
    };
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
export const getUserTypeSetting = createSelector(
    getSettings,
    (settings) => settings.userType,
);
export const getLiveChatShowBadgesSetting = createSelector(
    getSettings,
    (settings) => settings.liveChatShowBadges,
);
export const getLiveChatShowMessageTimeSetting = createSelector(
    getSettings,
    (settings) => settings.liveChatShowMessageTime,
);
export const getLiveChatUseChatColors = createSelector(
    getSettings,
    (settings) => settings.liveChatUseChatColors,
);
export const getLanguage = createSelector(
    getSettings,
    (settings) => settings.language,
);
export const getAT = createSelector(
    getSettings,
    (settings) => settings.at,  
);
export const getRT = createSelector(
    getSettings,
    (settings) => settings.rt,  
);
export const getUserIdFromAT = createSelector(
    getAT,
    (at) => {
        if (at) {
            const { payload } = decode(at);
            return payload.user_id;
        }

        return 0;
    }
);
const getFirstRequest = createSelector(
    getSettings,
    (settings) => new Date(settings.firstRequest * 1000)
);
export const getLimitsExpiryTimestamp = createSelector(
    getFirstRequest,
    (firstRequest) => new Date(firstRequest.getTime() + 60 * 60 * 24 * 1000),
);

export default settingsSlice.reducer;
