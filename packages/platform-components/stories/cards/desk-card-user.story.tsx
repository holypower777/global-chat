import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { DeskCardUser } from '../../src/components/desk-card/desk-card';
import { STORY_GROUPS } from '../constants';

const StoryDeskCardUser = () => (
    <DeskCardUser
        avatar={text('avatar', 'https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-70x70.png')}
        displayName={text('displayName', 'Gazely')}
    />
);

storiesOf(STORY_GROUPS.cards, module)
    .addDecorator(withKnobs)
    .add('Desk card user', StoryDeskCardUser);
