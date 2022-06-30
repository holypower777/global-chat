import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Plug from '../../src/components/plug/plug';
import { STORY_GROUPS } from '../constants';

const StoryPlug = () => (
    <Plug
        expiryTimestamp={new Date(new Date().getTime() + 60 * 60 * 24 * 1000)}
        isAuth={boolean('isAuth', false)}
        type={select('type', Plug.TYPE, Plug.TYPE.DONATION)}
    />
);

storiesOf(STORY_GROUPS.plug, module)
    .addDecorator(withKnobs)
    .add('Plug', StoryPlug);
