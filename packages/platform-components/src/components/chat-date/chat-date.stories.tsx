import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoryOverview } from '../../containers/stories';
import { STORIES } from '../constants';

import ChatDate from './chat-date';

export default {
    title: `${STORIES.pcChat}/Chat-date`,
    component: ChatDate,
} as ComponentMeta<typeof ChatDate>;

export const Overview: ComponentStory<typeof ChatDate> = (args) => (
    <StoryOverview
        componentName="Chat-date"
    >
        <ChatDate {...args} />
    </StoryOverview>
);
Overview.args = {
    date: new Date(1662900546000),
};
