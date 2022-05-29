import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { DeskCardStats } from '../../src/components/desk-card/desk-card';
import { STORY_GROUPS } from '../constants';

const StoryDeskCardStats = () => (
    <DeskCardStats
        messagesAmount={number('messages amount', 105179497)}
        messagesPerDay={number('meesages per day', 4907831)}
        parsedChannels={number('parsed channels', 831)}
        usersAmount={number('users amount', 1641415)}
        usersPerDay={number('users per day', 5384)}
    />
);

storiesOf(STORY_GROUPS.cards, module)
    .addDecorator(withKnobs)
    .add('Desk card stats', StoryDeskCardStats);
