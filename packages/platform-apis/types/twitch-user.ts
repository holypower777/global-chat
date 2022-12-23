/* eslint-disable camelcase */
export interface TwitchUserCommon {
    userId: number;
    displayName: string;
    profileImageUrl: string;
}

export type TwitchUsersCommon = Array<TwitchUserCommon>;

export const convertTwitchUserCommonToApi = (user: TwitchUserCommon) => ({
    user_id: user.userId,
    display_name: user.displayName,
    profile_image_url: user.profileImageUrl,
});

export interface TwitchUser extends TwitchUserCommon {
    login: string;
    type: 'staff' | 'admin' | 'global_mod' | '';
    broadcasterType: 'partner' | 'affiliate' | '';
    viewCount: number;
    createdAt: Date;
    isServiceUser: boolean;
    isPaid: boolean;
    isSelf: boolean;
    meta: Record<string, unknown>;
}

export interface TwitchUserStats {
    userId: number;
    messagesAmount: number;
    wereInterested: number;
    usernames: Array<string>;
    giftedSubs: number;
    subs: number;
    bans: number;
}
