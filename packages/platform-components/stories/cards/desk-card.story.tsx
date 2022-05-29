import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import DeskCard from '../../src/components/desk-card/desk-card';
import { STORY_GROUPS } from '../constants';

const StoryDeskCard = () => (
    <DeskCard 
        type={select('type', Object.values(DeskCard.TYPE), DeskCard.TYPE.OVERALL)}
    />
);

storiesOf(STORY_GROUPS.cards, module)
    .addDecorator(withKnobs)
    .add('Desk card', StoryDeskCard);
