import './search-input.scss';
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
import {
    addNotification, adjustDisplayName, clearMismatchedChars,
    containsDisplayName,
} from '../../utils';

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
        const adjustedDisplayName = adjustDisplayName(displayName);

        setDisplayName(adjustedDisplayName);
        if (typingTimer) {
            clearTimeout(typingTimer);
        }

        if (!containsDisplayName(adjustedDisplayName)) {
            addNotification({
                id: 'notification.searchInput.username.submit',
                type: SNACKBAR_TYPE.ERROR,
                autoHideDuration: NOTIFICATIONS_DURATION.S,
            }, dispatch);
            return;
        }

        dispatch(clearTwitchUser());
        dispatch(clearChannelsState());
        dispatch(clearMessages());
        dispatch(clearSuggestions());

        navigate(`${LINKS.MESSAGES}/${adjustedDisplayName}`);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= 2) {
            dispatch(clearSuggestions());
        }

        setDisplayName(clearMismatchedChars(e.target.value));
    };

    const handleSelect = (pickedName: string) => {
        setDisplayName(pickedName);
        dispatch(clearSuggestions());
    };

    return (
        <div className="search-input">
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
                name="user-search"
                placeholder={intl.formatMessage({ id: `search.inputPlaceholder${!isAuth ? '.userNotAuthorized' : ''}` })}
                prefix={<IconSearch/>}
                value={displayName}
            />
            <SearchInputSuggestions handleOnClick={handleSelect} isSuggestionsLoading={isSuggestionsLoading} suggestions={suggestions} />
        </div>
    );
};

export default SearchInput;
