/* eslint-disable camelcase */
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { TwitchUserChannel } from 'platform-apis/types';
import React, { useState } from 'react';

import Rubricator from '../../src/components/rubricator/rubricator';
import { STORY_GROUPS } from '../constants';

const chans = [
    [
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
    ],
    [
        {
            userId: 4,
            login: 'Bridgette9',
            displayName: 'Bridgette9',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 5,
            login: 'Brenda23',
            displayName: 'Brenda23',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 6,
            login: 'Bertram31',
            displayName: 'Bertram31',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 7,
            login: 'Brando.Ernser',
            displayName: 'Brando.Ernser',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
    ],
    [
        {
            userId: 8,
            login: 'Earnest35',
            displayName: 'Earnest35',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
    ],
    [
        {
            userId: 9,
            login: 'Flavie24',
            displayName: 'Flavie24',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 10,
            login: 'Francis54',
            displayName: 'Francis54',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
    ],
    [
        {
            userId: 11,
            login: 'Joy78',
            displayName: 'Joy78',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 12,
            login: 'Josefina_Haag95',
            displayName: 'Josefina_Haag95',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 13,
            login: 'Jimmy.Zemlak62',
            displayName: 'Jimmy.Zemlak62',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 14,
            login: 'Josh77',
            displayName: 'Josh77',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 15,
            login: 'Joy14',
            displayName: 'Joy14',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
    ],
    [
        {
            userId: 16,
            login: 'Leda_Torp',
            displayName: 'Leda_Torp',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 17,
            login: 'Lucie_Kessler',
            displayName: 'Lucie_Kessler',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
    ],
    [
        {
            userId: 18,
            login: 'Mariam58',
            displayName: 'Mariam58',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 19,
            login: 'Marc_Parker32',
            displayName: 'Marc_Parker32',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
    ],
    [
        {
            userId: 20,
            login: 'Onie_Von',
            displayName: 'Onie_Von',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 21,
            login: 'Ofelia_Bernier64',
            displayName: 'Ofelia_Bernier64',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
    ],
    [
        {
            userId: 22,
            login: 'Phyllis88',
            displayName: 'Phyllis88',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 23,
            login: 'Pearlie.Skiles35',
            displayName: 'Pearlie.Skiles35',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 24,
            login: 'Paolo.Purdy',
            displayName: 'Paolo.Purdy',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
    ],
    [
        {
            userId: 25,
            login: 'VersusVs',
            displayName: 'VersusVs',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 26,
            login: 'Versuta',
            displayName: 'Versuta',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
        {
            userId: 27,
            login: 'Vliyagent',
            displayName: 'Vliyagent',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
    ],
    [
        {
            userId: 28,
            login: 'wsee',
            displayName: 'wsee',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
    ],
    [
        {
            userId: 29,
            login: 'ynguiSH',
            displayName: 'ynguiSH',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
    ],
    [
        {
            userId: 30,
            login: 'ZGriFFon',
            displayName: 'ZGriFFon',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },{
            userId: 31,
            login: 'Zimakee',
            displayName: 'Zimakee',
            profileImageUrl: '',
            messages: 155,
            firstMessageDate: new Date('2011-11-01'),
            lastMessageDate: new Date('2015-07-25'),
        },
    ],
];

const StoryRubricator = () => {
    const [item, setItem] = useState<TwitchUserChannel | null>(null);

    return (
        <Rubricator 
            channels={chans}
            handleSelect={(value) => setItem(value)}
            selectedItem={item}
        />
    );
};

storiesOf(STORY_GROUPS.rubricator, module)
    .addDecorator(withKnobs)
    .add('Rubricator', StoryRubricator);
