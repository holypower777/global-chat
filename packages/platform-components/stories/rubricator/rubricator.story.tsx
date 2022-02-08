/* eslint-disable camelcase */
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Rubricator from '../../src/components/rubricator/rubricator';
import { STORY_GROUPS } from '../constants';

const chans = [
    [
        { display_name: 'Arlene.Becker', user_id: '1' },
    ],
    [
        { display_name: 'Bridgette9', user_id: '2' },
        { display_name: 'Brenda23', user_id: '3' },
    ],
    [
        { display_name: 'Earnest35', user_id: '4' },
    ],
    [
        { display_name: 'Flavie24', user_id: '5' },
        { display_name: 'Francis54', user_id: '6' },
    ],
    [
        { display_name: 'Joy78', user_id: '7' },
    ],
];

const StoryRubricator = () => <Rubricator channels={chans}/>;

storiesOf(STORY_GROUPS.rubricator, module)
    .addDecorator(withKnobs)
    .add('Rubricator', StoryRubricator);
