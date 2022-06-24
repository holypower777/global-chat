import { boolean, date, number, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { TwitchUser } from 'platform-apis/types';
import React from 'react';

import UserCard from '../../src/components/user-card/user-card';
import values from '../common/heatmapData';
import { STORY_GROUPS } from '../constants';

const StoryUserCard = () => {
    const user: TwitchUser = {
        createdAt: new Date(date('created at', new Date())),
        displayName: text('displayName', 'Gazely'),
        messagesAmount: number('messages amount', 2),
        profileImageUrl: text('profile image url', 'https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-70x70.png'),
        userId: number('user id', 12932497),
        wereInterested: number('were intersted', 120),
        login: 'login',
        type: '',
        broadcasterType: select('broadcaster type', ['', 'partner', 'affiliate'], ''),
        description: '',
        offlineImageUrl: '',
        viewCount: 0,
        meta: {},
    };

    return (
        <UserCard
            handleFavorite={() => ({})}
            heatmapDates={values}
            isAuth={boolean('isAuth', false)}
            isFavorite={boolean('isFavorite', false)}
            mostActiveChannel={text('most active channel', 'Klean')}
            twitchUser={user}
            updateSettings={() => ({})}
        />
    );
};

storiesOf(STORY_GROUPS.chat, module)
    .addDecorator(withKnobs)
    .add('User card', StoryUserCard);
