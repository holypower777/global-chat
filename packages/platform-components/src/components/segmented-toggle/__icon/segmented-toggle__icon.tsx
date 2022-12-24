import b from 'b_';
import cx from 'classnames';
import React, { ReactNode } from 'react';

import { MixProps, SimpleCallback } from '../../../typings';

import './segmented-toggle__icon.scss';

export interface SegmentedToggleIconProps extends MixProps {
    /** Option unique id. Serves for changing options. */
    value: string;
    /** Accepts only icons as child item. */
    icon: ReactNode;
    /** Set the handler to handle click event */
    handleClick?: SimpleCallback;
    /** Whether the option is active */
    active?: boolean;
}

const SegmentedToggleIcon = ({
    value,
    handleClick,
    icon,
    active = false,
    mix,
}: SegmentedToggleIconProps) => {
    return (
        <button
            className={cx(b('segmented-toggle', 'icon', { active }), mix)}
            data-testid={b('segmented-toggle', 'icon')}
            onClick={handleClick}
            value={value}
        >
            {icon}
        </button>
    );
};

export default SegmentedToggleIcon;
