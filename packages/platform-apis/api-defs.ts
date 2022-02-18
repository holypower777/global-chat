export const baseUrl = process.env.NODE_ENV 
    ? 'http://192.168.1.12:8080/api/v1/'
    : '/api/v1/';
export const baseBadgesUrl = 'https://badges.twitch.tv/';

export const getMessagesByNameDef = (username: string) => `messages/${username}`;
export const getSubscriberBadgesByChannelIdDef = (channelId: number) => `v1/badges/channels/${channelId}/display`;
