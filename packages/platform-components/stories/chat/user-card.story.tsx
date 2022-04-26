import { date, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import UserCard from '../../src/components/user-card/user-card';
import values from '../common/heatmapData';
import { STORY_GROUPS } from '../constants';

const StoryUserCard = () => {
    return (
        <UserCard
            createdAt={new Date(date('created at', new Date()))}
            displayName={text('displayName', 'Gazely')}
            heatmapDates={values}
            messagesAmount={number('messages amount', 2)}
            mostActiveChannel={text('most active channel', 'Klean')}
            profileImageUrl={text('profile image url', 'https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-70x70.png')}
            updateSettings={() => ({})}
            userId={number('user id', 12932497)}
        />
    );
};

storiesOf(STORY_GROUPS.chat, module)
    .addDecorator(withKnobs)
    .add('User card', StoryUserCard);
