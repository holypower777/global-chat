import b from 'b_';
import cx from 'classnames';
import React, { ReactNode } from 'react';

import { MessageFormatPrimitiveValue, MixProps } from '../../typings';
import Text from '../text/text';

import SegmentedToggleButton from './__button/segmented-toggle__button';
import SegmentedToggleIcon from './__icon/segmented-toggle__icon';

import './segmented-toggle.scss';

interface SegmentedToggleProps extends MixProps {
    /** Intl id. Text to be shown as label. */
    labelId?: string;
    /** Intl values field. */
    values?: Record<string, MessageFormatPrimitiveValue>;
    /** Specifies whether an option is selected. */
    selected: string;
    /** Defines a callback function which is called every time option is clicked. 
     * Returns a selected element and its value. */
    handleClick: (value: string) => void;
    /** Accepts <SegmentedToggle.Icon/> or <SegmentedToggle.Button/> 
     * as child items to list down available options */
    children: ReactNode | Array<ReactNode>;
}

const SegmentedToggle = ({
    labelId,
    values = {},
    selected,
    children,
    handleClick,
    mix,
}: SegmentedToggleProps) => {
    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { // @ts-ignore
                active: child.props.value === selected,
                handleClick: () => handleClick(child.props.value),
            });
        }

        return child;
    });

    return (
        <div
            className={cx('segmented-toggle', mix)}
            data-testid="segmented-toggle"
        >
            {labelId && <Text 
                id={labelId} 
                mix={b('segmented-toggle', 'label')} 
                values={values}
            />}
            <div className={b('segmented-toggle', 'buttons')}>
                {childrenWithProps}
            </div>
        </div>
    );
};

SegmentedToggle.Button = SegmentedToggleButton;
SegmentedToggle.Icon = SegmentedToggleIcon;

export default SegmentedToggle;
