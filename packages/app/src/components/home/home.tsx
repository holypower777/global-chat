import b from 'b_';
import { Button, IconSearch, Input, Logo, Text } from 'platform-components';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Link, useNavigate } from 'react-router-dom';

import './home.scss';

const Home = () => {
    const intl = useIntl();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const handleSubmit = (e: React.KeyboardEvent) => {
        if (username.length > 2 && e.key === 'Enter') {
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
                        handleChange={(e) => setUsername(e.target.value)}
                        handleKeyDown={handleSubmit}
                        icon={<IconSearch />}
                        name="user-search"
                        placeholder={intl.formatMessage({ id: 'header.inputPlaceholder' })}
                        value={username}
                    />
                    <Link to="/overall-stats">
                        <Button>{intl.formatMessage({ id: 'link.overallStats' })}</Button>
                    </Link>
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
