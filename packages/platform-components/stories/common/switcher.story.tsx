import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import Switcher from '../../src/components/switcher/switcher';
import { STORY_GROUPS } from '../constants';

const StorySwitcher = () => {
    const [isOn, setIsOn] = useState(false);
    const [isOn2, setIsOn2] = useState(true);

    return (
        <>
            <Switcher
                disabled={boolean('disabled', false)}
                handleToggle={() => setIsOn(!isOn)}
                isOn={isOn}
            />
            <Switcher
                disabled={boolean('disabled', false)}
                handleToggle={() => setIsOn2(!isOn2)}
                isOn={isOn2}
            />
        </>
    );
};

storiesOf(STORY_GROUPS.common, module)
    .addDecorator(withKnobs)
    .add('Switcher', StorySwitcher);
