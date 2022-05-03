import { useGetTwitchUserWithChannelsByUsernameQuery } from 'platform-apis';
import { useGetRandomTwitchUserQuery } from 'platform-apis/slices/twitch-users';
import { FROM_PAGE, SEARCH_TYPE, SETTINGS, SNACKBAR_TYPE, Spin, Tab, Tabs } from 'platform-components';
import { useWindowSize } from 'platform-components/src/hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import { CommonHeader } from '../../common.components';
import { setChannels } from '../../store/slices/channels';
import { setMessagesDates } from '../../store/slices/messages';
import { removeNotification, updateNotificationLoadingState } from '../../store/slices/notifications';
import { getUserTypeSetting, updateSetting } from '../../store/slices/settings';
import { setIsUserWithChannelsFetching, setMostActiveChannel, setUser } from '../../store/slices/twitch-user';
import { addNotification, findMostFrequestChannel } from '../../utils';

import Channels from './channels/channels';
import Chat from './chat/chat';

import './user-history.scss';

const UserHistory = () => {
    const navigate = useNavigate();
    const { username } = useParams();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const userType = useSelector(getUserTypeSetting);
    const [skip, setSkip] = useState(true);
    const [rSkip, setRSkip] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    const { data, isFetching } = useGetTwitchUserWithChannelsByUsernameQuery({ username: username!, type: userType }, { skip });
    const { data: randomUser, isFetching: isRandomUserFetching } = useGetRandomTwitchUserQuery(null, { skip: rSkip });
    const { width } = useWindowSize();
    const [notificationKey, setNotificationKey] = useState(0);

    useEffect(() => {
        if (!searchParams.get('from')) {
            dispatch(removeNotification(notificationKey));
        }

        if (searchParams.get('from') === FROM_PAGE.RANDOM_USER) {
            const key = addNotification({
                type: SNACKBAR_TYPE.INFO,
                id: 'notification.userHistory.nextRandom',
                handleClick: () => (!isRandomUserFetching && setRSkip(false)),
                clickable: true,
            }, dispatch);
            setNotificationKey(key);
        }

        return () => {
            dispatch(removeNotification(notificationKey));
        };
    }, [searchParams]);

    useEffect(() => {
        dispatch(updateNotificationLoadingState({ key: notificationKey, isLoading: isRandomUserFetching }));
    }, [isRandomUserFetching]);

    useEffect(() => {
        if (randomUser) {
            dispatch(updateSetting({ key: SETTINGS.USER_TYPE, value: SEARCH_TYPE.USERNAME }));
            navigate(`/messages/${randomUser.displayName}?from=${FROM_PAGE.RANDOM_USER}`);
            setRSkip(true);
        }
    }, [randomUser]);

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
