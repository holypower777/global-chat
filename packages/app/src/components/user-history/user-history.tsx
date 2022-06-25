import { useGetTwitchUserWithChannelsByUsernameQuery, usePostSearchHistoryMutation } from 'platform-apis';
import { useGetRandomTwitchUserQuery } from 'platform-apis/slices/twitch-users';
import { convertCommonUserToAPI } from 'platform-apis/types';
import { FROM_PAGE, LINKS, SEARCH_PARAMS, SEARCH_TYPE, SETTINGS, SNACKBAR_TYPE, Spin, Tab, Tabs } from 'platform-components';
import { useWindowSize } from 'platform-components/src/hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import { CommonHeader } from '../../common.components';
import { setChannels, setSelectedChannel } from '../../store/slices/channels';
import { setMessagesDates } from '../../store/slices/messages';
import { removeNotification, updateNotificationLoadingState } from '../../store/slices/notifications';
import { getUserTypeSetting, updateSetting } from '../../store/slices/settings';
import { setIsUserWithChannelsFetching, setMostActiveChannel, setTwitchUser } from '../../store/slices/twitch-user';
import { getUserId } from '../../store/slices/user';
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
    const userId = useSelector(getUserId);
    const [skip, setSkip] = useState(true);
    const [rSkip, setRSkip] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    const { data, isFetching } = useGetTwitchUserWithChannelsByUsernameQuery({ username: username!, type: userType }, { skip });
    const { data: randomUser, isFetching: isRandomUserFetching } = useGetRandomTwitchUserQuery(null, { skip: rSkip });
    const { width } = useWindowSize();
    const [notificationKey, setNotificationKey] = useState(0);
    const [postHistory] = usePostSearchHistoryMutation();
    const audio = new Audio('https://www.myinstants.com/media/sounds/im-a-gnome-meme-sound-effect-woo.mp3');

    useEffect(() => {
        if (!searchParams.get(SEARCH_PARAMS.FROM)) {
            dispatch(removeNotification(notificationKey));
        }

        if (searchParams.get(SEARCH_PARAMS.FROM) === FROM_PAGE.RANDOM_USER) {
            const key = addNotification({
                type: SNACKBAR_TYPE.TWITCH,
                id: 'notification.userHistory.nextRandom',
                handleClick: () => (!isRandomUserFetching && setRSkip(false)),
                clickable: true,
            }, dispatch);
            setNotificationKey(key);
        }
    }, [searchParams]);

    useEffect(() => {
        return () => {
            dispatch(removeNotification(notificationKey));
        };
    }, [notificationKey]);

    useEffect(() => {
        dispatch(updateNotificationLoadingState({ key: notificationKey, isLoading: isRandomUserFetching }));
    }, [isRandomUserFetching]);

    useEffect(() => {
        if (randomUser) {
            dispatch(updateSetting({ key: SETTINGS.USER_TYPE, value: SEARCH_TYPE.USERNAME }));
            navigate(`${LINKS.MESSAGES}/${randomUser.displayName}?from=${FROM_PAGE.RANDOM_USER}`);
            setRSkip(true);
        }
    }, [randomUser]);

    useEffect(() => {
        if (data) {
            dispatch(setTwitchUser(data.user));
            dispatch(setMostActiveChannel(findMostFrequestChannel(data.channels)));
            dispatch(setChannels(data.channels));
            dispatch(setMessagesDates(data.messagesDates));
            if (userId !== 0) {
                postHistory({
                    userId,
                    body: convertCommonUserToAPI({
                        userId: data.user.userId,
                        displayName: data.user.displayName,
                        profileImageUrl: data.user.profileImageUrl,
                    }),
                });
            }
            setSkip(true);
            if (data.user.userId === 115141884) {
                audio.play();
            }
        }
    }, [data]);

    useEffect(() => {
        dispatch(setIsUserWithChannelsFetching(isFetching));
    }, [isFetching]);

    useEffect(() => {
        if (username) {
            document.title = username;
            dispatch(setSelectedChannel(null));
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
