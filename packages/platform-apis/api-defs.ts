/* eslint-disable camelcase */
import { convertTwitchUserCommonToApi } from './types';
import { AuthBody, UserCommonBody } from './types/body';
import {
    ChannelIdQuery,
    DisplayNameQuery,
    GetOverallStatsPlotsQuery,
    GetMessagesByUserAndChannelIdQuery,
    UserIdQuery,
    GetMessagesByChannelIdQuery,
} from './types/query';

export const tgcUrl = 'https://global-chat.ru/';
export const baseUrl =
    process.env.NODE_ENV === 'development' ? 'http://192.168.1.12:3000/v1/' : '/v1/';
export const baseAuthUrl =
    process.env.NODE_ENV === 'development' ? 'http://192.168.1.12:3000/' : '/';
export const baseBadgesUrl = 'https://badges.twitch.tv/';

// twitch-users defs
export const getTwitchUserByDisplayNameMatcher = 'twitch-user/:displayName';
export const getTwitchUserByDisplayNameDef = ({ displayName }: DisplayNameQuery) =>
    `twitch-user/${displayName}`;
export const getTwitchUserChannelsMatcher = 'twitch-user/:userId/channels';
export const getTwitchUserChannelsDef = ({ userId }: UserIdQuery) =>
    `twitch-user/${userId}/channels`;
export const getTwitchUserStatsMatcher = 'twitch-user/:userId/stats';
export const getTwitchUserStatsDef = ({ userId }: UserIdQuery) => `twitch-user/${userId}/stats`;
export const getTwitchChannelStatsMatcher = 'twitch-user/channel/:channelId/stats';
export const getTwitchChannelStatsDef = ({ channelId }: ChannelIdQuery) =>
    `twitch-user/channel/${channelId}/stats`;
export const etDisplayNameSuggestions = 'twitch-user/:displayName/suggestions';
export const getDisplayNameSuggestionsDef = ({ displayName }: DisplayNameQuery) =>
    `twitch-user/${displayName}/suggestions`;
export const getRandomTwitchUserMatcher = 'twitch-user/random';
export const getRandomTwitchUserDef = () => 'twitch-user/random';

// messages defs
export const getMessagesByUserIdAndChannelIdMatcher = 'messages/:userId/:channelId';
export const getMessagesByUserIdAndChannelIdDef = ({
    userId,
    channelId,
    limit = 200,
    offset = 0,
    sort = 'desc',
    dateFrom,
    dateTo,
}: GetMessagesByUserAndChannelIdQuery) =>
    `messages/${userId}/${channelId}?limit=${limit}&offset=${offset}&sort=${sort}&dateFrom=${dateFrom?.getTime()}&dateTo=${dateTo?.getTime()}`;
export const getMessagesByChannelIdMatcher = 'messages/channel/:channelId';
export const getMessagesByChannelIdDef = ({
    channelId,
    limit = 200,
    offset = 0,
    sort = 'desc',
    dateFrom,
    dateTo,
}: GetMessagesByChannelIdQuery) =>
    `messages/channel/${channelId}?limit=${limit}&offset=${offset}&sort=${sort}&dateFrom=${dateFrom.getTime()}&dateTo=${dateTo.getTime()}`;

// stats defs
export const getOverallStatsDef = () => 'stats/overall';
export const getOverallStatsPlotsDef = ({ dateFrom, dateTo }: GetOverallStatsPlotsQuery) =>
    `stats/overall/plots?dateFrom=${dateFrom.getTime()}&dateTo=${dateTo.getTime()}`;
export const getDailyStatsDef = () => 'stats/daily';

// users defs
export const getUserByIdDef = ({ userId }: UserIdQuery) => `users/${userId}`;
export const postUserFavoriteDef = ({ userId, body }: UserIdQuery & UserCommonBody) => ({
    url: `users/${userId}/favorites`,
    method: 'POST',
    body: convertTwitchUserCommonToApi(body),
});
export const deleteUserFavoriteDef = ({ userId, body }: UserIdQuery & UserCommonBody) => ({
    url: `users/${userId}/favorites`,
    method: 'PUT',
    body: convertTwitchUserCommonToApi(body),
});
export const postSearchHistoryDef = ({ userId, body }: UserIdQuery & UserCommonBody) => ({
    url: `users/${userId}/search-history`,
    method: 'POST',
    body: convertTwitchUserCommonToApi(body),
});

// auth defs
export const authTwitchLogoutDef = ({ userId, refreshToken }: AuthBody) => ({
    url: 'auth/twitch/logout',
    method: 'POST',
    body: {
        user_id: userId,
        refresh_token: refreshToken,
    },
});
export const authRefreshTokenDef = ({ userId, refreshToken }: AuthBody) => ({
    url: 'auth/refresh',
    method: 'POST',
    body: {
        user_id: userId,
        refresh_token: refreshToken,
    },
});

// badges def
export const getSubscriberBadgesByChannelIdDef = ({ channelId }: ChannelIdQuery) =>
    `v1/badges/channels/${channelId}/display`;
