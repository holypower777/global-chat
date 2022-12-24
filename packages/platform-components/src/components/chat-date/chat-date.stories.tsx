import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { StoryOverview } from '../../containers/stories';

import ChatDate from './chat-date';

export default {
    title: 'Platform Components/Chat/Chat-date',
    component: ChatDate,
} as Meta<typeof ChatDate>;

export const Overview: StoryFn<typeof ChatDate> = (args) => (
    <StoryOverview componentName="Chat-date">
        <ChatDate {...args} />
    </StoryOverview>
);
Overview.args = {
    date: new Date(1662900546000),
};
