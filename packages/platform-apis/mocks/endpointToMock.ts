import { randNumber } from '@ngneat/falso';

import {
    getMessagesByUserIdAndChannelIdMatcher,
    getTwitchChannelStatsMatcher,
    getTwitchUserByDisplayNameMatcher,
    getTwitchUserStatsMatcher,
} from '../api-defs';
import { AccessToken } from '../types';
import randDisplayName from '../utils/randDisplayName';

import { twitchMessagesMock } from './messages';
import { overallStatsMock, overallStatsPlotsMock } from './overall-stats';
import { dailyStatsMock } from './stats';
import { twitchUserMock, twitchUserStatsMock } from './twitch-user';
import { twitchUserChannelMock, twitchUserChannelStatsMock } from './twitch-user-channel';

interface MockBody {
    displayName?: string;
    userId?: string;
    channelId?: string;
    sort?: 'asc' | 'desc';
    total?: string;
    limit?: string;
    offset?: string;
    token?: AccessToken;
}

interface MockConfig {
    matcher?: string;
    enabled: boolean;
    status?: number;
    mock: (body: MockBody) => unknown;
}

const endpointToMock: Record<string, MockConfig> = {
    authLogout: {
        matcher: getTwitchUserByDisplayNameMatcher,
        enabled: true,
        status: 204,
        mock: () => null,
    },
    getMessagesByUserIdAndChannelId: {
        matcher: getMessagesByUserIdAndChannelIdMatcher,
        enabled: true,
        mock: (body: MockBody) => ({
            items: twitchMessagesMock(parseInt(body.limit || '0', 10) || 200, {
                userId: parseInt(body.userId || '0', 10) || undefined,
                channelId: parseInt(body.channelId || '0', 10) || undefined,
                sort: body.sort,
            }),
            total: randNumber({ min: 200, max: 3000 }),
            sort: body.sort || 'desc',
        }),
    },
    getChannelMessages: {
        matcher: getMessagesByUserIdAndChannelIdMatcher,
        enabled: true,
        mock: (body: MockBody) => ({
            items: twitchMessagesMock(parseInt(body.limit || '0', 10) || 200, {
                sort: body.sort,
            }),
            total: randNumber({ min: 200, max: 3000 }),
            sort: body.sort || 'desc',
        }),
    },
    getOverallStats: {
        enabled: true,
        mock: () => overallStatsMock(),
    },
    getOverallStatsPlots: {
        enabled: true,
        mock: () => overallStatsPlotsMock(),
    },
    getDailyStats: {
        enabled: true,
        mock: () => dailyStatsMock(),
    },
    getTwitchUser: {
        matcher: getTwitchUserByDisplayNameMatcher,
        enabled: true,
        mock: ({ displayName, token }) =>
            twitchUserMock({
                displayName,
                isSelf: token?.display_name !== undefined && token?.display_name === displayName,
            }),
    },
    getTwitchUserChannels: {
        enabled: true,
        mock: () => ({
            items: new Array(randNumber({ min: 0, max: 200 })).fill(1).map(twitchUserChannelMock),
            mostEngagment: new Array(5).fill(1).map(twitchUserChannelMock),
            lastActive: new Array(5).fill(1).map(twitchUserChannelMock),
        }),
    },
    getTwitchUserStats: {
        matcher: getTwitchUserStatsMatcher,
        enabled: true,
        mock: (body: MockBody) =>
            twitchUserStatsMock({ userId: parseInt(body.userId || '0', 10) || undefined }),
    },
    getTwitchChannelStats: {
        matcher: getTwitchChannelStatsMatcher,
        enabled: true,
        mock: (body: MockBody) =>
            twitchUserChannelStatsMock({
                channelId: parseInt(body.channelId || '0', 10) || undefined,
            }),
    },
    getDisplayNameSuggestions: {
        enabled: true,
        mock: () => new Array(randNumber({ min: 3, max: 30 })).fill(1).map(randDisplayName),
    },
    getRandomTwitchUser: {
        enabled: true,
        mock: () => twitchUserMock({}),
    },
    getUserById: {
        enabled: true,
        mock: () => 
    },
    postUserFavorite: {},
    deleteUserFavorite: {},
    postSearchHistory: {},
};

export default endpointToMock;
