import '@testing-library/jest-dom';
import React from 'react';

import { renderWithIntl } from '../../utils';

import ChatDate, { ChatProps } from './chat-date';

const setup = ({ ...props }: ChatProps) => {
    const { getByTestId } = renderWithIntl(<ChatDate {...props} />);
    const chatDate = getByTestId('chat-date');
    return chatDate;
};

describe('chat-date', () => {
    describe('displays right date out of timestamp', () => {
        it('1643708946 -> 01.02.2022', () => {
            const chatDate = setup({ date: new Date(1643708946 * 1000) });
            expect(chatDate).toHaveTextContent('01.02.2022');
        });

        it('1635673746 -> 31.10.2021', () => {
            const chatDate = setup({ date: new Date(1635673746 * 1000) });
            expect(chatDate).toHaveTextContent('31.10.2021');
        });
    });
});
