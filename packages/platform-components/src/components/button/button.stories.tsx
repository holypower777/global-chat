import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { disableControls, selectControls, sizeProps } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';
import { IconChart } from '../icon/icon';

import Button from './button';

export default {
    title: 'Platform Components/Common/Button',
    component: Button,
} as Meta<typeof Button>;

export const Overview: StoryFn<typeof Button> = (args) => (
    <StoryOverview
        componentName="Button"
        notOkList={[
            'Don’t use it for links. Use <NavButton /> instead.',
            'Don’t use it for external links too. Use <ExternalNavButton /> instead.',
        ]}
        okList={[
            'Use it to list actions users can take in a page or a widget.',
            'Have one primary action at a time. Actions around it should be in lower priority and style.',
        ]}
        usage="Button is an interactive element that allows users to trigger all primary and secondary actions."
    >
        <Button {...args}>Button</Button>
    </StoryOverview>
);
Overview.args = {
    block: false,
    disabled: false,
    loading: false,
    size: Button.SIZE.M,
    theme: Button.THEME.LIGHT,
};
Overview.argTypes = {
    ...sizeProps(),
    theme: selectControls(Object.values(Button.THEME)),
};

export const Sizes: StoryFn<typeof Button> = () => (
    <Spacer>
        <Button block size={Button.SIZE.M}>
            Size M block width
        </Button>
        <Spacer direction="row">
            <Button size={Button.SIZE.L}>Size L</Button>
            <Button size={Button.SIZE.M}>Size M</Button>
            <Button size={Button.SIZE.S}>Size S</Button>
        </Spacer>
        <Spacer direction="row">
            <Button icon={<IconChart />} size={Button.SIZE.L} />
            <Button icon={<IconChart />} size={Button.SIZE.M} />
            <Button icon={<IconChart />} size={Button.SIZE.S} />
        </Spacer>
    </Spacer>
);
Sizes.parameters = { ...disableControls() };

export const Themes: StoryFn<typeof Button> = () => (
    <Spacer direction="row">
        <Button theme={Button.THEME.LIGHT}>Light theme</Button>
        <Button theme={Button.THEME.DARK}>Dark theme</Button>
        <Button theme={Button.THEME.TWITCH}>Twitch theme</Button>
    </Spacer>
);
Themes.parameters = { ...disableControls() };

export const Variants: StoryFn<typeof Button> = () => (
    <Spacer>
        <Button disabled>Disabled</Button>
        <Spacer direction="row">
            <Button loading theme={Button.THEME.LIGHT}>
                Loading light
            </Button>
            <Button loading theme={Button.THEME.DARK}>
                Loading dark
            </Button>
            <Button loading theme={Button.THEME.TWITCH}>
                Loading twitch
            </Button>
        </Spacer>
        <Button prefix={<IconChart />}>With prefix</Button>
        <Button suffix={<IconChart />}>With suffix</Button>
        <Button icon={<IconChart />} />
    </Spacer>
);
Variants.parameters = { ...disableControls() };
