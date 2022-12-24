/* eslint-disable react/no-multi-comp */
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { disableControls, selectControls } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';
import Text from '../text/text';

import Hint from './hint';

export default {
    title: 'Platform Components/Overlays/Hint',
    component: Hint,
} as Meta<typeof Hint>;

export const Overview: StoryFn<typeof Hint> = (args) => (
    <StoryOverview
        componentName="Hint"
        notOkList={[
            'Don’t Use it to provide additional information about interactive controls',
            'Don’t use it to provide lengthy information. Recommended message length: less than 35 characters.',
        ]}
        okList={['Use it to provide a hint for a specific element.']}
        usage="Used to involve the user in some feature"
    >
        <Hint {...args}>
            <Text>Hint to that element is shown</Text>
        </Hint>
    </StoryOverview>
);
Overview.args = {
    textId: 'title.common',
    direction: Hint.DIRECTION.RIGHT,
    width: 256,
};
Overview.argTypes = {
    direction: selectControls(Object.values(Hint.DIRECTION)),
};

export const Variants: StoryFn<typeof Hint> = () => (
    <Spacer gapSize={Spacer.GAP.L} style={{ alignItems: 'center' }}>
        <div style={{ marginTop: 100 }}>
            <Hint direction={Hint.DIRECTION.TOP} show textId="title.common">
                <Text>direction top</Text>
            </Hint>
        </div>
        <div>
            <Hint direction={Hint.DIRECTION.LEFT} show textId="title.common">
                <Text>direction left</Text>
            </Hint>
        </div>
        <div>
            <Hint direction={Hint.DIRECTION.RIGHT} show textId="title.common">
                <Text>direction right</Text>
            </Hint>
        </div>
        <div>
            <Hint direction={Hint.DIRECTION.BOTTOM} show textId="chat.userCard.mostSentMessages">
                <Text>direction bottom</Text>
            </Hint>
        </div>
    </Spacer>
);
Variants.parameters = { ...disableControls() };
