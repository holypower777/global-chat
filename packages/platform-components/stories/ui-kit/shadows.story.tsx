import { storiesOf } from '@storybook/react';
import React from 'react';

import { STORY_GROUPS } from '../constants';

import './ui-kit.scss';

const SHADOWS = {
    $shadow100: '0 0 1px 1px rgba(0, 0, 0, 0.02), 0 0.1px 0.3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2)',
    $shadow200: '0 0 1px 1px rgba(0, 0, 0, 0.02), 0 0.3px 0.5px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)',
    $shadow300: '0 0 1px 1px rgba(0, 0, 0, 0.02), 0 0.4px 0.8px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.2)',
    $shadow400: '0 0 1px 1px rgba(0, 0, 0, 0.01), 0 0.5px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.2)',
    $shadow500: '0 0 1px 1px rgba(0, 0, 0, 0.01), 0 0.8px 1.5px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.18)',
    $shadow600: '0 0 1px 1px rgba(0, 0, 0, 0.01), 0 1px 2px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.18)',
    $shadow700: '0 0 1px 1px rgba(0, 0, 0, 0.01), 0 1.5px 3px rgba(0, 0, 0, 0.1), 0 12px 24px rgba(0, 0, 0, 0.18)',
    $shadow800: '0 0 1px 1px rgba(0, 0, 0, 0.01), 0 2px 4px rgba(0, 0, 0, 0.1), 0 16px 32px rgba(0, 0, 0, 0.18)',
    $shadow900: '0 0 1px 1px rgba(0, 0, 0, 0.01), 0 3px 6px rgba(0, 0, 0, 0.1), 0 24px 48px rgba(0, 0, 0, 0.18)',
};

const Shadows = () => (
    <div className="ui-kit">
        {
            Object.keys(SHADOWS).map(shadow => (
                <div className="ui-kit__shadow" key={shadow} style={{ boxShadow: SHADOWS[shadow] }}>
                    {shadow}
                </div>
            ))
        }
    </div>
);

storiesOf(STORY_GROUPS.uiKit, module)
    .add('Shadows', Shadows);
