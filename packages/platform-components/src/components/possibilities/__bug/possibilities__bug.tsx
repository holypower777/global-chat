import b from 'b_';
import cx from 'classnames';
import React from 'react';

import { IconBug } from '../../icon/icon';

interface BugPossibilityProps {
    expanded?: boolean;
}

const BugPossibility = ({ expanded }: BugPossibilityProps) => {
    return (
        <div className={cx('possibility', b('possibility', 'bug', { expanded }))}>
            <IconBug />
        </div>
    );
};

export default BugPossibility;
