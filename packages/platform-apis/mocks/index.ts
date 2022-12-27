import twitchUserMock from './twitch-user';

interface RequestBody {
    user_id?: number;
    refresh_token?: string;
}

const endpointToMock: Record<string, (...args: Array<unknown>) => unknown> = {
    getTwitchUser: twitchUserMock,
    authLogout: twitchUserMock,
};

const generateMock = (endpoint: string, url: string, body: RequestBody | null) => {
    const requiredMock = endpointToMock[endpoint];
    if (!requiredMock) {
        // ?
        return;
    }

    return requiredMock(url, body);
};

export default generateMock;
