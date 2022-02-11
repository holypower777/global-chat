import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import HeaderMenu from '../../src/components/header/__menu/header__menu';
import { STORY_GROUPS } from '../constants';

const StoryHeaderMenu = () => {
    return (
        <HeaderMenu />
    );
};

storiesOf(STORY_GROUPS.header, module)
    .addDecorator(withKnobs)
    .add('Header menu', StoryHeaderMenu);
