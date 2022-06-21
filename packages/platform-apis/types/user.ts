import { getDateFromString } from 'platform-components/src/utils';

import { TwitchUserId } from './twitch-user';

interface UserCommonAPI {
    user_id: TwitchUserId;
    display_name: string;
    profile_image_url: string;
}

type UserCommonsAPI = Array<UserCommonAPI>;

interface UserAPI extends UserCommonAPI {
    favorites: UserCommonsAPI;
    search_history: UserCommonsAPI;
    dontion_tier: number;
    donation_exp: string;
    is_hidden_from_search: boolean;
    meta: object;
}

export interface UserCommon {
    userId: TwitchUserId;
    displayName: string;
    profileImageUrl: string;
}

export type UserCommons = Array<UserCommon>;

export interface User extends UserCommon {
    favorites: UserCommons;
    searchHistory: UserCommons;
    donationTier: number;
    donationExp: Date | null;
    isHiddenFromSearch: boolean;
    meta: object;
}

const convertCommonUserApi = (user: UserCommonAPI): UserCommon => ({
    userId: user.user_id,
    displayName: user.display_name,
    profileImageUrl: user.profile_image_url,
});

export const convertCommonUsersApi = (usrs: UserCommonsAPI): UserCommons =>
    usrs.map(convertCommonUserApi);

export const convertUserApi = (user: UserAPI): User => ({
    userId: user.user_id,
    displayName: user.display_name,
    profileImageUrl: user.profile_image_url,
    favorites: user.favorites.map(convertCommonUserApi),
    searchHistory: user.search_history.map(convertCommonUserApi),
    donationTier: user.dontion_tier,
    donationExp: getDateFromString(user.donation_exp),
    isHiddenFromSearch: user.is_hidden_from_search,
    meta: user.meta,
});
