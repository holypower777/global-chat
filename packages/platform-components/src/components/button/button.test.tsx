import { fireEvent, render, screen } from '@testing-library/react';
import b from 'b_';
import '@testing-library/jest-dom';
import React from 'react';

import { IconChart, IconCross } from '../icon/icon';

import Button, { ButtonProps } from './button';

const setup = ({ ...props }: ButtonProps) => {
    const utils = render(<Button {...props}>Button</Button>);
    const button = utils.getByTestId('button') as HTMLButtonElement;
    return {
        button,
        ...utils,
    };
};

describe('button', () => {
    it('if icon provided, children must be ommited', () => {
        const { button } = setup({ icon: <IconChart /> });
        expect(button).not.toHaveTextContent('Button');
        expect(button).toContainElement(screen.getByTestId(b('icon', 'chart')));
    });

    it('to be disabled', () => {
        const { button } = setup({ disabled: true });
        expect(button).toBeDisabled();
    });

    describe('handle click', () => {
        it('acts normally', () => {
            const handleClick = jest.fn();
            const { button } = setup({ handleClick });

            fireEvent.click(button);
            expect(handleClick).toHaveBeenCalledTimes(1);
        });

        it('doesn\'t trigger when button is disabled', () => {
            const handleClick = jest.fn();
            const { button } = setup({ handleClick, disabled: true });

            fireEvent.click(button);
            expect(handleClick).not.toHaveBeenCalled();
        });

        it('doesn\'t trigger when button is loading', () => {
            const handleClick = jest.fn();
            const { button } = setup({ handleClick, loading: true });

            fireEvent.click(button);
            expect(handleClick).not.toHaveBeenCalled();
        });

        it('doesn\'t trigger when button both is loading and is disabled', () => {
            const handleClick = jest.fn();
            const { button } = setup({ handleClick, loading: true, disabled: true });

            fireEvent.click(button);
            expect(handleClick).not.toHaveBeenCalled();
        });
    });

    describe('suffix & prefix', () => {
        it('contains prefix', () => {
            const { button } = setup({ prefix: <IconChart /> });
            expect(button).toContainElement(screen.getByTestId(b('icon', 'chart')));
        });

        it('contains suffix', () => {
            const { button } = setup({ suffix: <IconChart /> });
            expect(button).toContainElement(screen.getByTestId(b('icon', 'chart')));
        });

        it('suffix and prefix provided, prefix must be ommited', () => {
            const { button } = setup({ prefix: <IconChart />, suffix: <IconCross /> });

            expect(screen.getAllByTestId('icon')).toHaveLength(1);
            expect(button).toContainElement(screen.getByTestId(b('icon', 'cross')));
        });
    });
});
