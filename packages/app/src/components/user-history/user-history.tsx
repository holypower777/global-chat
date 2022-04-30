import { useGetTwitchUserWithChannelsByUsernameQuery } from 'platform-apis';
import { Spin, Tab, Tabs } from 'platform-components';
import { useWindowSize } from 'platform-components/src/hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import { CommonHeader } from '../../common.components';
import { setChannels } from '../../store/slices/channels';
import { setMessagesDates } from '../../store/slices/messages';
import { getUserTypeSetting } from '../../store/slices/settings';
import { setIsUserWithChannelsFetching, setMostActiveChannel, setUser } from '../../store/slices/twitch-user';
import { findMostFrequestChannel } from '../../utils';

import Channels from './channels/channels';
import Chat from './chat/chat';

import './user-history.scss';

const UserHistory = () => {
    const { username } = useParams();
    const dispatch = useDispatch();
    const userType = useSelector(getUserTypeSetting);
    const [skip, setSkip] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    const { data, isFetching } = useGetTwitchUserWithChannelsByUsernameQuery({ username: username!, type: userType }, { skip });
    const { width } = useWindowSize();

    useEffect(() => {
        if (data) {
            dispatch(setUser(data.user));
            dispatch(setMostActiveChannel(findMostFrequestChannel(data.channels)));
            dispatch(setChannels(data.channels));
            dispatch(setMessagesDates(data.messagesDates));
            setSkip(true);
        }
    }, [data]);

    useEffect(() => {
        dispatch(setIsUserWithChannelsFetching(isFetching));
    }, [isFetching]);

    useEffect(() => {
        if (username) {
            document.title = username;
            setSkip(false);
        }
    }, [username]);

    const handleChangeTab = (index: number) => (setActiveTab(index));

    if (width && width < 769) {
        return (
            <>
                <CommonHeader />
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
                            resistance={true}
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
            <CommonHeader />
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
