import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useEffect, useRef, useState } from 'react';

import Heatmap from '../../src/components/heatmap/heatmap';
import { STORY_GROUPS } from '../constants';

import values from './heatmapData';

const StoryHeatmap = () => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(parentRef.current!.offsetWidth);
    }, [parentRef]);

    return (
        <div ref={parentRef} style={{ width: 400 }}>
            {width && <Heatmap
                gutterSize={number('Gutter size', 2)}
                showMonthLabel={boolean('Show month label', true)}
                showWeekLabel={boolean('Show week label', true)}
                values={values}
                width={number('Width', width, { min: 0, max: 450, range: true })}
            />}
        </div>
    );
};

storiesOf(STORY_GROUPS.common, module)
    .addDecorator(withKnobs)
    .add('Heatmap', StoryHeatmap);
