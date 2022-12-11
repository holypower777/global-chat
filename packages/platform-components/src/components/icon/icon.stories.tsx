import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { disableControls, selectControls } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';
import { STORIES } from '../constants';
import Text from '../text/text';

import * as Icons from './icon';

export default {
    title: `${STORIES.pcIcons}/Icons`,
    component: Icons.default,
} as ComponentMeta<typeof Icons.default>;

export const Overview: ComponentStory<typeof Icons.default> = (args) => (
    <StoryOverview
        componentName="Icon"
    >
        <Icons.IconTwitch {...args} />
    </StoryOverview>
);
Overview.args = {
    size: Icons.default.SIZE.M,
    clickable: false,
    title: '',
};
Overview.argTypes = {
    size: selectControls(Object.values(Icons.default.SIZE)),
};

export const Sizes: ComponentStory<typeof Icons.default> = () => (
    <Spacer>
        {Object.keys(Icons).map((iconName) => {
            if (iconName !== 'default') {
                return (
                    <Spacer>
                        <Text>{iconName}</Text>
                        <Spacer direction="row">
                            {Object.values(Icons.default.SIZE).reverse().map((size) =>
                                //@ts-ignore
                                Icons[iconName]({ size })
                            )}
                        </Spacer>
                    </Spacer>
                );
            }
            return null;
        })}
    </Spacer>
);
Sizes.parameters = { ...disableControls() };
