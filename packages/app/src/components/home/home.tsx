import b from 'b_';
import { Button, IconSearch, Input, Logo, Text } from 'platform-components';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import './home.scss';

const Home = () => {
    const intl = useIntl();
    const [value, setValue] = useState('');

    return (
        <main className="home">
            <section className={b('home', 'container')}>
                <Logo alwaysFull />
                <section className={b('home', 'search')}>
                    <Input
                        disabled={false}
                        fullWidth={true}
                        handleChange={(e) => setValue(e.target.value)}
                        handleKeyDown={() => ({})}
                        icon={<IconSearch handleClick={() => ({})} />}
                        name="user-search"
                        placeholder={intl.formatMessage({ id: 'header.inputPlaceholder' })}
                        value={value}
                    />
                    <Button>{intl.formatMessage({ id: 'header.overallStatsButton' })}</Button>
                </section>
                <Text
                    center
                    id="home.info"
                    mix={b('home', 'info')}
                    size={Text.SIZE.S}
                />
            </section>
        </main>
    );
};

export default Home;
