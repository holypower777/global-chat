/* eslint-disable camelcase */
import { getDateFromString } from 'platform-components/src/utils';

export type TwitchUserId = number;

export interface TwitchUserMeta {
    username_history?: Array<string>;
}

export interface TwitchUserAPI {
    user_id: TwitchUserId;
    login: string;
    display_name: string;
    type: 'staff' | 'admin' | 'global_mod' | '';
    broadcaster_type: 'partner' | 'affiliate' | '';
    description: string;
    profile_image_url: string;
    offline_image_url: string;
    view_count: number;
    created_at: string;
    were_interested: number;
    messages_amount: number;
    meta: TwitchUserMeta;
}

export interface TwitchUser {
    userId: TwitchUserId;
    login: string;
    displayName: string;
    type: 'staff' | 'admin' | 'global_mod' | '';
    broadcasterType: 'partner' | 'affiliate' | '';
    description: string;
    profileImageUrl: string;
    offlineImageUrl: string;
    viewCount: number;
    createdAt: Date | null;
    wereInterested: number;
    messagesAmount: number;
    meta: TwitchUserMeta;
}

export const convertTwitchUserApi = (user: TwitchUserAPI): TwitchUser => {
    const converted: TwitchUser = {
        userId: user.user_id,
        login: user.login,
        displayName: user.display_name,
        type: user.type,
        broadcasterType: user.broadcaster_type,
        description: user.description,
        profileImageUrl: user.profile_image_url,
        offlineImageUrl: user.offline_image_url,
        viewCount: user.view_count,
        createdAt: getDateFromString(user.created_at),
        wereInterested: user.were_interested,
        messagesAmount: user.messages_amount,
        meta: user.meta,
    };

    return converted;
};
