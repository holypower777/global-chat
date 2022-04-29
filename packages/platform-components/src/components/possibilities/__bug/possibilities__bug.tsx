import b from 'b_';
import cx from 'classnames';
import React from 'react';
import { animated } from 'react-spring';

import { IconBug } from '../../icon/icon';
import Text from '../../text/text';
import { PossibilityProps } from '../possibilities';

import './possibilities__bug.scss';

const BugPossibility = ({ style, disabled = false }: PossibilityProps) => {

    return (
        <animated.a
            className={cx(b('possibility', { disabled }), b('possibility', 'bug'))}
            href="https://github.com/holypower777/global-chat/issues/new/choose"
            onClick={(e) => e.stopPropagation()}
            style={style}
            target="_blank"
        >
            <Text id="possibilities.bug" />
            <IconBug />
        </animated.a>
    );
};

export default BugPossibility;
