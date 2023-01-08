import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { disableControls, selectControls } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';

import Text from './text';

export default {
    title: 'Platform Components/Typography/Text',
    component: Text,
} as Meta<typeof Text>;

export const Overview: StoryFn<typeof Text> = (args) => (
    <StoryOverview
        componentName="Text"
        notOkList={[
            'Don’t use it as a title for a section or a widget. Use <H1 />, <H2 /> etc. instead.',
        ]}
        okList={[
            'Use it to display text paragraphs formed from a single or multiple sentences.',
            'Use it to display form element values and labels.',
        ]}
        usage="Text is a general typography component used to construct any text content."
    >
        <Text {...args} />
    </StoryOverview>
);
Overview.args = {
    size: Text.SIZE.M,
    weight: Text.WEIGHT.S,
    tag: Text.TAG.SPAN,
    uppercase: false,
    center: false,
    ellipsis: false,
    title: '',
    children: 'Text',
};
Overview.argTypes = {
    size: selectControls(Object.values(Text.SIZE)),
    weight: selectControls(Object.values(Text.WEIGHT)),
    tag: selectControls(Object.values(Text.TAG)),
};

export const Sizes: StoryFn<typeof Text> = () => (
    <Spacer>
        <Text size={Text.SIZE.XS}>Text size XS</Text>
        <Text size={Text.SIZE.S}>Text size S</Text>
        <Text size={Text.SIZE.M}>Text size M</Text>
        <Text size={Text.SIZE.L}>Text size L</Text>
        <Text size={Text.SIZE.XL}>Text size XL</Text>
    </Spacer>
);
Sizes.parameters = { ...disableControls() };

export const Variants: StoryFn<typeof Text> = () => (
    <Spacer>
        <Spacer direction="row">
            <Text weight={Text.WEIGHT.S}>Text weight S</Text>
            <Text weight={Text.WEIGHT.M}>Text weight M</Text>
            <Text weight={Text.WEIGHT.L}>Text weight L</Text>
        </Spacer>
        <Text uppercase>uppercase</Text>
        <div style={{ width: 300, border: '1px solid #000' }}>
            <Text center>Text center</Text>
        </div>
        <div style={{ width: 200 }}>
            <Text ellipsis>
                ellipsis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem magni
                distinctio, praesentium odio corporis ea minima ipsam accusantium, placeat nihil
                facilis rem eveniet quia, explicabo aliquid et repudiandae labore facere!
            </Text>
        </div>
        <Text title="title">Text with title</Text>
    </Spacer>
);
Variants.parameters = { ...disableControls() };
