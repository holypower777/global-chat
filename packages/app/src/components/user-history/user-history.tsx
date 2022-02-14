import { useGetMessagesByNameQuery } from 'platform-apis';
import { Header, Spin } from 'platform-components';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { clearChannelsState, setChannels } from '../../store/slices/channels';
import { clearMessages, setMessages } from '../../store/slices/messages';
import { clearUser, setMostActiveChannel, setTotalMessages, setUser } from '../../store/slices/twitch-user';
import { findMostFrequestChannel } from '../../utils';

import Channels from './channels/channels';
import Chat from './chat/chat';

import './user-history.scss';

const UserHistory = () => {
    const dispatch = useDispatch();
    const [skip, setSkip] = useState(true);
    const [username, setUsername] = useState('');
    const { data, isFetching } = useGetMessagesByNameQuery(username, { skip });

    useEffect(() => {
        if (data) {
            dispatch(setUser(data.user));
            dispatch(setTotalMessages(data.messages.length));
            dispatch(setMostActiveChannel(findMostFrequestChannel(data.messages)));
            dispatch(setChannels(data.channels));
            dispatch(setMessages(data.messages));
            setSkip(true);
        }
    }, [data]);

    const handleSubmit = () => {
        dispatch(clearUser());
        dispatch(clearChannelsState());
        dispatch(clearMessages());
        setSkip(false);
    };

    return (
        <>
            <Header
                handleChange={(e) => setUsername(e.target.value)}
                handleSubmit={handleSubmit}
                isLoading={isFetching}
                value={username}
            />
            <main className="user-history">
                {isFetching && <Spin center size={Spin.SIZE.L} />}
                {data && !isFetching && <>
                    <Channels />
                    <Chat />
                </>}
            </main>
        </>
    );
};

export default UserHistory;
