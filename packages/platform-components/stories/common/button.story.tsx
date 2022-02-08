import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import b from 'b_';
import React from 'react';

import { IconTwitch } from '../..';
import Button from '../../src/components/button/button';
import { H3 } from '../../src/components/header-text/header-text';
import { STORY_GROUPS } from '../constants';

import './common.scss';

const StoryButton = () => {
    return (
        <div className="button-group">
            <H3>Button with changable knobs</H3>
            <div>
                <Button
                    disabled={boolean('disabled', false)}
                    href={text('href', '')}
                    size={select('size', Object.values(Button.SIZE), Button.SIZE.L)}
                    theme={select('theme', Object.values(Button.THEME), Button.THEME.light)}
                >
                    Button
                </Button>
            </div>
            <H3>Light theme buttons</H3>
            <div className={b('button-group', 'with-theme')}>
                <Button size={Button.SIZE.L} theme={Button.THEME.light}>
                    Light Button L
                </Button>
                <Button size={Button.SIZE.M} theme={Button.THEME.light}>
                    Light Button M
                </Button>
                <Button size={Button.SIZE.S} theme={Button.THEME.light}>
                    Light Button S
                </Button>
            </div>
            <H3>Dark theme buttons</H3>
            <div className={b('button-group', 'with-theme')}>
                <Button size={Button.SIZE.L} theme={Button.THEME.dark}>
                    Dark Button L
                </Button>
                <Button size={Button.SIZE.M} theme={Button.THEME.dark}>
                    Dark Button M
                </Button>
                <Button size={Button.SIZE.S} theme={Button.THEME.dark}>
                    Dark Button S
                </Button>
            </div>
            <H3>Disabled button</H3>
            <div className={b('button-group', 'with-theme')}>
                <Button disabled size={Button.SIZE.L} theme={Button.THEME.dark}>
                    Disabled Dark Button L
                </Button>
                <Button disabled size={Button.SIZE.L} theme={Button.THEME.light}>
                    Disabled Light Button L
                </Button>
            </div>
            <H3>Button with icon</H3>
            <div className={b('button-group', 'with-icon')}>
                <Button icon={<IconTwitch />} theme={Button.THEME.dark}>
                    Dark Button with icon
                </Button>
                <Button icon={<IconTwitch />} size={Button.SIZE.M} theme={Button.THEME.light}>
                    Light Button with icon
                </Button>
                <Button disabled icon={<IconTwitch />} size={Button.SIZE.S}>
                    Disabled Button with icon
                </Button>
            </div>
        </div>
    );
};

storiesOf(STORY_GROUPS.common, module)
    .addDecorator(withKnobs)
    .add('Button', StoryButton);
