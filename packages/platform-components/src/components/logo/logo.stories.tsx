import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoryOverview } from '../../containers/stories';
import { STORIES } from '../constants';

import Logo from './logo';

export default {
    title: `${STORIES.pcCommon}/Logo`,
    component: Logo,
} as ComponentMeta<typeof Logo>;

export const Overview: ComponentStory<typeof Logo> = (args) => (
    <StoryOverview componentName="Logo">
        <Logo {...args} />
    </StoryOverview>
);
Overview.args = {
    full: false,
};
