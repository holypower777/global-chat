import b from 'b_';
import { useGetRandomTwitchUserQuery } from 'platform-apis/slices/twitch-users';
import { Button, HeaderSettings, IconSearch, Input, Logo, SEARCH_TYPE, SETTINGS, SNACKBAR_TYPE, Text } from 'platform-components';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

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
    const { data, isFetching } = useGetRandomTwitchUserQuery(null, { skip });

    useEffect(() => {
        setUsername('');
    }, [userType]);

    useEffect(() => {
        if (data) {
            setSkip(true);
            dispatch(updateSetting({ key: SETTINGS.USER_TYPE, value: SEARCH_TYPE.USERNAME }));
            navigate(`messages/${data.displayName}`);
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
                    mix={b('home', 'input')}
                    name="user-search"
                    placeholder={intl.formatMessage({ id: 'header.inputPlaceholder' })}
                    settings={<HeaderSettings updateSettings={(key, value) => dispatch(updateSetting({ key, value }))} />}
                    value={username}
                />
                <section className={b('home', 'search')}>
                    <div className={b('home', 'search-links')}>
                        <Button
                            handleClick={() => setSkip(false)}
                            loading={isFetching}
                        >
                            {intl.formatMessage({ id: 'home.randomUser' })}
                        </Button>
                        <Link to="/overall-stats">
                            <Button>{intl.formatMessage({ id: 'link.overallStats' })}</Button>
                        </Link>
                        <Link to="/live-chat">
                            <Button>{intl.formatMessage({ id: 'link.liveChat' })}</Button>
                        </Link>
                    </div>
                </section>
                <Text
                    center
                    id="info.home"
                    mix={b('home', 'info')}
                    size={Text.SIZE.S}
                />
            </section>
        </main>
    );
};

export default Home;
