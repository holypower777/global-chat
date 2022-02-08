import { date, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import UserCard from '../../src/components/user-card/user-card';
import values from '../common/heatmapData';
import { STORY_GROUPS } from '../constants';

const StoryUserCard = () => {
    return (
        <UserCard
            avatarSrc={text('avatar src', 'https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-70x70.png')}
            createdAt={new Date(date('created at', new Date()))}
            heatmapDates={values}
            mostActiveChannel={text('most active channel', 'Klean')}
            totalMessages={number('total messages', 2)}
            userId={number('user id', 12932497)}
            username={text('username', 'Gazely')}
        />
    );
};

storiesOf(STORY_GROUPS.chat, module)
    .addDecorator(withKnobs)
    .add('User card', StoryUserCard);
