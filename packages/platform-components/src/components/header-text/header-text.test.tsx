import { fireEvent } from '@testing-library/react';
import b from 'b_';
import '@testing-library/jest-dom';
import React from 'react';

import { renderWithIntl } from '../../utils';

import { H1, HProps } from './header-text';

const setup = ({ ...props }: HProps) => {
    const utils = renderWithIntl(<H1 {...props} />);
    const headerText = utils.getByTestId('header-text');
    return {
        headerText,
        ...utils,
    };
};

const defaultText = 'Lorem ipsum dolor sit amet';

describe('header-text', () => {
    it('handle click acts normally', () => {
        const handleClick = jest.fn();
        const { headerText } = setup({ handleClick, children: 'H1' });
        fireEvent.click(headerText);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('must be uppercase', () => {
        const { headerText } = setup({ id: 'simpleText', uppercase: true });
        expect(headerText).toHaveClass(b('header-text', { uppercase: true }));
    });

    it('must be capitalized', () => {
        const { headerText } = setup({ children: 'hello', capitalize: true });
        expect(headerText).toHaveClass(b('header-text', { capitalize: true }));
    });

    describe('intl', () => {
        it('intl id renders propperly', () => {
            const { headerText } = setup({ id: 'simpleText' });
            expect(headerText).toHaveTextContent(defaultText);
        });

        it('intl id omits children', () => {
            const { headerText } = setup({ id: 'simpleText', children: 'must be ommited' });
            expect(headerText).toHaveTextContent(defaultText);
        });

        it('intl id with values works propperly', () => {
            const { headerText } = setup({ id: 'textWithValues', values: { name: 'hello' } });
            expect(headerText).toHaveTextContent('Lorem hello dolor sit amet');
        });
    });
});
