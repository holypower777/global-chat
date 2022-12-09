import b from 'b_';
import React from 'react';

import { disableControls } from '../__helpers__';
import { STORIES } from '../../src/components/constants';
import Text from '../../src/components/text/text';
import { Spacer } from '../../src/containers/stories';

import './ui-kit.scss';

const COLORS: Record<string, string> = {
    '$Black': '#000000',
    '$White': '#ffffff',
    '$WildSand': '#f6f6f6',
    '$AthensGray': '#e8eaee',
    '$Alto': '#e8e8e8',
    '$Mercury': '#e2e2e2',
    '$Silver': '#cccccc',
    '$Boulder': '#757575',
    '$Scorpion': '#5a5a5a',
    '$Twitch': '#772ce8',
    '$DaisyBash': '#5617b5',
    '$SmithApple': '#93e7a2',
    '$ChateauGreen': '#3ebe5e',
    '$SeaGreen': '#2f984a',
    '$GreenPea': '#216435',
    '$Bittersweet': '#ff6669',
    '$Twitchtracker': '#18bc9c',
};

export default {
    title: `${STORIES.pcUIKit}/Colors`,
};

export const Overview = () => (
    <Spacer direction="row">
        {Object.keys(COLORS).map((color) => (
            <div className={b('ui-kit', 'color')} key={color} >
                <div
                    className={b('ui-kit', 'color-block')}
                    style={{ backgroundColor: COLORS[color] }}
                />
                <Text>{color.slice(1)}</Text>
                <Text>{COLORS[color]}</Text>
            </div>
        ))}
    </Spacer>
);
Overview.parameters = { ...disableControls() };
