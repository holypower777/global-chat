import b from 'b_';
import { useGetDailyStatsQuery } from 'platform-apis';
import { useGetDisplayNameSuggestionsQuery, useGetRandomTwitchUserQuery } from 'platform-apis/slices/twitch-users';
import { Button, DeskCard, DeskCardStats, FROM_PAGE, HeaderSettings, IconSearch, Input, Logo, SEARCH_PARAMS, SEARCH_TYPE, SETTINGS, SNACKBAR_TYPE, Text } from 'platform-components';
import { useWindowSize } from 'platform-components/src/hooks';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { clearChannelsState } from '../../store/slices/channels';
import { clearMessages } from '../../store/slices/messages';
import { getUserTypeSetting, updateSetting } from '../../store/slices/settings';
import { clearTwitchUser } from '../../store/slices/twitch-user';
import { addNotification, isValidSearchChange, isValidSearchSubmit } from '../../utils';

import './home.scss';

const Home = () => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [typingTimer, setTypingTimer] = useState<NodeJS.Timeout | null>(null);
    const [username, setUsername] = useState('');
    const [randomSkip, setRandomSkip] = useState(true);
    const [suggestions, setSuggestions] = useState<Array<string>>([]);
    const [suggestionsSkip, setSuggestionsSkip] = useState(true);
    const userType = useSelector(getUserTypeSetting);
    const { width } = useWindowSize();
    const { data, isFetching } = useGetRandomTwitchUserQuery(null, { skip: randomSkip });
    const { data: suggestionsData, isFetching: isSuggestionsLoading } = useGetDisplayNameSuggestionsQuery({ username }, { skip: suggestionsSkip });
    const { data: dailyData, isFetching: isDailyFetching } = useGetDailyStatsQuery();

    useEffect(() => {
        setUsername('');
    }, [userType]);

    useEffect(() => {
        if (suggestionsData && suggestionsData.length) {
            setSuggestions(suggestionsData);
            setSuggestionsSkip(true);
        }
    }, [suggestionsData]);

    useEffect(() => {
        if (searchParams.get(SEARCH_PARAMS.ACCESS_TOKEN)) {
            dispatch(updateSetting({
                key: SETTINGS.ACCESS_TOKEN,
                value: searchParams.get(SEARCH_PARAMS.ACCESS_TOKEN),
            }));
        }

        if (searchParams.get(SEARCH_PARAMS.REFRESH_TOKEN)) {
            dispatch(updateSetting({
                key: SETTINGS.REFRESH_TOKEN,
                value: searchParams.get(SEARCH_PARAMS.REFRESH_TOKEN),
            }));
        }

        navigate('/');
    }, [searchParams]);

    useEffect(() => {
        if (data) {
            setRandomSkip(true);
            dispatch(updateSetting({ key: SETTINGS.USER_TYPE, value: SEARCH_TYPE.USERNAME }));
            navigate(`messages/${data.displayName}?from=${FROM_PAGE.RANDOM_USER}`);
        }
    }, [data]);

    useEffect(() => {
        document.title = intl.formatMessage({ id: 'title.common' });
    }, []);

    const handleRedirect = (displayName: string | null = null) => {
        const searchName = displayName || username;

        if (!isValidSearchSubmit(userType, searchName)) {
            addNotification({
                id: `notification.searchInput.${userType}.submit`,
                type: SNACKBAR_TYPE.ERROR,
                autoHideDuration: 4000,
            }, dispatch);
            return;
        }

        dispatch(clearTwitchUser());
        dispatch(clearChannelsState());
        dispatch(clearMessages());
        setSuggestions([]);

        navigate(`messages/${searchName}`);
    };

    const handleSubmit = (e: React.KeyboardEvent) => {
        if (typingTimer) {
            clearTimeout(typingTimer);
        }

        if (e.key === 'Enter') {
            handleRedirect();
        }
    };

    const handleSelect = (displayName: string) => (handleRedirect(displayName));

    return (
        <main className="home">
            <section className={b('home', 'container')}>
                <Logo alwaysFull />
                <section className={b('home', 'search')}>
                    <Input
                        disabled={false}
                        dropdownItems={suggestions.map((e) => (<li
                            key={e}
                            onClick={() => (handleSelect(e))}
                        >{e}</li>))}
                        fullWidth={true}
                        handleChange={(e) => {
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
                        }}
                        handleKeyDown={handleSubmit}
                        handleKeyUp={() => {
                            if (typingTimer) {
                                clearTimeout(typingTimer);
                            }
                            const id = setTimeout(() => {
                                if (username.length > 2) {
                                    setSuggestionsSkip(false);
                                    setSuggestions([]);
                                }
                            }, 500);

                            setTypingTimer(id);
                        }}
                        icon={<IconSearch />}
                        isDropdownLoading={isSuggestionsLoading}
                        name="user-search"
                        placeholder={intl.formatMessage({ id: 'header.inputPlaceholder' })}
                        settings={<HeaderSettings updateSettings={(key, value) => dispatch(updateSetting({ key, value }))} />}
                        value={username}
                    />
                    <Button
                        handleClick={() => setRandomSkip(false)}
                        loading={isFetching}
                    >
                        {intl.formatMessage({ id: 'home.randomUser' })}
                    </Button>
                </section>
                {!isDailyFetching && dailyData && <section className={b('home', 'cards')}>
                    {width && width > 1280 && <DeskCardStats
                        messagesAmount={dailyData.totalMessages}
                        messagesPerDay={dailyData.messagesPerDay}
                        parsedChannels={dailyData.currenlyActiveChannels}
                        usersAmount={dailyData.totalUsers}
                        usersPerDay={dailyData.usersPerDay}
                    />}
                    <DeskCard type={DeskCard.TYPE.OVERALL} />
                    <DeskCard type={DeskCard.TYPE.LIVE_CHAT} />
                    <DeskCard type={DeskCard.TYPE.DONATION} />
                </section>}
                {width && width > 1280 && <Text
                    center
                    id="info.home"
                    mix={b('home', 'info')}
                    size={Text.SIZE.S}
                />}
                <a href="http://localhost:3000/auth/twitch/login">Login</a>
            </section>
        </main>
    );
};

export default Home;
