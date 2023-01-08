import { randUuid, seed } from '@ngneat/falso';
import { decode } from 'jws';
import { Key, pathToRegexp } from 'path-to-regexp';

import { tgcUrl } from '../api-defs';
import { AccessToken } from '../types';

import endpointToMock from './endpointToMock';

interface UrlMatcher {
    keys: Array<Key>;
    regexp: RegExp;
}

function makeMatcher(makeRegexpFn: (arg: string) => UrlMatcher) {
    const cache: Record<string, UrlMatcher> = {};

    // obtains a cached regexp version of the pattern
    const getRegexp = (pattern: string) =>
        cache[pattern] || (cache[pattern] = makeRegexpFn(pattern));

    return (pattern: string, path: string) => {
        const { regexp, keys } = getRegexp(pattern || '');
        const out = regexp.exec(path);

        if (!out) {
            return [false, null];
        }

        // formats an object with matched params
        const params = keys.reduce((p: Record<string, unknown>, key, i) => {
            p[key.name] = out[i + 1];
            return p;
        }, {});

        return [true, params];
    };
}

const urlMatcher = makeMatcher((path: string) => {
    const keys: Array<Key> = [];
    const regexp = pathToRegexp(path, keys, { strict: true });
    return { keys, regexp };
});

const uuid = randUuid();
console.info(`mock seed: ${uuid}`);
seed(uuid);

const generateMock = (
    endpoint: string,
    url: string,
    body: Record<string, unknown>,
    accessToken: string | null
) => {
    const requiredMock = endpointToMock[endpoint];
    if (!requiredMock) {
        throw new Error('mock not found');
    }

    const combinedUrl = new URL(`${tgcUrl}${url}`);

    const [_, urlPath] = urlMatcher(requiredMock.matcher || '', combinedUrl.pathname.slice(1));

    if (urlPath === Object(urlPath)) {
        // @ts-ignore
        body = { ...body, ...urlPath };
    }

    if (accessToken) {
        const { payload } = decode(accessToken);
        body = { ...body, token: JSON.parse(payload) as AccessToken };
    }

    if (combinedUrl.search) {
        for (const [key, value] of combinedUrl.searchParams.entries()) {
            body[key] = value;
        }
    }

    return requiredMock.mock(body);
};

export default generateMock;
