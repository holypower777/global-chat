import { storiesOf } from '@storybook/react';
import React from 'react';

import { HEADER_TEXT_SIZE, TEXT_SIZE, TEXT_WEIGHT } from '../../src/components/constants';
import * as headers from '../../src/components/header-text/header-text';
import Text from '../../src/components/text/text';
import { STORY_GROUPS } from '../constants';

import './ui-kit.scss';  

const headlines = [
    [
        { tag: 'H1', size: HEADER_TEXT_SIZE.L, weight: TEXT_WEIGHT.S },
        { tag: 'H1', size: HEADER_TEXT_SIZE.L, weight: TEXT_WEIGHT.M },
        { tag: 'H1', size: HEADER_TEXT_SIZE.L, weight: TEXT_WEIGHT.L },
    ],
    [
        { tag: 'H2', size: HEADER_TEXT_SIZE.M, weight: TEXT_WEIGHT.S },
        { tag: 'H2', size: HEADER_TEXT_SIZE.M, weight: TEXT_WEIGHT.M },
        { tag: 'H2', size: HEADER_TEXT_SIZE.M, weight: TEXT_WEIGHT.L },
    ],
    [
        { tag: 'H3', size: HEADER_TEXT_SIZE.S, weight: TEXT_WEIGHT.S },
        { tag: 'H3', size: HEADER_TEXT_SIZE.S, weight: TEXT_WEIGHT.M },
        { tag: 'H3', size: HEADER_TEXT_SIZE.S, weight: TEXT_WEIGHT.L },
    ],
    [
        { tag: 'H4', size: HEADER_TEXT_SIZE.S, weight: TEXT_WEIGHT.S },
        { tag: 'H4', size: HEADER_TEXT_SIZE.S, weight: TEXT_WEIGHT.M },
        { tag: 'H4', size: HEADER_TEXT_SIZE.S, weight: TEXT_WEIGHT.L },
    ],
    [
        { tag: 'H5', size: HEADER_TEXT_SIZE.S, weight: TEXT_WEIGHT.S },
        { tag: 'H5', size: HEADER_TEXT_SIZE.S, weight: TEXT_WEIGHT.M },
        { tag: 'H5', size: HEADER_TEXT_SIZE.S, weight: TEXT_WEIGHT.L },
    ],
    [
        { tag: 'H6', size: HEADER_TEXT_SIZE.S, weight: TEXT_WEIGHT.S },
        { tag: 'H6', size: HEADER_TEXT_SIZE.S, weight: TEXT_WEIGHT.M },
        { tag: 'H6', size: HEADER_TEXT_SIZE.S, weight: TEXT_WEIGHT.L },
    ],
];

const texts = [
    [
        { size: TEXT_SIZE.XL, weight: TEXT_WEIGHT.S },
        { size: TEXT_SIZE.XL, weight: TEXT_WEIGHT.M },
        { size: TEXT_SIZE.XL, weight: TEXT_WEIGHT.L },
    ],
    [
        { size: TEXT_SIZE.L, weight: TEXT_WEIGHT.S },
        { size: TEXT_SIZE.L, weight: TEXT_WEIGHT.M },
        { size: TEXT_SIZE.L, weight: TEXT_WEIGHT.L },
    ],
    [
        { size: TEXT_SIZE.M, weight: TEXT_WEIGHT.S },
        { size: TEXT_SIZE.M, weight: TEXT_WEIGHT.M },
        { size: TEXT_SIZE.M, weight: TEXT_WEIGHT.L },
    ],
    [
        { size: TEXT_SIZE.S, weight: TEXT_WEIGHT.S },
        { size: TEXT_SIZE.S, weight: TEXT_WEIGHT.M },
        { size: TEXT_SIZE.S, weight: TEXT_WEIGHT.L },
    ],
    [
        { size: TEXT_SIZE.XS, weight: TEXT_WEIGHT.S },
        { size: TEXT_SIZE.XS, weight: TEXT_WEIGHT.M },
        { size: TEXT_SIZE.XS, weight: TEXT_WEIGHT.L },
    ],
];

const Wrapper = (groups, title, tagToComponentMapper, extraProps?) => (
    groups.map((group, groupIndex) => (
        <div className="ui-kit__group" key={groupIndex}>
            {
                group.map(({ tag, size, weight, props }, index) => {
                    const text = `${title} ${size.toUpperCase()}/${weight.toUpperCase()}`;

                    if (!tag) {
                        return (<Text 
                            key={index} 
                            size={size} 
                            tag={tag} 
                            weight={weight} 
                            {...props}
                            {...extraProps}
                        >{text}</Text>);
                    }

                    return tagToComponentMapper(tag)({ key: index, size, weight, children: text, ...props, ...extraProps });
                })
            }
        </div>
    ))
);

const headlineElements = Wrapper(headlines, 'Headers', (tag) => headers[tag]);
const headlineUppercaseElements = Wrapper(headlines, 'Caps Headers', (tag) => headers[tag], { uppercase: true });
const textElements = Wrapper(texts, 'Paragraph', () => Text);
const textUppercaseElements = Wrapper(texts, 'Caps', () => Text, { uppercase: true });

const units = [textElements, textUppercaseElements, headlineElements, headlineUppercaseElements];

const Typography = () => (
    <div className="ui-kit">
        {units.map((unit, unitIndex) => (   
            <div className="ui-kit__unit" key={unitIndex}>
                {unit}
            </div>
        ))}
    </div>
);

storiesOf(STORY_GROUPS.uiKit, module)
    .add('Typography', Typography);
