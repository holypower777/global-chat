import b from 'b_';
import cx from 'classnames';
import React from 'react';

import { IconIdea } from '../../icon/icon';

const IdeaPossibility = () => {
    return (
        <div className={cx('possibility', b('possibility', 'idea'))}>
            <IconIdea />
        </div>
    );
};

export default IdeaPossibility;
