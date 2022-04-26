import { Header, SNACKBAR_TYPE } from 'platform-components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { clearChannelsState } from '../../store/slices/channels';
import { clearMessages } from '../../store/slices/messages';
import { getUserTypeSetting, updateSetting } from '../../store/slices/settings';
import { clearUser, getIsUserFetching } from '../../store/slices/twitch-user';
import { addNotification, isValidSearchChange, isValidSearchSubmit } from '../../utils';

const CommonHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { username: usernameParam } = useParams();
    const [username, setUsername] = useState(usernameParam || '');
    const isUserFetching = useSelector(getIsUserFetching);
    const userType = useSelector(getUserTypeSetting);

    useEffect(() => {
        if (!isValidSearchSubmit(userType, username)) {
            setUsername('');
        }
    }, [userType]);

    useEffect(() => {
        if (usernameParam) {
            setUsername(usernameParam);
        }
    }, [usernameParam]);

    const handleSubmit = () => {
        if (!isValidSearchSubmit(userType, username)) {
            addNotification({
                id: `notification.searchInput.${userType}.submit`,
                type: SNACKBAR_TYPE.ERROR,
                autoHideDuration: 4000,
            }, dispatch);
            return;
        }

        dispatch(clearUser());
        dispatch(clearChannelsState());
        dispatch(clearMessages());

        navigate(`/messages/${username}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValidSearchChange(userType, e.target.value)) {
            addNotification({
                id: `notification.searchInput.${userType}`,
                type: SNACKBAR_TYPE.WARNING,
                autoHideDuration: 4000,
            }, dispatch);
            return;
        }
        setUsername(e.target.value);
    };

    return (
        <Header
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isUserFetching}
            updateSettings={(key, value) => dispatch(updateSetting({ key, value }))}
            value={username}
        />
    );
};

export default CommonHeader;
