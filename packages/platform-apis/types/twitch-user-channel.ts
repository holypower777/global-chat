import { TwitchUserCommon, TwitchUsersCommon } from './twitch-user';

export interface TwitchUserChannel extends TwitchUserCommon {
    msgsAmount: number;
    firstMsgDate: Date;
    lastMsgDate: Date;
    isBanned: boolean;
    isServiceUser: boolean;
    isPaid: boolean;
    isSelf: boolean;
    isSub: boolean;
}

export interface TwitchUserChannelStats {
    channelId: number;
    messagesAmount: number;
    totalBans: number;
    totalMutes: number;
    totalSubs: number;
    totalGiftedSubs: number;
    topChatters: TwitchUsersCommon;
}
