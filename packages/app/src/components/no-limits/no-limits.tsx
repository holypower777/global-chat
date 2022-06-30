import { Plug } from 'platform-components';
import React from 'react';
import { useSelector } from 'react-redux';

import { getLimitsExpiryTimestamp } from '../../store/slices/settings';

const NoLimits = () => {
    const firstRequest = useSelector(getLimitsExpiryTimestamp);

    return (
        <main className="center">
            <Plug expiryTimestamp={firstRequest} type={Plug.TYPE.LIMITS} />
        </main>
    );
};

export default NoLimits;
