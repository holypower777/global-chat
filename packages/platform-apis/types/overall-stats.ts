import { getDateFromString } from 'platform-components/src/utils';

import { convertTwitchUserApi, TwitchUser, TwitchUserAPI } from './twitch-user';

/* eslint-disable camelcase */
export interface OverallStatsAPI {
    id: number;
    total_messages: number;
    total_channels: number;
    total_users: number;
    period_activity: number;
    most_active_channels: Array<TwitchUserAPI>;
    most_active_users: Array<TwitchUserAPI>;
    most_searched_users: Array<TwitchUserAPI>;
    currently_active_channels: number;
    time: string;
}

export interface OverallStatsPlotAPI {
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

export type OverallStatsPlotsAPI = Array<OverallStatsPlotAPI>;

export interface OverallStats {
    id: number;
    totalMessages: number;
    totalChannels: number;
    totalUsers: number;
    periodActivity: number;
    mostActiveChannels: Array<TwitchUser>;
    mostActiveUsers: Array<TwitchUser>;
    mostSearchedUsers: Array<TwitchUser>;
    currentlyActiveChannels: number;
    time: Date | null;
}

export interface OverallStatsPlot {
    id: number;
    totalMessages: number;
    totalChannels: number;
    totalUsers: number;
    periodActivity: number;
    currentlyActiveChannels: number;
    time: Date | null;
}

export type OverallStatsPlots = Array<OverallStatsPlot>;

export const convertOverallStatsApi = (stat: OverallStatsAPI): OverallStats => ({
    id: stat.id,
    totalMessages: stat.total_messages,
    totalChannels: stat.total_channels,
    totalUsers: stat.total_users,
    periodActivity: stat.period_activity,
    mostActiveChannels: stat.most_active_channels.map(convertTwitchUserApi),
    mostActiveUsers: stat.most_active_users.map(convertTwitchUserApi),
    mostSearchedUsers: stat.most_searched_users.map(convertTwitchUserApi),
    currentlyActiveChannels: stat.currently_active_channels,
    time: getDateFromString(stat.time),
});

const convertOverallStatsPlotApi = (plot: OverallStatsPlotAPI): OverallStatsPlot => ({
    id: plot.id,
    totalMessages: plot.total_messages,
    totalChannels: plot.total_channels,
    totalUsers: plot.total_users,
    periodActivity: plot.period_activity,
    currentlyActiveChannels: plot.currently_active_channels,
    time: getDateFromString(plot.time),
});

export const convertOverallStatsPlotsApi = (stats: OverallStatsPlotsAPI): OverallStatsPlots =>
    stats.map(convertOverallStatsPlotApi);
