import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import RubricatorBlock from '../../src/components/rubricator/__block/rubricator__block';
import { STORY_GROUPS } from '../constants';

const items = ['Arlene.Becker', 'Antonietta47', 'Antonina74'];

const StoryRubricatorBlock = () => <RubricatorBlock items={items}/>;

storiesOf(STORY_GROUPS.rubricator, module)
    .addDecorator(withKnobs)
    .add('Block', StoryRubricatorBlock);
