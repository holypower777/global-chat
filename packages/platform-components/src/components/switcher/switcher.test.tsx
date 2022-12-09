import { fireEvent, render, screen } from '@testing-library/react';
import b from 'b_';
import React from 'react';

import '@testing-library/jest-dom';
import Switcher, { SwitcherProps } from './switcher';

const setup = ({ ...props }: SwitcherProps) => {
    const utils = render(<Switcher {...props} />);
    const switcher = utils.getByTestId('switcher');
    return {
        switcher,
        ...utils,
    };
};

describe('switcher', () => {
    it('to be disabled', () => {
        const { switcher } = setup({ checked: true, disabled: true });
        expect(screen.getByTestId(b('switcher', 'input'))).toBeDisabled();
        expect(switcher).toHaveClass(b('switcher', { disabled: true }));
    });

    describe('checked', () => {
        it('to be checked', () => {
            setup({ checked: true });
            expect(screen.getByTestId(b('switcher', 'input'))).toBeChecked();
        });

        it('not to be checked', () => {
            setup({ checked: false });
            expect(screen.getByTestId(b('switcher', 'input'))).not.toBeChecked();
        });
    });

    describe('handle toggle', () => {
        it('acts normally', () => {
            let checked = false;
            // eslint-disable-next-line max-nested-callbacks
            const handleToggle = jest.fn(() => (checked = true));
            const { switcher } = setup({ checked, handleToggle });
            expect(screen.getByTestId(b('switcher', 'input'))).not.toBeChecked();
            fireEvent.click(switcher);
            expect(handleToggle).toBeCalledTimes(1);
            expect(checked).toBeTruthy();
        });

        it('doesn\'t trigger when toggle is disabled', () => {
            const handleToggle = jest.fn();
            const { switcher } = setup({ checked: false, disabled: true, handleToggle });
            fireEvent.click(switcher);
            expect(handleToggle).not.toHaveBeenCalled();
        });
    });
});
