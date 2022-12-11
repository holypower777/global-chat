import b from 'b_';
import React from 'react';

import { SIZE } from '../../../components/constants';
import { ChildrenProps } from '../../../typings';

import './spacer.scss';

interface SpacerProps extends ChildrenProps {
    direction?: 'column' | 'row';
    gapSize?: SIZE;
    style?: React.CSSProperties;
}

const Spacer = ({ children, direction = 'column', gapSize = SIZE.M, style }: SpacerProps) => {
    return (
        <section className={b('spacer', { direction, gap: gapSize })} style={style}>
            {children}
        </section>
    );
};

Spacer.GAP = SIZE;

export default Spacer;
