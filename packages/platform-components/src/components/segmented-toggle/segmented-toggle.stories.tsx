import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { disableControls } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';
import { STORIES } from '../constants';
import { IconChart, IconUser } from '../icon/icon';

import SegmentedToggle from './segmented-toggle';

export default {
    title: `${STORIES.pcCommon}/SegmentedToggle`,
    component: SegmentedToggle,
} as ComponentMeta<typeof SegmentedToggle>;

export const Overview: ComponentStory<typeof SegmentedToggle> = (args) => {
    const [selected, setSelected] = useState('value1');

    return (
        <StoryOverview
            componentName="SegmentedToggle"
            notOkList={[
                'Don’t use it to distribute content within a page. Use <Tabs/> instead.',
                'Don’t use it to select multiple options at once.',
            ]}
            okList={[
                'Use it to switch between alternative views of data.',
                'Use it to switch the status of some content or an item.',
                'Use it to toggle between the options of a property.',
            ]}
            usage="A segmented toggle allows a user to toggle between multiple options. Only a single option can be selected at a time."
        >
            <SegmentedToggle
                {...args}
                handleClick={(v) => (setSelected(v))}
                selected={selected}
            >
                <SegmentedToggle.Button value="value1">Option 1</SegmentedToggle.Button>
                <SegmentedToggle.Button value="value2">Option 2</SegmentedToggle.Button>
                <SegmentedToggle.Button value="value3">Option 3</SegmentedToggle.Button>
            </SegmentedToggle>
        </StoryOverview>
    );
};
Overview.args = {
    labelId: 'Label',
};

export const Variants: ComponentStory<typeof SegmentedToggle> = () => (
    <Spacer>
        <SegmentedToggle
            handleClick={() => ({})}
            selected="value1"
        >
            <SegmentedToggle.Button value="value1">Option 1</SegmentedToggle.Button>
            <SegmentedToggle.Button value="value2">Option 2</SegmentedToggle.Button>
        </SegmentedToggle>
        <SegmentedToggle
            handleClick={() => ({})}
            selected="value2"
        >
            <SegmentedToggle.Button value="value1">Option 1</SegmentedToggle.Button>
            <SegmentedToggle.Button value="value2">Option 2</SegmentedToggle.Button>
            <SegmentedToggle.Button value="value3">Option 3</SegmentedToggle.Button>
        </SegmentedToggle>
        <SegmentedToggle
            handleClick={() => ({})}
            labelId="With label"
            selected="value1"
        >
            <SegmentedToggle.Button value="value1">Option 1</SegmentedToggle.Button>
            <SegmentedToggle.Button value="value2">Option 2</SegmentedToggle.Button>
        </SegmentedToggle>
        <SegmentedToggle
            handleClick={() => ({})}
            selected="value2"
        >
            <SegmentedToggle.Icon icon={<IconChart />} value="value1" />
            <SegmentedToggle.Icon icon={<IconUser />} value="value2" />
        </SegmentedToggle>
        <SegmentedToggle
            handleClick={() => ({})}
            labelId="Icons with label"
            selected="value1"
        >
            <SegmentedToggle.Icon icon={<IconChart />} value="value1" />
            <SegmentedToggle.Icon icon={<IconUser />} value="value2" />
        </SegmentedToggle>
    </Spacer>
);
Variants.parameters = { ...disableControls() };
