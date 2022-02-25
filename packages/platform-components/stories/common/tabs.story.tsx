import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import Tab from '../../src/components/tabs/__tab/tabs__tab';
import Tabs from '../../src/components/tabs/tabs';
import { STORY_GROUPS } from '../constants';

const StoryTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
                <Tab label="tab1" />
                <Tab label="tab2" />
                <Tab label="tab3" />
            </Tabs>
        </div>
    );
};

storiesOf(STORY_GROUPS.common, module)
    .add('Tabs', StoryTabs);
