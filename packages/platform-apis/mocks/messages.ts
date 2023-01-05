import { randNumber, randTextRange, randUuid } from '@ngneat/falso';

import { TwitchMessage } from '../types';
import randUserId from '../utils/randUserId';

interface TwitchMessageMockArgs {
    userId?: number;
    channelId?: number;
    sort?: 'asc' | 'desc';
}

const twitchMessageMock = ({
    userId = randUserId(),
    channelId = randUserId(),
}: TwitchMessageMockArgs): TwitchMessage => {
    return {
        messageId: randUuid(),
        userId,
        channelId,
        message: randTextRange({ min: 1, max: 300 }),
        // @ts-ignore
        time: randNumber({ min: 1672178527, max: 1672278527 }),
        badges: '',
        replyMsgId: '',
        replyUserId: 0,
        replyUserLogin: '',
        replyDisplayName: '',
        replyMsgBody: '',
        meta: {},
    };
};

export const twitchMessagesMock = (length: number, args?: TwitchMessageMockArgs) =>
    new Array(length)
        .fill(0)
        .map(() => twitchMessageMock(args || {}))
        // @ts-ignore
        .sort((a, b) => (args?.sort === 'asc' ? b.time - a.time : a.time - b.time));
