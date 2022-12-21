import { useLazyGetDisplayNameSuggestionsQuery } from 'platform-apis';
import { IconSearch, Input, LINKS, NOTIFICATIONS_DURATION, SNACKBAR_TYPE } from 'platform-components';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'wouter';

import { clearChannelsState } from '../../store/slices/channels';
import { clearMessages } from '../../store/slices/messages';
import {
    clearSuggestions, clearTwitchUser,
    getIsSuggestionsLoading,
    getIsTwitchUserFetching,
    getSuggestions,
} from '../../store/slices/twitch-user';
import { getIsAuth } from '../../store/slices/user';
import { addNotification, isValidSearchChange, isValidSearchSubmit } from '../../utils';

import SearchInputSuggestions from './__suggestions/search-input__suggestions';

interface SearchInputProps {
    displayName?: string
}
const SearchInput = ({ displayName: propsDisplayName = '' }:SearchInputProps) => {
    const intl = useIntl();
    const dispatch = useDispatch();

    const isAuth = useSelector(getIsAuth);

    const [_, navigate] = useLocation();

    const suggestions = useSelector(getSuggestions);
    const isSuggestionsLoading = useSelector(getIsSuggestionsLoading);

    const isSearchingUser = useSelector(getIsTwitchUserFetching);

    const [typingTimer, setTypingTimer] = useState<NodeJS.Timeout | null>(null);
    const [displayName, setDisplayName] = useState(propsDisplayName);

    const [fetchSuggestions] = useLazyGetDisplayNameSuggestionsQuery();

    const handleSubmit = () => {

        if (typingTimer) {
            clearTimeout(typingTimer);
        }

        if (!isValidSearchSubmit(userType, displayName)) {
            addNotification({
                id: `notification.searchInput.${userType}.submit`,
                type: SNACKBAR_TYPE.ERROR,
                autoHideDuration: NOTIFICATIONS_DURATION.S,
            }, dispatch);
            return;
        }

        dispatch(clearTwitchUser());
        dispatch(clearChannelsState());
        dispatch(clearMessages());
        dispatch(clearSuggestions());

        navigate(`${LINKS.MESSAGES}/${displayName}`);
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

        setDisplayName(e.target.value);
    };

    const handleSelect = () => {
        setDisplayName(displayName);
        handleSubmit(displayName);
        dispatch(clearSuggestions());
    };

    return (
        <div>
            <Input
                disabled={!isAuth || isSearchingUser}
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
                        if (displayName.length > 2) {
                            fetchSuggestions({ username: displayName });
                        }
                    }, 500);

                    setTypingTimer(id);
                }}
                icon={<IconSearch/>}
                name="user-search"
                placeholder={intl.formatMessage({ id: `search.inputPlaceholder ${!isAuth && '.userNotAuthorized'}` })}
                value={displayName}
            />
            <SearchInputSuggestions handleOnClick={handleSelect} isSuggestionsLoading={isSuggestionsLoading} suggestions={suggestions} />
        </div>
    );
};

export default SearchInput;
