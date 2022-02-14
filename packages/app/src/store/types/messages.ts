import { TwitchUserId } from './twitch-user';

export interface Message {
    channelId: TwitchUserId;
    channelLogin: string;
    channelName: string;
    badges: string;
    message: string;
    messageId: string;
    time: string;
    userId: TwitchUserId;
}

export type Messages = Array<Message>;
