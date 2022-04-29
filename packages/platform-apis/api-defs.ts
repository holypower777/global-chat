import { 
    ChannelIdQuery, 
    GetOverallStatsPlotsQuery, 
    GetTwitchUserQuery, 
    GetTwitchUserWithChannelsQuery, 
    UserIdQuery, 
} from './types/query';

/* eslint-disable max-params */
export const baseUrl = process.env.NODE_ENV 
    ? 'http://192.168.1.12:3000/v1/'
    : '/api/v1/';
export const baseBadgesUrl = 'https://badges.twitch.tv/';

// user defs
export const getTwitchUserByUsernameDef = 
    ({ username, type }: GetTwitchUserQuery) => `twitch-user/${username}?type=${type}`;
export const getTwitchUserWithChannelsByUsernameDef = 
    ({ username, type }: GetTwitchUserQuery) => `twitch-user/${username}/user-with-channels?type=${type}`;
export const getRandomTwitchUser = () => 'twitch-user/random';
export const getTwitchUserWereInterestedByUserIdDef = 
    ({ userId }: UserIdQuery) => `twitch-user/${userId}/were-interested`;
export const putTwitchUserWereInterestedByUserIdDef = 
    ({ userId }: UserIdQuery) => `twitch-user/${userId}/were-interested`;

// messages defs
export const getMessagesByUserIdDef = 
    ({ userId }: UserIdQuery) => `messages/${userId}`;
export const getMessagesByUserIdAndChannelIdDef = 
    ({ userId, channelId, limit = 200, offset = 0, sort = 'desc', dateFrom, dateTo }: GetTwitchUserWithChannelsQuery) =>
        `messages/${userId}/${channelId}?limit=${limit}&offset=${offset}&sort=${sort}&dateFrom=${dateFrom}&dateTo=${dateTo}`;

// stats defs
export const getOverallStatsDef = () => 'stats/overall';
export const getOverallStatsPlotsDef = 
    ({ dateFrom, dateTo }: GetOverallStatsPlotsQuery) => `stats/overall/plots?dateFrom=${dateFrom}&dateTo=${dateTo}`;

// badges def
export const getSubscriberBadgesByChannelIdDef = 
    ({ channelId }: ChannelIdQuery) => `v1/badges/channels/${channelId}/display`;
