import { useGetUserByIdQuery } from 'platform-apis';
import { ChildrenProps } from 'platform-components/src/typings';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAT, getUserIdFromAT } from '../../store/slices/settings';
import { getUserId, setUser } from '../../store/slices/user';

const UserProvider = ({ children }: ChildrenProps) => {
    const dispatch = useDispatch();
    const accessToken = useSelector(getAT);
    const tokenUserId = useSelector(getUserIdFromAT);
    const userId = useSelector(getUserId);
    const [skip, setSkip] = useState(true);
    const { data } = useGetUserByIdQuery({ userId: tokenUserId }, { skip });

    useEffect(() => {
        if (data) {
            dispatch(setUser(data));
        }
    }, [data]);

    useEffect(() => {
        if (accessToken && userId !== 0) {
            setSkip(false);
        }
    }, [accessToken, userId]);

    return <>{children}</>;
};

export default UserProvider;
