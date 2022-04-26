import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TwitchUserId } from 'platform-apis/types';
import tmi from 'tmi.js';

import { RootState } from '../store';

interface ActualChannelRaw {
    user_id: number;
    display_name: string;
    online: number;
    login: string;
}

type ActualChannelsRaw = Array<ActualChannelRaw>;

interface ActualChannel {
    userId: number;
    displayName: string;
    online: number;
    login: string;
    selected: boolean;
}

export type ActualChannels = Record<TwitchUserId, ActualChannel>;

export enum SORT_ORDER {
    ONLINE_DESC = 'online desc',
    ONLINE_ASC = 'online asc',
    LOGIN_DESC = 'login desc',
    LOGIN_ASC = 'login asc',
}

export enum VISIBILITY {
    SHOW_ALL = 'show all',
    SHOW_SELECTED = 'show selected',
    HIDE_SELECTED = 'hide selected',
}

export interface Msg {
    channelLogin: string;
    channelId: TwitchUserId;
    userId: TwitchUserId;
    displayName: string;
    login: string;
    badges: string;
    message: string;
    color: string | null;
    time: Date;
}

interface LiveChatState {
    actualChannels: ActualChannels;
    client: tmi.Client;
    sortOrder: SORT_ORDER;
    visibility: VISIBILITY;
    messages: Array<Msg>;
    speed: number;
}

const initialState: LiveChatState = {
    actualChannels: {},
    client: new tmi.Client({
        connection: {
            reconnect: true,
        },
        channels: [],
    }),
    sortOrder: SORT_ORDER.ONLINE_DESC,
    visibility: VISIBILITY.SHOW_ALL,
    messages: [],
    speed: 0,
};

const findDiff = (actualChannels1: Array<ActualChannel>, actualChannels2: Array<ActualChannel>) =>
    actualChannels1.filter((x) => actualChannels2.filter((e) => e.login === x.login).length === 0);

export const liveChatSlice = createSlice({
    name: 'live-chat',
    initialState,
    reducers: {
        setActualChannels: (state, action: PayloadAction<ActualChannelsRaw>) => {
            const currentState = Object.values(state.actualChannels);
            const formattedData = action.payload.map((e) => ({
                userId: e.user_id,
                displayName: e.display_name,
                online: e.online,
                login: e.login,
                selected: false,
            }));

            const toJoin = findDiff(formattedData, currentState);
            const toLeave = findDiff(currentState, formattedData);

            toLeave.forEach((chan) => {
                state.client.part(chan.login).catch(() => ({}));
                delete state.actualChannels[chan.userId];
            });

            toJoin.forEach((chan) => {
                state.client.join(chan.login).catch(() => ({}));
                state.actualChannels[chan.userId] = chan;
            });
        },
        setSortOrder: (state, action: PayloadAction<string>) => {
            //@ts-ignore
            state.sortOrder = action.payload;
        },
        setVisibility: (state, action: PayloadAction<string>) => {
            //@ts-ignore
            state.visibility = action.payload;
        },
        setSpeed: (state, action: PayloadAction<number>) => {
            state.speed = action.payload;
        },
        unselectAll: (state) => {
            Object.keys(state.actualChannels).forEach((id) => {
                state.actualChannels[parseInt(id, 10)].selected = false;
            });
            state.visibility = VISIBILITY.SHOW_ALL;
        },
        pushMessage: (state, action: PayloadAction<Msg>) => {
            if (state.messages.length > 100) {
                state.messages.shift();
            }

            state.messages.push(action.payload);
        },
        toggleSelected: (state, action: PayloadAction<TwitchUserId>) => {
            state.actualChannels[action.payload].selected = !state.actualChannels[action.payload].selected;
            if (Object.values(state.actualChannels).filter((e) => e.selected).length === 0) {
                state.visibility = VISIBILITY.SHOW_ALL;
            }
        },
    },
});

export const { 
    setActualChannels,
    setSortOrder,
    setVisibility,
    setSpeed,
    toggleSelected,
    pushMessage,
    unselectAll,
} = liveChatSlice.actions;

const getRootLiveChat = (state: RootState) => state.liveChat;
export const getLiveChatSortOrder = createSelector(
    getRootLiveChat,
    (rootLive) => rootLive.sortOrder,
);
export const getLiveChatVisibility = createSelector(
    getRootLiveChat,
    (rootLive) => rootLive.visibility,
);
export const getActualChannels = createSelector(
    getRootLiveChat,
    (rootLive) => rootLive.actualChannels,
);
const getActualChannelsAsArrayRaw = createSelector(
    getActualChannels,
    (actualChannels) => Object.values(actualChannels),
);
export const hasActualChannels = createSelector(
    getActualChannelsAsArrayRaw,
    (actualChannels) => actualChannels.length !== 0,
);
export const getActualChannelsAsArray = createSelector(
    [getActualChannels, getLiveChatSortOrder, getLiveChatVisibility],
    (actualChannels, sortOrder, visibility) => {
        const arr = Object.values(actualChannels);
        switch (sortOrder) {
            case SORT_ORDER.ONLINE_DESC:
                arr.sort((a, b) => b.online - a.online);
                break;
            case SORT_ORDER.ONLINE_ASC:
                arr.sort((a, b) => a.online - b.online);
                break;
            case SORT_ORDER.LOGIN_DESC:
                arr.sort((a, b) => a.login.localeCompare(b.login));
                break;
            case SORT_ORDER.LOGIN_ASC:
                arr.sort((a, b) => b.login.localeCompare(a.login));
                break;
            default:
        }

        switch (visibility) {
            case VISIBILITY.SHOW_SELECTED:
                return arr.filter((e) => e.selected);
            case VISIBILITY.HIDE_SELECTED:
                return arr.filter((e) => !e.selected);
            default:
                return arr;
        }
    },
);
export const hasSelectedActualChannels = createSelector(
    getActualChannelsAsArrayRaw,
    (actualChannels) => actualChannels.some((e) => e.selected),
);
export const getSelectedChannels = createSelector(
    [hasSelectedActualChannels, getActualChannelsAsArrayRaw],
    (hasSelected, actualChannels) => {
        if (!hasSelected) {
            return [];
        }

        return actualChannels.filter((e) => e.selected);
    }
);
export const getClient = createSelector(
    getRootLiveChat,
    (rootLive) => rootLive.client,
);
export const getAmountOfLiveChannels = createSelector(
    getActualChannelsAsArrayRaw,
    (actualChannels) => actualChannels.length,
);
export const getLiveChatMessages = createSelector(
    getRootLiveChat,
    (rootLive) => rootLive.messages,
);
export const getChatSpeed = createSelector(
    getRootLiveChat,
    (rootLive) => rootLive.speed,
);

export default liveChatSlice.reducer;
