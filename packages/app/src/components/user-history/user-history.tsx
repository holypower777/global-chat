import { useLazyGetRandomTwitchUserQuery, useLazyGetTwitchUserWithChannelsByUsernameQuery } from 'platform-apis';
import { BackendErrorResponse } from 'platform-apis/types';
import { BACKEND_ERROR, FROM_PAGE, LINKS, Plug, SEARCH_PARAMS, SNACKBAR_TYPE, Spin, Tab, Tabs } from 'platform-components';
import { useWindowSize } from 'platform-components/src/hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import { removeNotification, updateNotificationLoadingState } from '../../store/slices/notifications';
import { getUserTypeSetting } from '../../store/slices/settings';
import { getIsTwitchUserFetching } from '../../store/slices/twitch-user';
import { addNotification } from '../../utils';

import Channels from './channels/channels';
import Chat from './chat/chat';

import './user-history.scss';

const UserHistory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username } = useParams();
    const [searchParams] = useSearchParams();
    const { width } = useWindowSize();

    const userType = useSelector(getUserTypeSetting);
    const isTwitchUserFetching = useSelector(getIsTwitchUserFetching);

    const [activeTab, setActiveTab] = useState(0);
    const [notificationKey, setNotificationKey] = useState(0);
    
    const [fetchTwitchUser, { error }] = useLazyGetTwitchUserWithChannelsByUsernameQuery();
    const [fetchRandomUser, { data: randomUser, isFetching: isRandomUserFetching }] = useLazyGetRandomTwitchUserQuery();

    useEffect(() => {
        if (!searchParams.get(SEARCH_PARAMS.FROM)) {
            dispatch(removeNotification(notificationKey));
        }

        if (searchParams.get(SEARCH_PARAMS.FROM) === FROM_PAGE.RANDOM_USER) {
            const key = addNotification({
                type: SNACKBAR_TYPE.TWITCH,
                id: 'notification.userHistory.nextRandom',
                handleClick: () => (!isRandomUserFetching && fetchRandomUser()),
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
            navigate(`${LINKS.MESSAGES}/${randomUser.displayName}?from=${FROM_PAGE.RANDOM_USER}`);
        }
    }, [randomUser]);

    useEffect(() => {
        if (username) {
            fetchTwitchUser({ username, type: userType });
        }
    }, [username]);

    const handleChangeTab = (index: number) => (setActiveTab(index));

    if (error) {
        //@ts-ignore
        const intlId = (error.data as BackendErrorResponse).error.intlId;

        if (intlId === BACKEND_ERROR.USER_HIDDEN) {
            return (
                <main className="user-history__error">
                    <Plug type={Plug.TYPE.DONATION} />
                </main>
            );
        }
    }

    if (width && width < 769) {
        return (
            <main className="user-history">
                {isTwitchUserFetching && <Spin center size={Spin.SIZE.L} />}
                {!isTwitchUserFetching && <>
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
                        <Channels handlePickChannel={() => handleChangeTab(1)} />
                        <Chat />
                    </SwipeableViews>
                </>}
            </main>
        );
    }

    return (
        <main className="user-history">
            {isTwitchUserFetching && <Spin center size={Spin.SIZE.L} />}
            {!isTwitchUserFetching && <>
                <Channels />
                <Chat />
            </>}
        </main>
    );
};

export default UserHistory;
