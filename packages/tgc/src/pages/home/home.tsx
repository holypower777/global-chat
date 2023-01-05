import React, { useEffect } from 'react';

import {
    useAuthLogoutMutation,
    useGetTwitchUserQuery,
    useLazyGetMessagesByUserIdAndChannelIdQuery,
} from 'platform-apis';

const Home = () => {
    // useGetTwitchUserQuery({ displayName: 'zalupa' });
    const [get] = useLazyGetMessagesByUserIdAndChannelIdQuery();
    const [logout] = useAuthLogoutMutation();
    useEffect(() => {
        if (get) {
            // logout({ userId: 1, refreshToken: 'kek' });
            get({ userId: 1, channelId: 1 });
        }
    }, [get]);

    return <div>home</div>;
};

export default Home;
