import { randNumber, randBoolean } from '@ngneat/falso';

import { TwitchUser } from '../types';
import getRandomFromArray from '../utils/getRandomFromArray';
import randDisplayName from '../utils/randDisplayName';

const twitchUserBroadType = ['partner', 'affiliate', ''];
const twitchProfileImageUrls = [
    'https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-70x70.png',
    'https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-70x70.png',
    'https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-70x70.png',
    'https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-70x70.png',
    'https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-70x70.png',
];

interface TwitchUserMockArgs {
    displayName?: string;
    isSelf?: boolean;
}

export const twitchUserMock = ({ displayName, isSelf = false }: TwitchUserMockArgs): TwitchUser => {
    const broadcasterType = getRandomFromArray<'partner' | 'affiliate' | ''>(twitchUserBroadType);
    const username = displayName ?? randDisplayName();

    return {
        userId: randNumber({ min: 42061870, max: 406654859 }),
        displayName: username,
        profileImageUrl: getRandomFromArray(twitchProfileImageUrls),
        login: username.toLowerCase(),
        type: '',
        broadcasterType,
        viewCount: broadcasterType === '' ? 0 : randNumber({ min: 10 }),
        // @ts-ignore
        createdAt: randNumber({ min: 1672178527, max: 1672278527 }),
        isServiceUser: isSelf ? true : randBoolean(),
        isPaid: randBoolean(),
        isSelf,
        meta: {},
    };
};

export const twitchUsersMock = (length: number) => new Array(length).fill(0).map(twitchUserMock);
