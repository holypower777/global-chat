/* eslint-disable react/no-multi-comp */
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { disableControls } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';

import * as Plugs from './plug';

export default {
    title: 'Platform Components/Plugs/Plug',
    component: Plugs.default,
} as Meta<typeof Plugs.default>;

export const Overview: StoryFn<typeof Plugs.default> = (args) => (
    <StoryOverview componentName="Plug">
        <Plugs.PlugDonation {...args} />
    </StoryOverview>
);

export const Variants: StoryFn<typeof Plugs.default> = () => (
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
