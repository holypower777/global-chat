import b from 'b_';
import { useDeleteUserFavoriteMutation, usePostUserFavoriteMutation } from 'platform-apis';
import { UserCommonAPI } from 'platform-apis/types';
import { UserCard, Text, SETTINGS, SEARCH_TYPE, LINKS } from 'platform-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSelectedChannel } from '../../../store/slices/channels';
import { getMessagesDates } from '../../../store/slices/messages';
import { updateSetting } from '../../../store/slices/settings';
import { getMostActiveChannel, getTwitchUser } from '../../../store/slices/twitch-user';
import { getIsAuth, getIsFavorite, getUserId } from '../../../store/slices/user';
import { RootState } from '../../../store/store';

import ChatMessages from './__messages/chat__messages';

import './chat.scss';

const Chat = React.memo(() => {
    const dispatch = useDispatch();
    const isAuth = useSelector(getIsAuth);
    const twitchUser = useSelector(getTwitchUser);
    const mostActiveChannel = useSelector(getMostActiveChannel);
    const messagesDates = useSelector(getMessagesDates);
    const selectedChannel = useSelector(getSelectedChannel);
    const isFavorite = useSelector((state: RootState) => (getIsFavorite(state, twitchUser.userId)));
    const userId = useSelector(getUserId);
    const [postFavorite] = usePostUserFavoriteMutation();
    const [deleteFavorite] = useDeleteUserFavoriteMutation();

    const handleFavorite = (e: UserCommonAPI) => {
        if (isFavorite) {
            deleteFavorite({ userId, body: e });
        }

        if (!isFavorite) {
            postFavorite({ userId, body: e });
        }
    };

    return (
        <section className="chat">
            <UserCard
                handleFavorite={handleFavorite}
                heatmapDates={messagesDates}
                isAuth={isAuth}
                isFavorite={isFavorite}
                mostActiveChannel={mostActiveChannel}
                twitchUser={twitchUser}
                updateSettings={(key, value) => {
                    dispatch(updateSetting({ key, value }));
                }}
            />
            {selectedChannel && <Text id="chat.channelName" mix={b('chat', 'title')} size={Text.SIZE.XL}>
                <Link 
                    onClick={() => dispatch(updateSetting({ key: SETTINGS.USER_TYPE, value: SEARCH_TYPE.USERNAME }))}
                    to={`${LINKS.MESSAGES}/${selectedChannel.displayName}`}
                >
                    <Text mix={b('chat', 'title-channel')} size={Text.SIZE.XL}>{selectedChannel.displayName}</Text>
                </Link>
            </Text>}
            <ChatMessages />
        </section >
    );
});

export default Chat;
