import b from 'b_';
import cx from 'classnames';
import React, { useState } from 'react';
import Draggable from 'react-draggable';

import { IconMoreCircle } from '../icon/icon';

import BugPossibility from './__bug/possibilities__bug';
import DonatePossibility from './__donate/possibility__donate';

import './possibilities.scss';

const Possibilities = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Draggable>
            <div className="possibilities">
                <div className={cx('possibility', b('possibility', 'more', { expanded }))}>
                    <IconMoreCircle handleClick={() => setExpanded(!expanded)} />
                </div>
                {expanded && <div className={b('possibilities', 'expanded')}>
                    <DonatePossibility />
                    <BugPossibility />
                </div>}
            </div>
        </Draggable>
    );
};

export default Possibilities;
