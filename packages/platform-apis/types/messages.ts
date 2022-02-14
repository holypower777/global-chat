import { TwitchUserId } from './user';

export interface MessageAPI {
    ChannelId: TwitchUserId;
    badges: string;
    chan_id: TwitchUserId;
    chan_image: string;
    chan_login: string;
    chan_name: string;
    chan_view_count: number;
    message: string;
    message_id: string;
    time: string;
    user_id: TwitchUserId;
}

export type MessagesAPI = Array<MessageAPI>;
