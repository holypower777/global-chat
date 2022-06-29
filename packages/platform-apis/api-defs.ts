/* eslint-disable camelcase */
import { AuthBody, UserCommonBody } from './types/body';
import { 
    ChannelIdQuery, 
    DisplayNameQuery, 
    GetOverallStatsPlotsQuery, 
    GetTwitchUserQuery, 
    GetTwitchUserWithChannelsQuery, 
    TokenQuery, 
    UserIdQuery, 
} from './types/query';

/* eslint-disable max-params */
export const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://192.168.1.12:3000/v1/'
    : '/v1/';
export const baseAuthUrl = process.env.NODE_ENV === 'development' ? 'http://192.168.1.12:3000/' : '/';
export const baseBadgesUrl = 'https://badges.twitch.tv/';

// user defs
export const getTwitchUserWithChannelsByUsernameDef = 
    ({ username, type }: GetTwitchUserQuery) => `twitch-user/${username}/user-with-channels?type=${type}`;
export const getRandomTwitchUser = () => 'twitch-user/random';
export const getDisplayNameSuggestionsDef =
    ({ username }: DisplayNameQuery) => `twitch-user/${username}/suggestions`;

// messages defs
export const getMessagesByUserIdAndChannelIdDef = 
    ({ userId, channelId, limit = 200, offset = 0, sort = 'desc', dateFrom, dateTo }: GetTwitchUserWithChannelsQuery) =>
        `messages/${userId}/${channelId}?limit=${limit}&offset=${offset}&sort=${sort}&dateFrom=${dateFrom}&dateTo=${dateTo}`;

// stats defs
export const getOverallStatsDef = () => 'stats/overall';
export const getOverallStatsPlotsDef = 
    ({ dateFrom, dateTo }: GetOverallStatsPlotsQuery) => `stats/overall/plots?dateFrom=${dateFrom}&dateTo=${dateTo}`;
export const getDailyStatsDef = () => 'stats/daily';

// users defs
export const getUserByIdDef = ({ userId, token }: UserIdQuery & TokenQuery) => ({
    url: `users/${userId}`,
    headers: {
        Authorization: token,
    },
});
export const postUserFavoriteDef = ({ userId, body }: UserIdQuery & UserCommonBody) => ({
    url: `users/${userId}/favorites`,
    method: 'POST',
    body,
});
export const deleteUserFavoriteDef = ({ userId, body }: UserIdQuery & UserCommonBody) => ({
    url: `users/${userId}/favorites`,
    method: 'DELETE',
    body,
});
export const postSearchHistoryDef = ({ userId, body }: UserIdQuery & UserCommonBody) => ({
    url: `users/${userId}/search-history`,
    method: 'POST',
    body,
});

// auth defs
export const authTwitchLogoutDef = ({ body }: AuthBody) => ({
    url: 'auth/twitch/logout',
    method: 'POST',
    body: {
        user_id: body.user_id,
        refresh_token: body.refresh_token,
    },
});
export const authRefreshTokenDef = () => 'auth/refresh';

// badges def
export const getSubscriberBadgesByChannelIdDef = 
    ({ channelId }: ChannelIdQuery) => `v1/badges/channels/${channelId}/display`;
