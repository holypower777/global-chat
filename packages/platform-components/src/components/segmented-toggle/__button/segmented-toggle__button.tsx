import b from 'b_';
import cx from 'classnames';
import React, { ReactNode } from 'react';

import { ChildrenProps, MixProps, SimpleCallback } from '../../../typings';

import './segmented-toggle__button.scss';

export interface SegmentedToggleButtonProps extends ChildrenProps, MixProps {
    /** Option unique id. Serves for changing options. */
    value: string;
    /** Set the handler to handle click event */
    handleClick?: SimpleCallback;
    /** Whether the option is active */
    active?: boolean;
    /** The prefix icon for the button. */
    prefix?: ReactNode;
}

const SegmentedToggleButton = ({
    value,
    handleClick,
    prefix,
    children,
    active = false,
    mix,
}: SegmentedToggleButtonProps) => {
    return (
        <button
            className={cx(b('segmented-toggle', 'button', { active }), mix)}
            data-testid={b('segmented-toggle', 'button')}
            onClick={handleClick}
            value={value}
        >
            {prefix}
            {children}
        </button>
    );
};

export default SegmentedToggleButton;
