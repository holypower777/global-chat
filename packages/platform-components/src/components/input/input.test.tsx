import { fireEvent, render, screen } from '@testing-library/react';
import b from 'b_';
import '@testing-library/jest-dom';
import React from 'react';

import Input, { InputProps } from './input';

const setup = ({ ...props }: InputProps) => {
    const utils = render(<Input {...props} />);
    const input = utils.getByTestId(b('input', 'field')) as HTMLInputElement;
    return {
        input,
        ...utils,
    };
};

describe('input', () => {
    it('value change using defaul input approach', () => {
        const { input } = setup({});
        expect(input.value).toBe('');
        fireEvent.change(input, { target: { value: 'Good Day' } });
        expect(input.value).toBe('Good Day');
    });

    it('to be disabled', () => {
        const { input } = setup({ disabled: true });
        expect(input).toBeDisabled();
    });

    it('to be readonly', () => {
        const { input } = setup({ readonly: true });
        expect(input).toHaveProperty('readOnly', true);
    });

    it('to be required', () => {
        const { input } = setup({ required: true });
        expect(input).toBeRequired();
    });

    it('to have type password', () => {
        const { input } = setup({ type: 'password' });
        expect(input).toHaveProperty('type', 'password');
    });

    describe('enter press', () => {
        it('empty value must not trigger enter handler', () => {
            const handleEnterPress = jest.fn();
            const { input } = setup({ handleEnterPress });

            fireEvent.keyDown(input, { key: 'Enter' });
            expect(handleEnterPress).not.toHaveBeenCalled();
        });

        it('input with value must trigger enter handle one time', () => {
            const handleEnterPress = jest.fn();
            const { input } = setup({ handleEnterPress, value: 'not empty', handleChange: () => ({}) });

            fireEvent.keyDown(input, { key: 'Enter' });
            expect(handleEnterPress).toBeCalledTimes(1);
        });
    });

    it('to be in focus', () => {
        render(<Input autoFocus />);
        const inputWrapper = screen.getByTestId('input') as HTMLInputElement;
        expect(inputWrapper).toHaveClass(b('input', { focus: true }));
        expect(screen.getByTestId(b('input', 'field'))).toHaveFocus();
    });
});
