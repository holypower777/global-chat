/* eslint-disable react/no-multi-comp */
import { Meta, StoryFn } from '@storybook/react';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { disableControls } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';

import UserCard from './user-card';

export default {
    title: 'Platform Components/Chat/UserCard',
    component: UserCard,
} as Meta<typeof UserCard>;

const commonArgs = {
    handleStarClick: () => ({}),
    handleSettingsUpdate: () => ({}),
};

export const Overview: StoryFn<typeof UserCard> = (args) => (
    <StoryOverview
        componentName="UserCard"
        notOkList={["Don't use it to display any additional information about user."]}
        okList={[
            'Use it only inside chat components.',
            'Use it to take control over chat settings over all the service.',
        ]}
        usage="UserCard is a toolbar with links and chat settings."
    >
        <UserCard {...args} />
    </StoryOverview>
);
Overview.args = {
    displayName: 'Gazely',
    isFavorite: false,
    isBroadcaster: false,
    ...commonArgs,
};

export const Variants: StoryFn<typeof UserCard> = () => (
    <Spacer>
        <UserCard displayName="Expanded" isBroadcaster isFavorite {...commonArgs} />
        <UserCard displayName="Gazely" isBroadcaster={false} isFavorite {...commonArgs} />
        <UserCard displayName="丂丹卜丨丁" isBroadcaster isFavorite {...commonArgs} />
        <UserCard
            displayName="paralel_vselenanya"
            isBroadcaster={false}
            isFavorite={false}
            {...commonArgs}
        />
        <UserCard
            displayName="podozritelnyi_polzovatel"
            isBroadcaster
            isFavorite={false}
            {...commonArgs}
        />
    </Spacer>
);
Variants.play = async () => {
    const toExpand = screen.getAllByTestId('user-card__header')[0];
    fireEvent.click(toExpand);
};
Variants.parameters = { ...disableControls() };
