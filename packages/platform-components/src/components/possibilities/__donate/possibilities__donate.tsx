import b from 'b_';
import cx from 'classnames';
import React from 'react';

import { IconDonate } from '../../icon/icon';

const DonatePossibility = () => {
    return (
        <div className={cx('possibility', b('possibility', 'donate'))}>
            <IconDonate />
        </div>
    );
};

export default DonatePossibility;
