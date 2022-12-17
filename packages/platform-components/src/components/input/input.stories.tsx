import { StoryFn, Meta } from '@storybook/react';
import React, { useState } from 'react';

import { disableControls, sizeProps } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';
import { IconDots, IconSearch } from '../icon/icon';

import Input, { InputProps } from './input';

export default {
    title: 'Platform Components/Common/Input',
    component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args: InputProps) => {
    const [value, setValue] = useState('');
    
    return (
        <StoryOverview
            componentName="Input"
            notOkList={[
                'Don\'t use it to insert long paragraphs, instead there is a need to develope <InputArea/> component.',
            ]}
            okList={[
                'Use it to insert names, titles and other short textual information.',
                'Use it to build custom inputs like Search input.',
            ]}
            usage="Input allows to insert short text values."
        >
            <Input 
                {...args} 
                handleChange={(e) => setValue(e.target.value)} 
                value={value}
            />
        </StoryOverview>
    );
};

export const Overview = Template.bind({});
Overview.args = {
    autoFocus: false,
    disabled: false,
    name: 'name',
    placeholder: 'placeholder',
    readonly: false,
    required: false,
    size: Input.SIZE.M,
};
Overview.argTypes = {
    ...sizeProps(),
};

export const Sizes: StoryFn<typeof Input> = () => (
    <Spacer>
        <Input placeholder="Size S" size={Input.SIZE.S} />
        <Input placeholder="Size M" size={Input.SIZE.M} />
        <Input placeholder="Size L" size={Input.SIZE.L} />
    </Spacer>
);
Sizes.parameters = { ...disableControls() };

export const Variants: StoryFn<typeof Input> = () => (
    <Spacer>
        <Input
            placeholder="Input with prefix and suffix"
            prefix={<IconSearch />}
            suffix={<IconDots />}
        />
        <Input
            placeholder="Input with prefix"
            prefix={<IconSearch />}
        />
        <Input
            placeholder="Input with prefix"
            suffix={<IconSearch />}
        />
        <Input disabled placeholder="disabled" />
        <Input readonly value="read only" />
        <Input autoFocus placeholder="focused" />
    </Spacer>
);
Variants.parameters = { ...disableControls() };
