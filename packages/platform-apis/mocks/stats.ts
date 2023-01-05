import { randNumber } from '@ngneat/falso';

import { DailyStats } from '../types';

export const dailyStatsMock = (): DailyStats => ({
    totalMessages: randNumber({ min: 10000 }),
    messagesPerDay: randNumber({ min: 10000, max: 25000 }),
    totalUsers: randNumber({ min: 1000 }),
    usersPerDay: randNumber({ min: 100, max: 250 }),
    totalBans: randNumber({ min: 100 }),
    bansPerDay: randNumber({ min: 100, max: 1000 }),
    totalSubs: randNumber({ min: 100 }),
    subsPerDay: randNumber({ min: 10, max: 1000 }),
    giftedSubsPerDay: randNumber({ min: 10, max: 300 }),
    currentlyActiveChannels: randNumber({ min: 10, max: 2500 }),
});
