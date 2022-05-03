import b from 'b_';
import cx from 'classnames';
import React from 'react';
import { animated } from 'react-spring';

import { IconDonate } from '../../icon/icon';
import Text from '../../text/text';
import { PossibilityProps } from '../possibilities';

const DonatePossibility = ({ style, disabled = false }: PossibilityProps) => {
    return (
        <animated.a 
            className={cx(b('possibility', { disabled }), b('possibility', 'donate'))}
            href="https://boosty.to/holypower77"
            onClick={(e) => e.stopPropagation()}
            style={style}
            target="_blank"
        >
            <Text id="possibilities.donate" />
            <IconDonate />
        </animated.a>
    );
};

export default DonatePossibility;
