import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { IconCog } from '../../src/components/icon/icon';
import Popup from '../../src/components/popup/popup';
import { STORY_GROUPS } from '../constants';

const StoryPopup = () => (
    <div style={{ width: 300 }}>
        <Popup
            direction={select('direction', Object.values(Popup.DIRECTION), Popup.DIRECTION.left)}
            target={<IconCog />}
        >
            <div>kek</div>
        </Popup>
    </div>
);

storiesOf(STORY_GROUPS.common, module)
    .addDecorator(withKnobs)
    .add('Popup', StoryPopup);
