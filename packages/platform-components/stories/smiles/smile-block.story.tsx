import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import SmileBlock from '../../src/components/smile-block/smile-block';
import { STORY_GROUPS } from '../constants';

const StorySmileBlock = () => (
    <SmileBlock 
        href={text('href', 'https://cdn.betterttv.net/emote/5d834fdfc0652668c9e4e754/3x')}
        label={text('label', 'TypeType')}
    />
);

storiesOf(STORY_GROUPS.smiles, module)
    .addDecorator(withKnobs)
    .add('Smile block', StorySmileBlock);
