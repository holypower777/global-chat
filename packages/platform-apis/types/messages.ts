/* eslint-disable camelcase */
import { getDateFromString } from 'platform-components/src/utils';

import { TwitchUserId } from './twitch-user';

interface MessageAPI {
    message_id: string;
    user_id: TwitchUserId;
    channel_id: TwitchUserId;
    message: string;
    time: string;
    badges: string;
    reply_parent_msg_id: string;
    reply_parent_user_id: TwitchUserId;
    reply_parent_user_login: string;
    reply_parent_display_name: string;
    reply_parent_msg_body: string;
}

export type MessagesAPI = Array<MessageAPI>;

export interface Message {
    messageId: string;
    userId: TwitchUserId;
    channelId: TwitchUserId;
    message: string;
    time: Date | null;
    badges: string;
    parentMsgId: string;
    parentUserId: TwitchUserId;
    parentUserLogin: string;
    parentDisplayName: string;
    parentMsgBody: string;
    renderDate: boolean;
}

export type Messages = Array<Message>;

const convertMessageApi = (msg: MessageAPI): Message => ({
    messageId: msg.message_id,
    userId: msg.user_id,
    channelId: msg.channel_id,
    message: msg.message,
    time: getDateFromString(msg.time),
    badges: msg.badges,
    parentMsgId: msg.reply_parent_msg_id,
    parentUserId: msg.reply_parent_user_id,
    parentUserLogin: msg.reply_parent_user_login,
    parentDisplayName: msg.reply_parent_display_name,
    parentMsgBody: msg.reply_parent_msg_body,
    renderDate: false,
});

export const convertMessagesApi = (msgs: MessagesAPI): Messages => 
    msgs.map(convertMessageApi);
