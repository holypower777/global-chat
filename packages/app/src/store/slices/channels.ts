import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChannelsAPI } from 'platform-apis/types/channel';

import { RootState } from '../store';
import { Channels } from '../types/channels';

interface ChannelsState {
    channels: Channels;
    selectedChannel: string;
}

const initialState: ChannelsState = {
    channels: [],
    selectedChannel: '',
};

export const channelsSlice = createSlice({
    name: 'channels',
    initialState,
    reducers: {
        setChannels: (state, action: PayloadAction<ChannelsAPI>) => {
            state.channels = action.payload.map((channel) => ({
                username: channel.display_name,
                userId: channel.user_id,
                login: channel.login,
            }));
        },
        setSelectedChannel: (state, action: PayloadAction<string>) => {
            state.selectedChannel = action.payload;
        },
        clearChannelsState: (state) => {
            state.channels = [];
            state.selectedChannel = '';
        },
    },
});

export const { setChannels, setSelectedChannel, clearChannelsState } = channelsSlice.actions;
export const getChannels = (state: RootState) => state.channels.channels;
export const getSelectedChannel = (state: RootState) => state.channels.selectedChannel;

export default channelsSlice.reducer;
