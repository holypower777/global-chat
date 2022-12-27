import { randNumber, randUrl, randPastDate, randBoolean } from '@ngneat/falso';

import { TwitchUser } from '../types';
import getRandomFromArray from '../utils/getRandomFromArray';

const twitchUserBroadType = ['parnet', 'affiliate', ''];

interface mockTwitchUserArgs {
    displayName: string;
    isSelf?: boolean;
    isPartner?: boolean;
}

const twitchUserMock = ({
    displayName,
    isSelf = false,
    isPartner = false,
}: mockTwitchUserArgs): TwitchUser => {
    return {
        userId: randNumber({ min: 42061870, max: 406654859 }),
        displayName,
        profileImageUrl: randUrl(),
        login: displayName.toLowerCase(),
        type: '',
        broadcasterType: isPartner ? 'partner' : getRandomFromArray(twitchUserBroadType),
        viewCount: randNumber({ min: 0 }),
        createdAt: randPastDate(),
        isServiceUser: randBoolean(),
        isPaid: randBoolean(),
        isSelf,
        meta: {},
    };
};

export default twitchUserMock;
