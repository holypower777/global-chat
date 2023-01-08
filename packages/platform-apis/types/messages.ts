export interface TwitchMessage {
    messageId: string;
    userId: number;
    channelId: number;
    message: string;
    time: Date;
    badges: string;
    replyMsgId: string;
    replyUserId: number;
    replyUserLogin: string;
    replyDisplayName: string;
    replyMsgBody: string;
    meta: Record<string, unknown>;
}

export type TwitchMessages = Array<TwitchMessage>;
