import { randNumber } from '@ngneat/falso';

import { User } from '../types';
import getRandomFromArray from '../utils/getRandomFromArray';

import { twitchProfileImageUrls } from './twitch-user';

interface UserMockArgs {
    displayName: string;
    userId: number;
    paidTier: 0 | 1 | 2 | 3 | 4;
}

export const userMock = ({ displayName, userId, paidTier }: UserMockArgs): User => ({
    twitchUserId: userId,
    displayName,
    profileImageUrl: getRandomFromArray(twitchProfileImageUrls),
    favorites: [],
    searchHistory: [],
    paidTier,
    // @ts-ignore
    paidUntil: new Date(new Date().getTime() + 60 * 1000 * 25).getTime(),
    // @ts-ignore
    joinedAt: randNumber({ min: 1672178527, max: 1672278527 }),
    meta: {},
});
