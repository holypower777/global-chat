import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import RubricatorAlphabet from '../../src/components/rubricator/__alphabet/rubricator__alphabet';
import { STORY_GROUPS } from '../constants';

const availableLetters = ['a', 'b', 'e', 'f', 'j'];

const StoryRubricatorAlphabet = () => (
    <RubricatorAlphabet 
        activeLetter={availableLetters[0]}
        availableLetters={availableLetters}    
    />
);

storiesOf(STORY_GROUPS.rubricator, module)
    .addDecorator(withKnobs)
    .add('Alphabet', StoryRubricatorAlphabet);
