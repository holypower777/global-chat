import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import Header from '../../src/components/header/header';
import { STORY_GROUPS } from '../constants';

import { users } from './headerData';

const StoryHeader = () => {
    const [value, setValue] = useState('');

    return (
        <Header 
            handleChange={(e) => (setValue(e.target.value))}
            handleKeyDown={() => ({})}
            handleKeyUp={() => ({})}
            handleLogout={() => ({})}
            handleRemoveFavorite={() => ({})}
            handleSelect={() => ({})}
            handleSubmit={() => ({})}
            isLoading={boolean('disabled', false)}
            isSuggestionsLoading={boolean('isSuggestionsLoading', false)}
            suggestions={[]}
            updateSettings={() => ({})}
            user={select('user', users, users[1])}
            value={value}
        />
    );
};

storiesOf(STORY_GROUPS.header, module)
    .addDecorator(withKnobs)
    .add('Header', StoryHeader);
