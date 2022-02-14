/* eslint-disable camelcase */
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import Rubricator from '../../src/components/rubricator/rubricator';
import { STORY_GROUPS } from '../constants';

const chans = [
    [
        { username: 'Arlene.Becker', login: 'Arlene.Becker', userId: 1 },
        { username: 'Antonietta47', login: 'Antonietta47', userId: 1 },
        { username: 'Antonina74', login: 'Antonina74', userId: 1 },
    ],
    [
        { username: 'Bridgette9', login: 'Bridgette9', userId: 2 },
        { username: 'Brenda23', login: 'Brenda23', userId: 3 },
        { username: 'Bertram31', login: 'Bertram31', userId: 2 },
        { username: 'Brando.Ernser', login: 'Brando.Ernser', userId: 3 },
    ],
    [
        { username: 'Earnest35', login: 'Earnest35', userId: 4 },
    ],
    
    [
        { username: 'Flavie24', login: 'Flavie24', userId: 5 },
        { username: 'Francis54', login: 'Francis54', userId: 6 },
    ],
    [
        { username: 'Joy78', login: 'Joy78', userId: 7 },
        { username: 'Josefina_Haag95', login: 'Josefina_Haag95', userId: 7 },
        { username: 'Jimmy.Zemlak62', login: 'Jimmy.Zemlak62', userId: 7 },
        { username: 'Josh77', login: 'Josh77', userId: 7 },
        { username: 'Joy14', login: 'Joy14', userId: 7 },
    ],
    [
        { username: 'Leda_Torp', login: 'Leda_Torp', userId: 4 },
        { username: 'Lucie_Kessler', login: 'Lucie_Kessler', userId: 4 },
    ],
    [
        { username: 'Mariam58', login: 'Mariam58', userId: 4 },
        { username: 'Marc_Parker32', login: 'Marc_Parker32', userId: 4 },
    ],
    [
        { username: 'Onie_Von', login: 'Onie_Von', userId: 4 },
        { username: 'Ofelia_Bernier64', login: 'Ofelia_Bernier64', userId: 4 },
    ],
    [
        { username: 'Phyllis88', login: 'Phyllis88', userId: 4 },
        { username: 'Pearlie.Skiles35', login: 'Pearlie.Skiles35', userId: 4 },
        { username: 'Paolo.Purdy', login: 'Paolo.Purdy', userId: 4 },
    ],
    [
        { username: 'VersusVs', login: 'VersusVs', userId: 4 },
        { username: 'Versuta', login: 'Versuta', userId: 4 },
        { username: 'Vliyagent', login: 'Vliyagent', userId: 4 },
    ],
    [
        { username: 'wsee', login: 'wsee', userId: 4 },
    ],
    [
        { username: 'ynguiSH', login: 'ynguiSH', userId: 4 },
    ],
    [
        { username: 'ZGriFFon', login: 'ZGriFFon', userId: 4 },
        { username: 'Zimakee', login: 'Zimakee', userId: 4 },
    ],
];

const StoryRubricator = () => {
    const [item, setItem] = useState('');

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
