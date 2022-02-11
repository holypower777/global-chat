import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { H3, IconSearch } from '../..';
import Input from '../../src/components/input/input';
import { STORY_GROUPS } from '../constants';

import './common.scss';

const StoryInput = () => {
    const [value, setValue] = useState('');
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => (setValue(e.target.value));

    return (
        <div className="input-group">
            <H3>Input with knobs</H3>
            <Input 
                autoFocus={boolean('auto focus', false)}
                disabled={boolean('disabled', false)}
                fullWidth={boolean('full width', false)}
                handleChange={handleInput}
                name={text('name', '')}
                placeholder={text('placeholder', 'placeholder')}
                readOnly={boolean('read only', false)}
                required={boolean('required', false)}
                type={text('type', 'text')}
                value={value}
            />
            <H3>Disabled input</H3>
            <Input 
                disabled
                value="Disabled"
            />
            <H3>Read only input</H3>
            <Input 
                readOnly
                value="Read only"
            />
            <H3>Input with icon</H3>
            <Input 
                icon={<IconSearch />}
                value="With icon"
            />
        </div>
    );
};

storiesOf(STORY_GROUPS.common, module)
    .addDecorator(withKnobs)
    .add('Input', StoryInput);
