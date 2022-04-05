import b from 'b_';
import cx from 'classnames';
import React from 'react';

import { IconGithub } from '../../icon/icon';

const GithubPossibility = () => {
    return (
        <div className={cx('possibility', b('possibility', 'github'))}>
            <IconGithub />
        </div>
    );
};

export default GithubPossibility;
