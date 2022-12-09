import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { disableControls, selectControls, sizeProps } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';
import { STORIES } from '../constants';

import Spin from './spin';

export default {
    title: `${STORIES.pcCommon}/Spin`,
    component: Spin,
} as ComponentMeta<typeof Spin>;

export const Overview: ComponentStory<typeof Spin> = (args) => (
    <StoryOverview componentName="Spin">
        <Spin {...args} />
    </StoryOverview>
);
Overview.args = {
    size: Spin.SIZE.M,
    theme: Spin.THEME.TWITCH,
    center: false,
    hidden: false,
};
Overview.argTypes = {
    ...sizeProps(),
    theme: selectControls(Object.values(Spin.THEME)),
};

export const Sizes: ComponentStory<typeof Spin> = () => (
    <Spacer>
        <Spin size={Spin.SIZE.L} />
        <Spin size={Spin.SIZE.M} />
        <Spin size={Spin.SIZE.S} />
    </Spacer>
);
Sizes.parameters = { ...disableControls() };

export const Themes: ComponentStory<typeof Spin> = () => (
    <Spacer>
        <Spin theme={Spin.THEME.DARK} />
        <Spin theme={Spin.THEME.LIGHT} />
        <Spin theme={Spin.THEME.TWITCH} />
    </Spacer>
);
Themes.parameters = { ...disableControls() };
