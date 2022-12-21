import { TwitchUsersCommon } from './twitch-user';

export interface User {
    twitchUserId: number;
    displayName: string;
    profileImageUrl: string;
    favorites: TwitchUsersCommon;
    searchHistory: TwitchUsersCommon;
    paidTier: 0 | 1 | 2 | 3 | 4;
    paidUntil: Date;
    joinedAt: Date;
    meta: Record<string, unknown>;
}
