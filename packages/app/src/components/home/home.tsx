import b from 'b_';
import { Button, HeaderSettings, IconSearch, Input, Logo, SNACKBAR_TYPE, Text } from 'platform-components';
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
    const userType = useSelector(getUserTypeSetting);

    useEffect(() => {
        setUsername('');
    }, [userType]);

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
                        settings={<HeaderSettings updateSettings={(key, value) => dispatch(updateSetting({ key, value }))}/>}
                        value={username}
                    />
                    <div className={b('home', 'search-links')}>
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
