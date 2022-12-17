import { useAuthLogoutMutation, useDeleteUserFavoriteMutation, useLazyGetDisplayNameSuggestionsQuery } from 'platform-apis';
import { Header, LINKS, NOTIFICATIONS_DURATION, SNACKBAR_TYPE } from 'platform-components';
import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'wouter';

import { clearChannelsState } from '../../store/slices/channels';
import { clearMessages } from '../../store/slices/messages';
import { getRT, getUserTypeSetting, updateSetting } from '../../store/slices/settings';
import { clearSuggestions, clearTwitchUser, getIsSuggestionsLoading, getIsTwitchUserFetching, getSuggestions } from '../../store/slices/twitch-user';
import { getUser } from '../../store/slices/user';
import { addNotification, isValidSearchChange, isValidSearchSubmit } from '../../utils';

const CommonHeader = () => {
    const [location, navigate] = useLocation();
    const dispatch = useDispatch();
    const [usernameParam] = useState('');
    
    const suggestions = useSelector(getSuggestions);
    const isSuggestionsLoading = useSelector(getIsSuggestionsLoading);
    const isUserFetching = useSelector(getIsTwitchUserFetching);
    const userType = useSelector(getUserTypeSetting);
    const user = useSelector(getUser);
    const refreshToken = useSelector(getRT);

    const [typingTimer, setTypingTimer] = useState<NodeJS.Timeout | null>(null);
    const [username, setUsername] = useState(usernameParam || '');

    const [fetchSuggestions] = useLazyGetDisplayNameSuggestionsQuery();
    const [logout] = useAuthLogoutMutation();
    const [deleteFavorite] = useDeleteUserFavoriteMutation();

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
                autoHideDuration: NOTIFICATIONS_DURATION.S,
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
        dispatch(clearSuggestions());

        navigate(`${LINKS.MESSAGES}/${searchName}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValidSearchChange(userType, e.target.value)) {
            addNotification({
                id: `notification.searchInput.${userType}`,
                type: SNACKBAR_TYPE.WARNING,
                autoHideDuration: NOTIFICATIONS_DURATION.S,
            }, dispatch);
            return;
        }

        if (e.target.value.length <= 2) {
            dispatch(clearSuggestions());
        }

        setUsername(e.target.value);
    };

    const handleSelect = (displayName: string) => {
        handleSubmit(displayName);
        dispatch(clearSuggestions());
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
                        fetchSuggestions({ username });
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
            isSuggestionsLoading={isSuggestionsLoading}
            suggestions={suggestions}
            updateSettings={(key, value) => dispatch(updateSetting({ key, value }))}
            user={user}
            value={username}
        />
    );
};

const withHeader = (component: ReactNode | Array<ReactNode>) => {
    return (
        <>
            <CommonHeader />
            {component}
        </>
    );
};

export default withHeader;
