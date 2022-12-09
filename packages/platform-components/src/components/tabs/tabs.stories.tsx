import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { disableControls } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';
import { STORIES } from '../constants';
import Icon, { IconChart, IconMessage, IconUser } from '../icon/icon';

import Tabs from './tabs';

export default {
    title: `${STORIES.pcCommon}/Tabs`,
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Overview: ComponentStory<typeof Tabs> = (args) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <StoryOverview
            componentName="Tabs"
            usage="Tabs component enables navigation between content at the same page."
        >
            <Tabs 
                {...args} 
                activeId={activeTab}
                handleTabClick={(id: number) => setActiveTab(id)}
            />
        </StoryOverview>
    );
};
Overview.args = {
    tabs: [
        { id: 0, intlId: 'link.home', icon: <IconUser size={Icon.SIZE.L} /> },
        { id: 1, intlId: 'link.overallStats', icon: <IconChart size={Icon.SIZE.L} /> },
        { id: 2, intlId: 'link.messages', icon: <IconMessage size={Icon.SIZE.L} /> },
    ],
};

export const Variants: ComponentStory<typeof Tabs> = () => (
    <Spacer>
        <Tabs 
            activeId={0}
            handleTabClick={() => ({})}
            tabs={[
                { id: 0, intlId: 'Tab1' },
                { id: 1, intlId: 'Tab2' },
                { id: 2, intlId: 'Tab3' },
                { id: 3, intlId: 'Tab4' },
            ]}
        />
        <Tabs 
            activeId={0}
            handleTabClick={() => ({})}
            tabs={[
                { id: 0, intlId: 'link.home', icon: <IconUser size={Icon.SIZE.L} /> },
                { id: 1, intlId: 'link.overallStats', icon: <IconChart size={Icon.SIZE.L} /> },
            ]}
        />
        <Tabs 
            activeId={0}
            handleTabClick={() => ({})}
            tabs={[
                { id: 0, intlId: 'link.home' },
                { id: 1, intlId: 'link.overallStats' },
            ]}
        />
    </Spacer>
);
Variants.parameters = { ...disableControls() };
