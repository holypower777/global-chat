import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ChildrenProps } from 'platform-components/src/typings';

import { useLazyGetUserByIdQuery } from 'platform-apis';

import { getAT, getUserIdFromAT } from '../../store/slices/settings';

const UserProvider = ({ children }: ChildrenProps) => {
    const accessToken = useSelector(getAT);
    const tokenUserId = useSelector(getUserIdFromAT);
    const [getUser] = useLazyGetUserByIdQuery();

    useEffect(() => {
        if (accessToken) {
            getUser({ userId: tokenUserId });
        }
    }, [accessToken]);

    return <>{children}</>;
};

export default UserProvider;
