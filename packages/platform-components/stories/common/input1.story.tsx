import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { IconDots, IconSearch } from '../..';
import Input from '../../src/components/input/input';
import { STORY_GROUPS } from '../constants';

import './common.scss';

const StoryInput = () => {
    const [value, setValue] = useState('Text');
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => (setValue(e.target.value));

    return (
        <div className="input-group">
            <Input
                autoFocus={boolean('auto focus', false)}
                disabled={boolean('disabled', false)}
                handleChange={handleInput}
                name={text('name', '')}
                placeholder={text('placeholder', 'placeholder')}
                prefix={<IconSearch />}
                readonly={boolean('readonly', false)}
                required={boolean('required', false)}
                size={select('size', Input.SIZE, Input.SIZE.L)}
                suffix={<IconDots />}
                value={value}
            />
            <Input
                placeholder="Input L"
                size={Input.SIZE.L}
            />
            <Input
                placeholder="Input M"
                size={Input.SIZE.M}
            />
            <Input
                placeholder="Input S"
                size={Input.SIZE.S}
            />
            <Input
                placeholder="Input with prefix and suffix"
                prefix={<IconSearch />}
                size={Input.SIZE.M}
                suffix={<IconDots />}
            />
            <Input
                placeholder="Input with prefix"
                prefix={<IconSearch />}
                size={Input.SIZE.M}
            />
            <Input
                placeholder="Input with suffix"
                size={Input.SIZE.M}
                suffix={<IconDots />}
            />
            <Input
                disabled
                placeholder="Disabled"
                size={Input.SIZE.M}
            />
            <Input
                placeholder="Read only"
                readonly
                size={Input.SIZE.M}
                value="Read only"
            />
        </div>
    );
};

storiesOf(STORY_GROUPS.common, module)
    .addDecorator(withKnobs)
    .add('Input', StoryInput);
