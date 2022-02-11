import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import Header from '../../src/components/header/header';
import { STORY_GROUPS } from '../constants';

const StoryHeader = () => {
    const [value, setValue] = useState('');

    return (
        <Header 
            handleChange={(e) => (setValue(e.target.value))}
            value={value}
        />
    );
};

storiesOf(STORY_GROUPS.header, module)
    .addDecorator(withKnobs)
    .add('Header', StoryHeader);
