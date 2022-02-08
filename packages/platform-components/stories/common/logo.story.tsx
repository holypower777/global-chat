import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Logo from '../../src/components/logo/logo';
import { STORY_GROUPS } from '../constants';

const StoryLogo = () => {
    return (
        <Logo
            alwaysFull={boolean('always full', false)}
            size={select('size', Object.values(Logo.SIZE), Logo.SIZE.L)}
        />
    );
};

storiesOf(STORY_GROUPS.common, module)
    .addDecorator(withKnobs)
    .add('Logo', StoryLogo);
