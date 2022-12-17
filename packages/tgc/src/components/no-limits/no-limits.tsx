import { Plug } from 'platform-components';
import React from 'react';
import { useSelector } from 'react-redux';

import { getLimitsExpiryTimestamp } from '../../store/slices/settings';
import { getIsAuth } from '../../store/slices/user';

const NoLimits = () => {
    const firstRequest = useSelector(getLimitsExpiryTimestamp);
    const isAuth = useSelector(getIsAuth);

    return (
        <main className="center">
            <Plug expiryTimestamp={firstRequest} isAuth={isAuth} type={Plug.TYPE.LIMITS} />
        </main>
    );
};

export default NoLimits;
