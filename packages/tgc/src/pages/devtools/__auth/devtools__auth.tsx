import React, { useState } from 'react';

import { H3, Text } from 'platform-components';

// import randDisplayName from 'platform-apis/utils/randDisplayName';

import './devtools__auth.scss';

const DevtoolsAuth = () => {
    const [paidTier, setPaidTier] = useState(0);
    // const [displayName, setDisplayName] = useState(randDisplayName());

    return (
        <section>
            <H3>Auth as:</H3>
            <div>
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
        </section>
    );
};

export default DevtoolsAuth;
