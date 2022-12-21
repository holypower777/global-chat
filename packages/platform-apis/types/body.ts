import { TwitchUserCommon } from './twitch-user';

export interface UserCommonBody {
    body: TwitchUserCommon;
}

export interface AuthBody {
    userId: number;
    refreshToken: string;
}
