import { TwitchUserCommon, TwitchUsersCommon } from './twitch-user';

export interface OverallStats {
    totalMessages: number;
    totalChannels: number;
    totalUsers: number;
    totalBans: number;
    totalSubs: number;
    periodActivity: number;
    mostActiveChannels: TwitchUsersCommon;
    mostActiveUsers: TwitchUsersCommon;
    mostSearchedUsers: TwitchUsersCommon;
    mostBannedUsers: TwitchUsersCommon;
    mostPatronUsers: TwitchUsersCommon;
    currentlyActiveChannels: number;
    time: Date;
}

interface PlotsTotal {
    value: number;
    time: Date;
}

interface PlotsMost {
    value: TwitchUserCommon;
    time: Date;
}

export interface OverallStatsPlots {
    totalMessages: PlotsTotal;
    totalChannels: PlotsTotal;
    totalUsers: PlotsTotal;
    totalBans: PlotsTotal;
    totalSubs: PlotsTotal;
    periodActivity: PlotsTotal;
    mostActiveChannels: PlotsMost;
    mostActiveUsers: PlotsMost;
    mostSearchedUsers: PlotsMost;
    mostBannedUsers: PlotsMost;
    mostPatronUsers: PlotsMost;
    currentlyActiveChannels: PlotsTotal;
}
