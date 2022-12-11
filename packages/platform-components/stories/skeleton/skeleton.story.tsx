import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Skeleton from '../../src/components/skeleton/skeleton';
import { STORY_GROUPS } from '../constants';

const StorySkeleton = () => (
    <Skeleton 
        variant={select('variant', Skeleton.SKELETON_VARIANT, Skeleton.SKELETON_VARIANT.MESSAGE)}
    />
);

storiesOf(STORY_GROUPS.skeleton, module)
    .addDecorator(withKnobs)
    .add('Skeleton.DontTest', StorySkeleton);
