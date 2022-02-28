import { storiesOf } from '@storybook/react';
import React from 'react';

import Possibilities from '../../src/components/possibilities/possibilities';
import { STORY_GROUPS } from '../constants';

const StoryPossibilities = () => {
    return (
        <div style={{ height: '90vh', width: '100%', position: 'relative' }}>
            <Possibilities />
        </div>
    );
};

storiesOf(STORY_GROUPS.common, module)
    .add('Possibilities', StoryPossibilities);
