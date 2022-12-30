import { fireEvent } from '@testing-library/react';
import b from 'b_';
import '@testing-library/jest-dom';
import React from 'react';

import { renderWithIntl } from '../../utils';
import { TEXT_TAG } from '../constants';

import Text, { TextProps } from './text';

const setup = ({ ...props }: TextProps) => {
    const utils = renderWithIntl(<Text {...props} />);
    const text = utils.getByTestId('text');
    return {
        text,
        ...utils,
    };
};

const defaultText = 'Lorem ipsum dolor sit amet';
const defaultExternalLink = 'https://www.twitch.tv/';
const defaultLink = '/about';

describe('text', () => {
    it('handle click acts normally', () => {
        const handleClick = jest.fn();
        const { text } = setup({ handleClick, children: 'Text' });
        fireEvent.click(text);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('must be uppercase', () => {
        const { text } = setup({ id: 'simpleText', uppercase: true });
        expect(text).toHaveClass(b('text', { uppercase: true }));
    });

    describe('tags', () => {
        it('default span tag', () => {
            const { text } = setup({ id: 'simpleText' });
            expect(text).toContainHTML(
                `<span class="${b('text', {
                    size: Text.SIZE.M,
                    weight: Text.WEIGHT.S,
                })}" data-testid="text">${defaultText}</span>`
            );
        });

        it('must return li tag', () => {
            const { text } = setup({ id: 'simpleText', tag: Text.TAG.LI });
            expect(text).toContainHTML(
                `<li class="${b('text', {
                    size: Text.SIZE.M,
                    weight: Text.WEIGHT.S,
                })}" data-testid="text">${defaultText}</li>`
            );
        });

        it('link to external resource', () => {
            const { text } = setup({
                id: 'simpleText',
                tag: TEXT_TAG.LINK,
                extLink: true,
                link: defaultExternalLink,
            });
            expect(text).toContainHTML(
                `<a class="${b('text', {
                    size: Text.SIZE.M,
                    weight: Text.WEIGHT.S,
                })}" data-testid="text" href="${defaultExternalLink}" target="_blank">${defaultText}</a>`
            );
        });

        it('link to external resource', () => {
            const { text } = setup({
                id: 'simpleText',
                tag: TEXT_TAG.LINK,
                extLink: false,
                link: defaultLink,
            });
            expect(text).toContainHTML(
                `<a class="${b('text', {
                    size: Text.SIZE.M,
                    weight: Text.WEIGHT.S,
                })}" data-testid="text" href="${defaultLink}">${defaultText}</a>`
            );
        });
    });

    describe('intl', () => {
        it('intl id renders propperly', () => {
            const { text } = setup({ id: 'simpleText' });
            expect(text).toHaveTextContent(defaultText);
        });

        it('intl id with values works propperly', () => {
            const { text } = setup({ id: 'textWithValues', values: { name: 'hello' } });
            expect(text).toHaveTextContent('Lorem hello dolor sit amet');
        });

        it('intl id with children renders both, intl first', () => {
            const { text } = setup({ id: 'simpleText', children: 'hello' });
            expect(text).toHaveTextContent(`${defaultText}hello`);
        });
    });
});
