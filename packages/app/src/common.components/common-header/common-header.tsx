import { useAuthLogoutMutation, useDeleteUserFavoriteMutation, useGetDisplayNameSuggestionsQuery } from 'platform-apis';
import { Header, LINKS, SNACKBAR_TYPE } from 'platform-components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { clearChannelsState } from '../../store/slices/channels';
import { clearMessages } from '../../store/slices/messages';
import { getRT, getUserTypeSetting, updateSetting } from '../../store/slices/settings';
import { clearTwitchUser, getIsUserFetching } from '../../store/slices/twitch-user';
import { getUser } from '../../store/slices/user';
import { addNotification, isValidSearchChange, isValidSearchSubmit } from '../../utils';

const CommonHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { username: usernameParam } = useParams();
    const [typingTimer, setTypingTimer] = useState<NodeJS.Timeout | null>(null);
    const [username, setUsername] = useState(usernameParam || '');
    const [suggestions, setSuggestions] = useState<Array<string>>([]);
    const isUserFetching = useSelector(getIsUserFetching);
    const userType = useSelector(getUserTypeSetting);
    const user = useSelector(getUser);
    const refreshToken = useSelector(getRT);
    const [skip, setSkip] = useState(true);
    const { data, isFetching } = useGetDisplayNameSuggestionsQuery({ username }, { skip });
    const [logout] = useAuthLogoutMutation();
    const [deleteFavorite] = useDeleteUserFavoriteMutation();

    useEffect(() => {
        if (data && data.length) {
            setSuggestions(data);
            setSkip(true);
        }
    }, [data]);

    useEffect(() => {
        if (!isValidSearchSubmit(userType, username)) {
            setUsername('');
        }
    }, [userType]);

    useEffect(() => {
        if (usernameParam) {
            setUsername(usernameParam);
        }
    }, [usernameParam]);

    const handleSubmit = (displayName: string | null = null) => {
        const searchName = displayName || username;

        if (typingTimer) {
            clearTimeout(typingTimer);
        }

        if (!isValidSearchSubmit(userType, searchName)) {
            addNotification({
                id: `notification.searchInput.${userType}.submit`,
                type: SNACKBAR_TYPE.ERROR,
                autoHideDuration: 4000,
            }, dispatch);
            return;
        }

        if (searchName === usernameParam) {
            setUsername(searchName);
            return;
        }

        dispatch(clearTwitchUser());
        dispatch(clearChannelsState());
        dispatch(clearMessages());
        setSuggestions([]);

        navigate(`${LINKS.MESSAGES}/${searchName}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValidSearchChange(userType, e.target.value)) {
            addNotification({
                id: `notification.searchInput.${userType}`,
                type: SNACKBAR_TYPE.WARNING,
                autoHideDuration: 4000,
            }, dispatch);
            return;
        }

        if (e.target.value.length <= 2) {
            setSuggestions([]);
        }

        setUsername(e.target.value);
    };

    const handleSelect = (displayName: string) => {
        handleSubmit(displayName);
        setSuggestions([]);
    };

    return (
        <Header
            handleChange={handleChange}
            handleKeyDown={() => {
                if (typingTimer) {
                    clearTimeout(typingTimer);
                }
            }}
            handleKeyUp={() => {
                if (typingTimer) {
                    clearTimeout(typingTimer);
                }
                const id = setTimeout(() => {
                    if (username.length > 2) {
                        setSkip(false);
                        setSuggestions([]);
                    }
                }, 500);

                setTypingTimer(id);
            }}
            handleLogout={() => logout({
                body: { // eslint-disable-next-line camelcase
                    user_id: user.userId, // eslint-disable-next-line camelcase
                    refresh_token: refreshToken || '',
                },
            })}
            handleRemoveFavorite={(e) => {
                deleteFavorite({
                    userId: user.userId,
                    body: e,
                });
            }}
            handleSelect={handleSelect}
            handleSubmit={handleSubmit}
            isLoading={isUserFetching}
            isSuggestionsLoading={isFetching}
            suggestions={suggestions}
            updateSettings={(key, value) => dispatch(updateSetting({ key, value }))}
            user={user}
            value={username}
        />
    );
};

export default CommonHeader;
