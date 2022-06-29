import { getDateFromString } from 'platform-components/src/utils';

import { TwitchUserId } from './twitch-user';

/* eslint-disable camelcase */
interface TwitchUserChannelAPI {
    user_id: TwitchUserId;
    login: string;
    display_name: string;
    profile_image_url: string;
    messages: number;
    first_message_date: string;
    last_message_date: string;
}

export type TwitchUserChannelsAPI = Array<TwitchUserChannelAPI>;

export interface TwitchUserChannel {
    userId: TwitchUserId;
    login: string;
    displayName: string;
    profileImageUrl: string;
    messages: number;
    firstMessageDate: Date | null;
    lastMessageDate: Date | null;
}

export type TwitchUserChannels = Array<TwitchUserChannel>;

const convertTwitchUserChannelApi = (channel: TwitchUserChannelAPI): TwitchUserChannel => {
    const converted: TwitchUserChannel = {
        userId: channel.user_id,
        login: channel.login,
        displayName: channel.display_name,
        profileImageUrl: channel.profile_image_url,
        messages: channel.messages,
        firstMessageDate: getDateFromString(channel.first_message_date),
        lastMessageDate: getDateFromString(channel.last_message_date),
    };
    
    return converted;
};

export const convertTwitchUserChannelsApi = (channels: TwitchUserChannelsAPI): TwitchUserChannels => 
    channels ? channels.map(convertTwitchUserChannelApi) : [];
