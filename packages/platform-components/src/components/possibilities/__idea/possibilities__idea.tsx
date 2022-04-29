import b from 'b_';
import cx from 'classnames';
import React from 'react';
import { animated } from 'react-spring';

import { IconIdea } from '../../icon/icon';
import Text from '../../text/text';
import { PossibilityProps } from '../possibilities';

const IdeaPossibility = ({ style, disabled = false }: PossibilityProps) => {
    return (
        <animated.a 
            className={cx(b('possibility', { disabled }), b('possibility', 'idea'))} 
            href="https://github.com/holypower777/global-chat/discussions"
            onClick={(e) => e.stopPropagation()}
            style={style}
            target="_blank"
        >
            <Text id="possibilities.idea" />
            <IconIdea />
        </animated.a>
    );
};

export default IdeaPossibility;
