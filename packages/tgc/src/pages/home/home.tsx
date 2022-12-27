import React, { useEffect } from 'react';

import { useAuthLogoutMutation } from 'platform-apis';

const Home = () => {
    const [logout] = useAuthLogoutMutation();
    useEffect(() => {
        if (logout) {
            logout({ userId: 1, refreshToken: 'kek' });
        }
    }, [logout]);

    return <div>home</div>;
};

export default Home;
