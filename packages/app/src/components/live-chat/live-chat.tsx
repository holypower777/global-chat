import { DocumentData, DocumentSnapshot, Unsubscribe } from 'firebase/firestore';
import { SNACKBAR_TYPE, Tab, Tabs, WithSkeleton } from 'platform-components';
import { useWindowSize } from 'platform-components/src/hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

import { CommonHeader } from '../../common.components';
import { streamActualChannels } from '../../services/firestore';
import { getClient, hasActualChannels, setActualChannels } from '../../store/slices/live-chat';
import { addNotification } from '../../utils';

import LiveChatChannels from './__channels/live-chat__channels';
import LiveChatChat from './__chat/live-chat__chat';

import './live-chat.scss';

const LiveChat = () => {
    const dispatch = useDispatch();
    const client = useSelector(getClient);
    const hasChannels = useSelector(hasActualChannels);
    const [activeTab, setActiveTab] = useState(0);
    const [isConnected, setIsConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { width } = useWindowSize();

    const handleOnSnapshot = (doc: DocumentSnapshot<DocumentData>) => {
        if (doc.exists()) {
            if (doc.data().actual) {
                dispatch(setActualChannels(doc.data().actual));
                return;
            }
        }

        addNotification({
            id: 'notification.liveChat.snapshotError',
            autoHideDuration: 6000,
            type: SNACKBAR_TYPE.ERROR,
        }, dispatch);
    };

    const handleChangeTab = (index: number, indexLatest: number) => {
        if (indexLatest === undefined || indexLatest === 0) {
            setActiveTab(1);
            return;
        }
        setActiveTab(0);
    };

    useEffect(() => {
        let unsub: Unsubscribe;
        client.connect()
            .then(() => {
                setIsConnected(true);
                unsub = streamActualChannels(handleOnSnapshot);
            })
            .catch((err) => {
                addNotification({
                    id: 'notification.liveChat.connectError',
                    autoHideDuration: 6000,
                    type: SNACKBAR_TYPE.ERROR,
                }, dispatch);
                console.error('connecting ', err);
            });

        return () => {
            unsub();
            client.disconnect().catch((err) => {
                addNotification({
                    id: 'notification.liveChat.disconnectError',
                    autoHideDuration: 6000,
                    type: SNACKBAR_TYPE.ERROR,
                }, dispatch);
                console.error('disconnetig ', err);
            });
        };
    }, [client]);

    useEffect(() => {
        if (hasChannels && isConnected) {
            setIsLoading(false);
        }
    }, [isConnected, hasChannels]);

    if (width && width < 1281) {
        return (
            <>
                <CommonHeader />
                <main className="live-chat">
                    <Tabs activeTab={activeTab} setActiveTab={(index: number) => (setActiveTab(index))}>
                        <Tab label="Channels" />
                        <Tab label="Live chat" />
                    </Tabs>
                    <WithSkeleton isLoading={isLoading} variant={WithSkeleton.SKELETON_VARIANT.LIVE_CHAT}>
                        <SwipeableViews
                            containerStyle={{ height: 'calc(100vh - 160px)' }}
                            index={activeTab}
                            onChangeIndex={handleChangeTab}
                        >
                            <LiveChatChannels />
                            <LiveChatChat isActiveTab={activeTab === 1} />
                        </SwipeableViews>
                    </WithSkeleton>
                </main>
            </>
        );
    }

    return (
        <>
            <CommonHeader />
            <main className="live-chat">
                <WithSkeleton isLoading={isLoading} variant={WithSkeleton.SKELETON_VARIANT.LIVE_CHAT}>
                    <LiveChatChannels />
                    <LiveChatChat isActiveTab={true} />
                </WithSkeleton>
            </main>
        </>
    );
};

export default LiveChat;
