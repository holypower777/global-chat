/* eslint-disable camelcase */
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Rubricator from '../../src/components/rubricator/rubricator';
import { STORY_GROUPS } from '../constants';

const chans = [
    [
        { displayName: 'Arlene.Becker', userId: '1' },
    ],
    [
        { displayName: 'Bridgette9', userId: '2' },
        { displayName: 'Brenda23', userId: '3' },
    ],
    [
        { displayName: 'Earnest35', userId: '4' },
    ],
    [
        { displayName: 'Flavie24', userId: '5' },
        { displayName: 'Francis54', userId: '6' },
    ],
    [
        { displayName: 'Joy78', userId: '7' },
    ],
];

const StoryRubricator = () => <Rubricator channels={chans}/>;

storiesOf(STORY_GROUPS.rubricator, module)
    .addDecorator(withKnobs)
    .add('Rubricator', StoryRubricator);
