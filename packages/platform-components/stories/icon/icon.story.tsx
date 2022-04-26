import { storiesOf } from '@storybook/react';

import * as Icons from '../../src/components/icon/icon';
import { STORY_GROUPS } from '../constants';

const stories = storiesOf(STORY_GROUPS.icons, module);
Object.keys(Icons).forEach((iconName) => {
    //@ts-ignore
    stories.add(iconName, Icons[iconName]);
});
