import { Header } from 'platform-components';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { clearChannelsState } from '../../store/slices/channels';
import { clearMessages, getIsMessagesFetching } from '../../store/slices/messages';
import { clearUser } from '../../store/slices/twitch-user';

const usernameRegexp = new RegExp(/^\w{0,24}$/);
const usernameSubmitRegexp = new RegExp(/^[a-zA-Z0-9][\w]{3,24}$/);

const CommonHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { username: usernameParam } = useParams();
    const [username, setUsername] = useState(usernameParam || '');
    const isMessagesFetching = useSelector(getIsMessagesFetching);

    const handleSubmit = () => {
        if (!username.match(usernameSubmitRegexp)) {
            //TODO: add error toast;
            return;
        }

        dispatch(clearUser());
        dispatch(clearChannelsState());
        dispatch(clearMessages());

        navigate(`/messages/${username}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.match(usernameRegexp)) {
            setUsername(e.target.value);
        }
    };

    return (
        <Header
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isMessagesFetching}
            value={username}
        />
    );
};

export default CommonHeader;
