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
import { userMock } from './users';

interface MockBody {
    displayName?: string;
    userId?: string;
    user_id?: number;
    display_name?: string;
    profile_image_url?: string;
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
    mock: (body: MockBody) => {
        response: unknown;
        status?: number;
    };
}

const endpointToMock: Record<string, MockConfig> = {
    authLogout: {
        matcher: getTwitchUserByDisplayNameMatcher,
        enabled: true,
        mock: () => ({
            response: null,
            status: 204,
        }),
    },
    getMessagesByUserIdAndChannelId: {
        matcher: getMessagesByUserIdAndChannelIdMatcher,
        enabled: true,
        mock: (body: MockBody) => ({
            response: {
                items: twitchMessagesMock(parseInt(body.limit || '0', 10) || 200, {
                    userId: parseInt(body.userId || '0', 10) || undefined,
                    channelId: parseInt(body.channelId || '0', 10) || undefined,
                    sort: body.sort,
                }),
                total: randNumber({ min: 200, max: 3000 }),
                sort: body.sort || 'desc',
            },
        }),
    },
    getChannelMessages: {
        matcher: getMessagesByUserIdAndChannelIdMatcher,
        enabled: true,
        mock: (body: MockBody) => ({
            response: {
                items: twitchMessagesMock(parseInt(body.limit || '0', 10) || 200, {
                    sort: body.sort,
                }),
                total: randNumber({ min: 200, max: 3000 }),
                sort: body.sort || 'desc',
            },
        }),
    },
    getOverallStats: {
        enabled: true,
        mock: () => ({
            response: overallStatsMock(),
        }),
    },
    getOverallStatsPlots: {
        enabled: true,
        mock: () => ({
            response: overallStatsPlotsMock(),
        }),
    },
    getDailyStats: {
        enabled: true,
        mock: () => ({
            response: dailyStatsMock(),
        }),
    },
    getTwitchUser: {
        matcher: getTwitchUserByDisplayNameMatcher,
        enabled: true,
        mock: ({ displayName, token }) => ({
            response: twitchUserMock({
                displayName,
                isSelf: token?.display_name !== undefined && token?.display_name === displayName,
            }),
        }),
    },
    getTwitchUserChannels: {
        enabled: true,
        mock: () => ({
            response: {
                items: new Array(randNumber({ min: 0, max: 200 }))
                    .fill(1)
                    .map(twitchUserChannelMock),
                mostEngagment: new Array(5).fill(1).map(twitchUserChannelMock),
                lastActive: new Array(5).fill(1).map(twitchUserChannelMock),
            },
        }),
    },
    getTwitchUserStats: {
        matcher: getTwitchUserStatsMatcher,
        enabled: true,
        mock: (body: MockBody) => ({
            response: twitchUserStatsMock({
                userId: parseInt(body.userId || '0', 10) || undefined,
            }),
        }),
    },
    getTwitchChannelStats: {
        matcher: getTwitchChannelStatsMatcher,
        enabled: true,
        mock: (body: MockBody) => ({
            response: twitchUserChannelStatsMock({
                channelId: parseInt(body.channelId || '0', 10) || undefined,
            }),
        }),
    },
    getDisplayNameSuggestions: {
        enabled: true,
        mock: () => ({
            response: new Array(randNumber({ min: 3, max: 30 })).fill(1).map(randDisplayName),
        }),
    },
    getRandomTwitchUser: {
        enabled: true,
        mock: () => ({
            response: twitchUserMock({}),
        }),
    },
    getUserById: {
        enabled: true,
        mock: (body: MockBody) => ({
            response: userMock({
                displayName: body.token?.display_name || '',
                userId: parseInt(body.userId || '0', 10),
                paidTier: body.token?.paid_tier || 0,
            }),
            status: parseInt(body.userId || '0', 10) === body.token?.user_id ? 200 : 403,
        }),
    },
    postUserFavorite: {
        enabled: false,
        mock: () => ({ response: null }),
    },
    deleteUserFavorite: {
        enabled: false,
        mock: () => ({ response: null }),
    },
    postSearchHistory: {
        enabled: false,
        mock: () => ({ response: null }),
    },
};

export default endpointToMock;
