export interface TwitchUser {
    avatarSrc: string;
    createdAt: string | null;
    mostActiveChannel: string;
    totalMessages: number | null;
    userId: TwitchUserId;
    username: string;
}

export type TwitchUserId = number;
