import React, { useEffect } from 'react';

import { useAuthLogoutMutation, useGetTwitchUserQuery } from 'platform-apis';

const Home = () => {
    useGetTwitchUserQuery({ displayName: 'zalupa' });
    // useEffect(() => {
    //     if (logout) {
    //         logout({ userId: 1, refreshToken: 'kek' });
    //     }
    // }, [logout]);

    return <div>home</div>;
};

export default Home;
