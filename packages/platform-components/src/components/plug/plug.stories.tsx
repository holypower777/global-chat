import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { disableControls } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';
import { STORIES } from '../constants';

import * as Plugs from './plug';

export default {
    title: `${STORIES.pcPlugs}/Plug`,
    component: Plugs.default,
} as ComponentMeta<typeof Plugs.default>;

export const Overview: ComponentStory<typeof Plugs.default> = (args) => (
    <StoryOverview
        componentName="Plug"
    >
        <Plugs.PlugDonation {...args} />
    </StoryOverview>
);

export const Variants: ComponentStory<typeof Plugs.default> = () => (
    <Spacer>
        <Plugs.PlugDonation />
        <Plugs.PlugInternalError />
        <Plugs.PlugLimits />
        <Plugs.PlugNoChatActivity />
        <Plugs.PlugStats />
        <Plugs.PlugUserNotFound />
    </Spacer>
);
Variants.parameters = { ...disableControls() };
