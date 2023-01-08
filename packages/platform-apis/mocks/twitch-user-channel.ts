import { randNumber, randBoolean } from '@ngneat/falso';

import { TwitchUserChannel, TwitchUserChannelStats } from '../types';
import randUserId from '../utils/randUserId';

import { twitchUserCommonMock } from './twitch-user';

export const twitchUserChannelMock = (): TwitchUserChannel => ({
    ...twitchUserCommonMock(),
    msgsAmount: randNumber({ min: 10, max: 3000 }),
    // @ts-ignore
    firstMsgDate: randNumber({ min: 1672078527, max: 1672178527 }),
    // @ts-ignore
    lastMsgDate: randNumber({ min: 1672178528, max: 1672278527 }),
    isBanned: randBoolean(),
    isServiceUser: randBoolean(),
    isPaid: randBoolean(),
    isSelf: randBoolean(),
    isSub: randBoolean(),
});

interface TwitchUserStatsMockArgs {
    channelId?: number;
}

export const twitchUserChannelStatsMock = ({
    channelId,
}: TwitchUserStatsMockArgs): TwitchUserChannelStats => ({
    channelId: channelId ?? randUserId(),
    messagesAmount: randNumber({ min: 1000, max: 200000 }),
    totalBans: randNumber({ min: 10, max: 1000 }),
    totalMutes: randNumber({ min: 100, max: 10000 }),
    totalSubs: randNumber({ min: 10, max: 300 }),
    totalGiftedSubs: randNumber({ min: 0, max: 150 }),
    topChatters: new Array(5).fill(1).map(twitchUserCommonMock),
});
