import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { StoryOverview } from '../../containers/stories';

import Logo from './logo';

export default {
    title: 'Platform Components/Common/Logo',
    component: Logo,
} as Meta<typeof Logo>;

export const Overview: StoryFn<typeof Logo> = (args) => (
    <StoryOverview componentName="Logo">
        <Logo {...args} />
    </StoryOverview>
);
Overview.args = {
    full: false,
};
