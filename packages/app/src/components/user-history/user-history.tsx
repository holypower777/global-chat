import { useGetMessagesByNameQuery } from 'platform-apis';
import { Header, Spin, Tab, Tabs } from 'platform-components';
import { useWindowSize } from 'platform-components/src/hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import { clearChannelsState, setChannels } from '../../store/slices/channels';
import { clearMessages, setMessages } from '../../store/slices/messages';
import { clearUser, setMostActiveChannel, setTotalMessages, setUser } from '../../store/slices/twitch-user';
import { findMostFrequestChannel } from '../../utils';

import Channels from './channels/channels';
import Chat from './chat/chat';

import './user-history.scss';

const UserHistory = () => {
    const { username: usernameParam } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [skip, setSkip] = useState(usernameParam ? false : true);
    const [username, setUsername] = useState(usernameParam || '');
    const [activeTab, setActiveTab] = useState(0);
    const { data, isFetching } = useGetMessagesByNameQuery(username, { skip });
    const { width } = useWindowSize();

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

        navigate(username, { replace: true });
    };

    const handleChangeTab = (index: number) => (setActiveTab(index));

    if (width && width < 769) {
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
                        <Tabs activeTab={activeTab} setActiveTab={handleChangeTab}>
                            <Tab label="Channels" />
                            <Tab label="History" />
                        </Tabs>
                        <SwipeableViews
                            containerStyle={{ height: 'calc(100vh - 160px)' }}
                            index={activeTab}
                            onChangeIndex={handleChangeTab}
                        >
                            <Channels handlePickChannel={() => handleChangeTab(1)}/>
                            <Chat />
                        </SwipeableViews>
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
