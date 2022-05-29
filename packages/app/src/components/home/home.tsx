import b from 'b_';
import { useGetDailyStatsQuery } from 'platform-apis';
import { useGetRandomTwitchUserQuery } from 'platform-apis/slices/twitch-users';
import { Button, DeskCard, DeskCardStats, FROM_PAGE, HeaderSettings, IconSearch, Input, Logo, SEARCH_TYPE, SETTINGS, SNACKBAR_TYPE, Text } from 'platform-components';
import { useWindowSize } from 'platform-components/src/hooks';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserTypeSetting, updateSetting } from '../../store/slices/settings';
import { addNotification, isValidSearchChange, isValidSearchSubmit } from '../../utils';

import './home.scss';

const Home = () => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [skip, setSkip] = useState(true);
    const userType = useSelector(getUserTypeSetting);
    const { width } = useWindowSize();
    const { data, isFetching } = useGetRandomTwitchUserQuery(null, { skip });
    const { data: dailyData, isFetching: isDailyFetching } = useGetDailyStatsQuery();

    useEffect(() => {
        setUsername('');
    }, [userType]);

    useEffect(() => {
        if (data) {
            setSkip(true);
            dispatch(updateSetting({ key: SETTINGS.USER_TYPE, value: SEARCH_TYPE.USERNAME }));
            navigate(`messages/${data.displayName}?from=${FROM_PAGE.RANDOM_USER}`);
        }
    }, [data]);

    useEffect(() => {
        document.title = intl.formatMessage({ id: 'title.common' });
    }, []);

    const handleSubmit = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (!isValidSearchSubmit(userType, username)) {
                addNotification({
                    id: `notification.searchInput.${userType}.submit`,
                    type: SNACKBAR_TYPE.ERROR,
                    autoHideDuration: 4000,
                }, dispatch);
                return;
            }

            navigate(`messages/${username}`);
        }
    };

    return (
        <main className="home">
            <section className={b('home', 'container')}>
                <Logo alwaysFull />
                <section className={b('home', 'search')}>
                    <Input
                        disabled={false}
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
                            setUsername(e.target.value);
                        }}
                        handleKeyDown={handleSubmit}
                        icon={<IconSearch />}
                        name="user-search"
                        placeholder={intl.formatMessage({ id: 'header.inputPlaceholder' })}
                        settings={<HeaderSettings updateSettings={(key, value) => dispatch(updateSetting({ key, value }))} />}
                        value={username}
                    />
                    <Button
                        handleClick={() => setSkip(false)}
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
            </section>
        </main>
    );
};

export default Home;
