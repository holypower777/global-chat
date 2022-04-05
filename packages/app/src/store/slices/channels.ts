import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TwitchUserChannel, TwitchUserChannels } from 'platform-apis/types';

import { RootState } from '../store';

interface ChannelsState {
    channels: TwitchUserChannels;
    selectedChannel: TwitchUserChannel | null;
}

const initialState: ChannelsState = {
    channels: [],
    selectedChannel: null,
};

export const channelsSlice = createSlice({
    name: 'channels',
    initialState,
    reducers: {
        setChannels: (state, action: PayloadAction<TwitchUserChannels>) => {
            state.channels = action.payload;
        },
        setSelectedChannel: (state, action: PayloadAction<TwitchUserChannel | null>) => {
            state.selectedChannel = action.payload;
        },
        clearChannelsState: (state) => {
            state.channels = [];
            state.selectedChannel = null;
        },
    },
});

export const { setChannels, setSelectedChannel, clearChannelsState } = channelsSlice.actions;
const getRootChannels = (state: RootState) => state.channels;
export const getChannels = createSelector(
    getRootChannels,
    (rootChannels) => rootChannels.channels,
);
export const getSelectedChannel = createSelector(
    getRootChannels,
    (rootChannels) => rootChannels.selectedChannel,
);

export default channelsSlice.reducer;
