export interface GetTwitchUserQuery {
    username: string;
    type: 'username' | 'user_id';
}

export interface DisplayNameQuery {
    displayName: string;
}

export interface GetMessagesByUserAndChannelIdQuery {
    userId: number;
    channelId: number;
    limit?: number;
    offset?: number;
    sort?: 'desc' | 'asc';
    dateFrom?: Date;
    dateTo?: Date;
}

export interface GetMessagesByChannelIdQuery {
    channelId: number;
    dateFrom: Date;
    dateTo: Date;
    limit?: number;
    offset?: number;
    sort?: 'desc' | 'asc';
}

export interface GetOverallStatsPlotsQuery {
    dateFrom: Date;
    dateTo: Date;
}

export interface UserIdQuery {
    userId: number;
}

export interface ChannelIdQuery {
    channelId: number;
}

export interface TokenQuery {
    token: string;
}
