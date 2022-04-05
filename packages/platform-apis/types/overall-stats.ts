import { getDateFromString } from 'platform-components/src/utils';

/* eslint-disable camelcase */
export interface OverallStatsAPI {
    id: number;
    total_messages: number;
    total_channels: number;
    total_users: number;
    period_activity: number;
    most_active_channels: Array<number>;
    most_active_users: Array<number>;
    most_searched_users: Array<number>;
    currently_active_channels: number;
    time: string;
}

export type OverallStatsPlotsAPI = Array<OverallStatsAPI>;

export interface OverallStats {
    id: number;
    totalMessages: number;
    totalChannels: number;
    totalUsers: number;
    periodActivity: number;
    mostActiveChannels: Array<number>;
    mostActiveUsers: Array<number>;
    mostSearchedUsers: Array<number>;
    currentlyActiveChannels: number;
    time: Date | null;
}

export type OverallStatsPlots = Array<OverallStats>;

export const convertOverallStatsApi = (stat: OverallStatsAPI): OverallStats => ({
    id: stat.id,
    totalMessages: stat.total_messages,
    totalChannels: stat.total_channels,
    totalUsers: stat.total_users,
    periodActivity: stat.period_activity,
    mostActiveChannels: stat.most_active_channels,
    mostActiveUsers: stat.most_active_users,
    mostSearchedUsers: stat.most_searched_users,
    currentlyActiveChannels: stat.currently_active_channels,
    time: getDateFromString(stat.time),
});

export const convertOverallStatsPlotsApi = (stats: OverallStatsPlotsAPI): OverallStatsPlots =>
    stats.map(convertOverallStatsApi);
