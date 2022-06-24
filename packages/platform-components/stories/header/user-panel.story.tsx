import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import HeaderUserPanel from '../../src/components/header/__user-panel/header__user-panel';
import { STORY_GROUPS } from '../constants';

import { users } from './headerData';

const StoryUserPanel = () => {
    return (
        <div style={{ margin: '0 auto', width: 100 }}>
            <HeaderUserPanel
                handleLogout={() => ({})}
                handleRemoveFavorite={() => ({})}
                user={select('user', users, users[1])}
            />
        </div>
    );
};

storiesOf(STORY_GROUPS.header, module)
    .addDecorator(withKnobs)
    .add('User panel', StoryUserPanel);
