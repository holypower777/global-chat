import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { disableControls, selectControls } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';
import Text from '../text/text';

import * as Icons from './icon';

export default {
    title: 'Platform Components/Icons/Icons',
    component: Icons.default,
} as Meta<typeof Icons.default>;

export const Overview: StoryFn<typeof Icons.default> = (args) => (
    <StoryOverview componentName="Icon">
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

export const Sizes: StoryFn<typeof Icons.default> = () => (
    <Spacer>
        {Object.keys(Icons).map((iconName) => {
            if (iconName !== 'default') {
                return (
                    <Spacer key={iconName}>
                        <Text>{iconName}</Text>
                        <Spacer direction="row">
                            {Object.values(Icons.default.SIZE)
                                .reverse()
                                .map((size) =>
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
