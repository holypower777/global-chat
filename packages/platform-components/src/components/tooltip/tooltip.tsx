import b from 'b_';
import React, { ReactNode, useState } from 'react';

import { TOOLTIP_DIRECTION, TOOLTIP_THEME } from '../constants';

import './tooltip.scss';

interface TooltipProps {
    children: ReactNode | Array<ReactNode>;
    title: string;
    arrow?: boolean;
    direction?: TOOLTIP_DIRECTION;
    theme?: TOOLTIP_THEME;
}

const Tooltip = ({ 
    children, 
    title,
    arrow = true, 
    direction = TOOLTIP_DIRECTION.top,
    theme = TOOLTIP_THEME.dark,
}: TooltipProps) => {
    const [show, setShow] = useState(false);

    return (
        <div className={b('tooltip', 'container')}>
            <div className={b('tooltip', 'box', { visible: show, direction, theme })}>
                {title}
                {arrow && <span className={b('tooltip', 'arrow', { direction, theme })}/>}
            </div>
            <div
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                {children}
            </div>
        </div>
    );
};

export default Tooltip;
