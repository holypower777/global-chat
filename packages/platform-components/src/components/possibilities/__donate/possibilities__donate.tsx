import b from 'b_';
import cx from 'classnames';
import React from 'react';
import { animated } from 'react-spring';

import { IconDonate } from '../../icon/icon';
import Text from '../../text/text';
import { PossibilityProps } from '../possibilities';

const DonatePossibility = ({ style, disabled = false }: PossibilityProps) => {
    return (
        <animated.div 
            className={cx(b('possibility', { disabled }), b('possibility', 'donate'))}
            style={style}
        >
            <Text id="possibilities.donate" />
            <IconDonate />
        </animated.div>
    );
};

export default DonatePossibility;
