import { render } from '@testing-library/react';
import b from 'b_';
import '@testing-library/jest-dom';
import React from 'react';

import Spin, { SpinProps } from './spin';

const setup = ({ ...props }: SpinProps) => {
    const utils = render(<Spin {...props} />);
    const spin = utils.getByTestId('spin');
    return {
        spin,
        ...utils,
    };
};

describe('spin', () => {
    it('hidden props', () => {
        const { spin } = setup({ hidden: true });
        expect(spin).toHaveClass(b('spin', { hidden: true }));
    });
});
