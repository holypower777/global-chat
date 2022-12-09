import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { disableControls, selectControls, sizeProps } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';
import { STORIES } from '../constants';

import HeaderText, { H1, H2, H3, H4, H5, H6 } from './header-text';

export default {
    title: `${STORIES.pcTypography}/Heading`,
    component: HeaderText,
} as ComponentMeta<typeof HeaderText>;

export const Overview: ComponentStory<typeof HeaderText> = (args) => (
    <StoryOverview
        componentName="HeaderText"
        notOkList={[
            'Don’t use it to display text paragraphs or item titles formed from multiple sentences. Use <Text /> instead.',
            'Don’t use <HeaderText /> directly. Use it’s variations: <H1 />, <H2 />, etc. up to <H6 />',
        ]}
        okList={[
            'Use it as the title of each major section of a page.',
            'Use it for short and important titles or numerals.',
        ]}
        usage="Heading is a typography component used to create levels of hierarchies between text."
    >
        <HeaderText {...args}>HeaderText</HeaderText>
    </StoryOverview>
);
Overview.args = {
    tag: HeaderText.TAG.H1,
    size: HeaderText.SIZE.L,
    weight: HeaderText.WEIGHT.L,
    uppercase: false,
    capitalize: false,
    ellipsis: false,
};
Overview.argTypes = {
    ...sizeProps(),
    tag: selectControls(Object.values(HeaderText.TAG)),
    weight: selectControls(Object.values(HeaderText.WEIGHT)),
};

export const Sizes: ComponentStory<typeof HeaderText> = () => (
    <Spacer>
        <H1>Heading level one</H1>
        <H2>Heading level two</H2>
        <H3>Heading level three</H3>
        <H4>Heading level four</H4>
        <H5>Heading level five</H5>
        <H6>Heading level six</H6>
    </Spacer>
);
Sizes.parameters = { ...disableControls() };

export const Variants: ComponentStory<typeof HeaderText> = () => (
    <Spacer>
        <H1 uppercase>Uppercase</H1>
        <H1 capitalize>capitalized</H1>
        <div style={{ width: 200 }}>
            <H1 ellipsis>ellipsis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem magni distinctio, praesentium odio corporis ea minima ipsam accusantium, placeat nihil facilis rem eveniet quia, explicabo aliquid et repudiandae labore facere!</H1>
        </div>
    </Spacer>
);
Variants.parameters = { ...disableControls() };
