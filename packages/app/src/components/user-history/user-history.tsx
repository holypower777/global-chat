import { useGetMessagesByNameQuery } from 'platform-apis';
import { Header, Spin, Tab, Tabs } from 'platform-components';
import { useWindowSize } from 'platform-components/src/hooks';
import React, { useEffect, useState, TouchEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { clearChannelsState, setChannels } from '../../store/slices/channels';
import { clearMessages, setMessages } from '../../store/slices/messages';
import { clearUser, setMostActiveChannel, setTotalMessages, setUser } from '../../store/slices/twitch-user';
import { findMostFrequestChannel } from '../../utils';

import Channels from './channels/channels';
import Chat from './chat/chat';

import './user-history.scss';

const UserHistory = () => {
    const { username: usernameParam } = useParams();
    const dispatch = useDispatch();
    const [skip, setSkip] = useState(usernameParam ? false : true);
    const [username, setUsername] = useState(usernameParam || '');
    const [activeTab, setActiveTab] = useState('Channels');
    const { data, isFetching } = useGetMessagesByNameQuery(username, { skip });
    const { width } = useWindowSize();
    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);

    function handleTouchStart(e: TouchEvent<HTMLButtonElement>) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e: TouchEvent<HTMLButtonElement>) {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    function handleTouchEnd() {
        if (touchStart - touchEnd > 120) {
            setActiveTab('History');
        }

        if (touchStart - touchEnd < -120) {
            setActiveTab('Channels');
        }
    }

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
        if (username.length < 2) {
            return;
        }
        dispatch(clearUser());
        dispatch(clearChannelsState());
        dispatch(clearMessages());
        setSkip(false);
    };

    if (width && width < 769) {
        return (
            <>
                <Header
                    handleChange={(e) => setUsername(e.target.value)}
                    handleSubmit={handleSubmit}
                    isLoading={isFetching}
                    value={username}
                />
                <main className="user-history" onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart}>
                    {isFetching && <Spin center size={Spin.SIZE.L} />}
                    {data && !isFetching && <>
                        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
                            <Tab label="Channels" />
                            <Tab label="History" />
                        </Tabs>
                        {activeTab === 'Channels' && <Channels />}
                        {activeTab === 'History' && <Chat />}
                    </>}
                </main>
            </>
        );
    }

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
