import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Chip from '../../src/components/chip/chip';
import { STORY_GROUPS } from '../constants';

const StoryChip = () => (
    <Chip 
        clickable={boolean('clickable', true)}
        label={text('label', 'label')}
        secondLabel={text('secondLabel', '')}
        selected={boolean('selected', false)}
    />
);

storiesOf(STORY_GROUPS.common, module)
    .addDecorator(withKnobs)
    .add('Chip', StoryChip);
