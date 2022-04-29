import b from 'b_';
import cx from 'classnames';
import React from 'react';
import { animated } from 'react-spring';

import { IconGithub } from '../../icon/icon';
import Text from '../../text/text';
import { PossibilityProps } from '../possibilities';

const GithubPossibility = ({ style, disabled = false }: PossibilityProps) => {
    return (
        <animated.a 
            className={cx(b('possibility', { disabled }), b('possibility', 'github'))}
            href="https://github.com/holypower777/global-chat"
            onClick={(e) => e.stopPropagation()}
            style={style}
            target="_blank"
        >
            <Text id="possibilities.github" />
            <IconGithub />
        </animated.a>
    );
};

export default GithubPossibility;
