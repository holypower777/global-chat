/* eslint-disable camelcase */
import b from 'b_';
import { sign } from 'jws';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, H3, Input, SETTINGS, Text } from 'platform-components';

import randDisplayName from 'platform-apis/utils/randDisplayName';

import { updateSetting } from '../../../store/slices/settings';

import './devtools__auth.scss';

const DevtoolsAuth = () => {
    const dispatch = useDispatch();
    const [paidTier, setPaidTier] = useState(0);
    const [historyAmount, setHistoryAmount] = useState(0);
    const [favoritesAmount, setFavoritesAmount] = useState(0);
    const [displayName, setDisplayName] = useState(randDisplayName());

    const handleAuth = () => {
        const expTime = new Date(new Date().getFullYear() + 2, 1, 1).getTime();
        const token = sign({
            header: { alg: 'HS256' },
            payload: {
                user_id: 1,
                display_name: displayName,
                paid_tier: paidTier,
                paid_exp: expTime,
                exp: expTime,
            },
            secret: 'kek',
        });

        dispatch(updateSetting({ key: SETTINGS.ACCESS_TOKEN, value: token }));
        dispatch(
            updateSetting({
                key: SETTINGS.REFRESH_TOKEN,
                value: 'c4ca4238a0b923820dcc509a6f75849b',
            })
        );
        // TODO: update user store
    };

    return (
        <section className={b('devtools', 'card')}>
            <H3>Auth as:</H3>
            <div className={b('card', 'input')}>
                <Text>Paid tier:</Text>
                <select
                    name="paidTier"
                    onChange={(e) => setPaidTier(parseInt(e.target.value, 10))}
                    value={paidTier}
                >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className={b('card', 'input')}>
                <Text>Display name:</Text>
                <Input handleChange={(e) => setDisplayName(e.target.value)} value={displayName} />
            </div>
            <div className={b('card', 'input')}>
                <Text>History amount:</Text>
                <Input
                    handleChange={(e) => setHistoryAmount(parseInt(e.target.value, 10))}
                    type="number"
                    value={historyAmount.toString()}
                />
            </div>
            <div className={b('card', 'input')}>
                <Text>Favorites amount:</Text>
                <Input
                    handleChange={(e) => setFavoritesAmount(parseInt(e.target.value, 10))}
                    type="number"
                    value={favoritesAmount.toString()}
                />
            </div>
            <div>
                <Button handleClick={handleAuth} theme={Button.THEME.TWITCH}>
                    {`Login as ${displayName}`}
                </Button>
            </div>
        </section>
    );
};

export default DevtoolsAuth;
