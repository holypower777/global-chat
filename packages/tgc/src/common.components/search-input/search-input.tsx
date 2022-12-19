import { useLazyGetDisplayNameSuggestionsQuery } from 'platform-apis';
import { IconSearch, Input, LINKS, NOTIFICATIONS_DURATION, SNACKBAR_TYPE } from 'platform-components';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'wouter';

import { clearChannelsState } from '../../store/slices/channels';
import { clearMessages } from '../../store/slices/messages';
import { getUserTypeSetting } from '../../store/slices/settings';
import {
    clearSuggestions, clearTwitchUser,
    getIsSuggestionsLoading,
    getIsTwitchUserFetching,
    getSuggestions,
} from '../../store/slices/twitch-user';
import { getIsAuth } from '../../store/slices/user';
import { addNotification, isValidSearchChange, isValidSearchSubmit } from '../../utils';

import SearchInputSuggestions from './__suggestions/search-input__suggestions';

const SearchInput = () => {
    const dispatch = useDispatch();
    const [usernameParam] = useState('');
    const isAuth = useSelector(getIsAuth);

    const intl = useIntl();
    const [location, navigate] = useLocation();

    const suggestions = useSelector(getSuggestions);
    const isSuggestionsLoading = useSelector(getIsSuggestionsLoading);

    const isSearchingUser = useSelector(getIsTwitchUserFetching);

    const [typingTimer, setTypingTimer] = useState<NodeJS.Timeout | null>(null);
    const [username, setUsername] = useState(usernameParam || '');
    const userType = useSelector(getUserTypeSetting);

    const [fetchSuggestions] = useLazyGetDisplayNameSuggestionsQuery();

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
        <div>
            <Input
                disabled={!isAuth && !isSearchingUser}
                fullWidth={true}
                handleChange={handleChange}
                handleEnterPress={handleSubmit}
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
                icon={<IconSearch/>}
                name="user-search"
                placeholder={intl.formatMessage({ id: `search.inputPlaceholder ${!isAuth && '.userNotAuthorized'}` })}
                value={username}
            />
            <SearchInputSuggestions handleOnClick={handleSelect} isDropdownLoading={isSuggestionsLoading} items={suggestions} />
        </div>
    );
};

export default SearchInput;
