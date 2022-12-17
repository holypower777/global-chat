import { useLazyGetUserByIdQuery } from 'platform-apis';
import { ChildrenProps } from 'platform-components/src/typings';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getAT, getUserIdFromAT } from '../../store/slices/settings';

const UserProvider = ({ children }: ChildrenProps) => {
    const accessToken = useSelector(getAT);
    const tokenUserId = useSelector(getUserIdFromAT);
    const [getUser] = useLazyGetUserByIdQuery();

    useEffect(() => {
        if (accessToken) {
            getUser({ userId: tokenUserId, token: accessToken! });
        }
    }, [accessToken]);

    return <>{children}</>;
};

export default UserProvider;
