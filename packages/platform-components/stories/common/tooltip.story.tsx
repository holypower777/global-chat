import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { TOOLTIP_DIRECTION, TOOLTIP_THEME } from '../../src/components/constants';
import Tooltip from '../../src/components/tooltip/tooltip';
import { STORY_GROUPS } from '../constants';

const StoryTooltip = () => {
    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            height: '300px',
            width: '300px' }}
        >
            <Tooltip 
                arrow={boolean('arrow', true)}
                direction={select('direction', Object.values(TOOLTIP_DIRECTION), TOOLTIP_DIRECTION.top)}
                theme={select('theme', Object.values(TOOLTIP_THEME), TOOLTIP_THEME.dark)}
                title={text('title', 'Tooltip!')}
            >
                <button>Hover me!</button>
            </Tooltip>
        </div>
    );
};

storiesOf(STORY_GROUPS.common, module)
    .addDecorator(withKnobs)
    .add('Tooltip', StoryTooltip);
