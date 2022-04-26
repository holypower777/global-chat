import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { TwitchUserChannel } from 'platform-apis/types';
import React, { useEffect, useState } from 'react';

import RubricatorBlock from '../../src/components/rubricator/__block/rubricator__block';
import { STORY_GROUPS } from '../constants';

const items = [
    {
        userId: 1,
        login: 'arlene.becker',
        displayName: 'Arlene.Becker',
        profileImageUrl: '',
        messages: 155,
        firstMessageDate: new Date('2011-11-01'),
        lastMessageDate: new Date('2015-07-25'),
    },
    {
        userId: 2,
        login: 'antonietta47',
        displayName: 'Antonietta47',
        profileImageUrl: '',
        messages: 253255,
        firstMessageDate: new Date('2011-11-01'),
        lastMessageDate: new Date('2015-07-25'),
    },
    {
        userId: 3,
        login: 'antonina74',
        displayName: 'Antonina74',
        profileImageUrl: '',
        messages: 3,
        firstMessageDate: new Date('2011-11-01'),
        lastMessageDate: new Date('2015-07-25'),
    },
];

const StoryRubricatorBlock = () => {
    const [selectedItem, setSelectedItem] = useState<TwitchUserChannel>(items[0]);
    const [activeLetter, setActiveLetter] = useState(items[0].login.charAt(0).toLowerCase());

    useEffect(() => {
        setActiveLetter(selectedItem.login.charAt(0).toLowerCase());
    }, [selectedItem]);

    return (
        <RubricatorBlock 
            activeLetter={activeLetter}
            handleSelect={(item) => setSelectedItem(item)}
            items={items}
            selectedItem={selectedItem}
        />
    );
};

storiesOf(STORY_GROUPS.rubricator, module)
    .addDecorator(withKnobs)
    .add('Block', StoryRubricatorBlock);
