import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Spin from '../../src/components/spin/spin';
import { STORY_GROUPS } from '../constants';

const StorySpin = () => {
    return (
        <Spin
            center={boolean('center', false)}
            hidden={boolean('hidden', false)}
            size={select('size', Object.values(Spin.SIZE), Spin.SIZE.M)}
            theme={select('theme', Object.values(Spin.THEME), Spin.THEME.TWITCH)}
        />
    );
};

storiesOf(STORY_GROUPS.common, module)
    .addDecorator(withKnobs)
    .add('Spin', StorySpin);
