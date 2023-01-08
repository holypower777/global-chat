import { randNumber } from '@ngneat/falso';

import { OverallStats, OverallStatsPlots } from '../types';

import { twitchUserCommonMock } from './twitch-user';

const MOST_DEFAULT_SIZE = 5;

export const overallStatsMock = (): OverallStats => ({
    totalMessages: randNumber({ min: 10000 }),
    totalChannels: randNumber({ min: 10 }),
    totalUsers: randNumber({ min: 1000 }),
    totalBans: randNumber({ min: 100 }),
    totalSubs: randNumber({ min: 100 }),
    periodActivity: randNumber({ min: 10000, max: 200000 }),
    mostActiveChannels: new Array(MOST_DEFAULT_SIZE).fill(1).map(twitchUserCommonMock),
    mostActiveUsers: new Array(MOST_DEFAULT_SIZE).fill(1).map(twitchUserCommonMock),
    mostSearchedUsers: new Array(MOST_DEFAULT_SIZE).fill(1).map(twitchUserCommonMock),
    mostBannedUsers: new Array(MOST_DEFAULT_SIZE).fill(1).map(twitchUserCommonMock),
    mostPatronUsers: new Array(MOST_DEFAULT_SIZE).fill(1).map(twitchUserCommonMock),
    currentlyActiveChannels: randNumber({ min: 10, max: 2500 }),
    // @ts-ignore
    time: new Date(new Date().getTime() - 60 * 1000 * randNumber({ min: 0, max: 30 })).getTime(),
});

export const overallStatsPlotsMock = (): OverallStatsPlots => {
    // @ts-ignore
    return new Array(24 * 2 * 30).fill(1).map((_, i) => {
        const time = new Date(new Date().getTime() - 60 * 1000 * 30 * i).getTime();
        return {
            totalMessages: {
                value: randNumber({ min: 10000 }),
                time,
            },
            totalChannels: {
                value: randNumber({ min: 10 }),
                time,
            },
            totalUsers: {
                value: randNumber({ min: 1000 }),
                time,
            },
            totalBans: {
                value: randNumber({ min: 100 }),
                time,
            },
            totalSubs: {
                value: randNumber({ min: 100 }),
                time,
            },
            periodActivity: {
                value: randNumber({ min: 10000, max: 200000 }),
                time,
            },
            mostActiveChannels: {
                value: new Array(MOST_DEFAULT_SIZE).fill(1).map(twitchUserCommonMock),
                time,
            },
            mostActiveUsers: {
                value: new Array(MOST_DEFAULT_SIZE).fill(1).map(twitchUserCommonMock),
                time,
            },
            mostSearchedUsers: {
                value: new Array(MOST_DEFAULT_SIZE).fill(1).map(twitchUserCommonMock),
                time,
            },
            mostBannedUsers: {
                value: new Array(MOST_DEFAULT_SIZE).fill(1).map(twitchUserCommonMock),
                time,
            },
            mostPatronUsers: {
                value: new Array(MOST_DEFAULT_SIZE).fill(1).map(twitchUserCommonMock),
                time,
            },
            currentlyActiveChannels: {
                value: randNumber({ min: 10, max: 2500 }),
                time,
            },
        };
    });
};
