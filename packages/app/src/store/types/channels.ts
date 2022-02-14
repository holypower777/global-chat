import { TwitchUserId } from './twitch-user';

export interface Channel {
    username: string;
    userId: TwitchUserId;
    login: string;
}

export type Channels = Array<Channel>;
