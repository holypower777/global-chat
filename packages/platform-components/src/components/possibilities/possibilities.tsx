import b from 'b_';
import cx from 'classnames';
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { animated, useSpring } from 'react-spring';

import { IconMoreCircle } from '../icon/icon';

import BugPossibility from './__bug/possibilities__bug';
import DonatePossibility from './__donate/possibilities__donate';
import GithubPossibility from './__github/possibilities__github';
import IdeaPossibility from './__idea/possibilities__idea';

import './possibilities.scss';

const Possibilities = () => {
    const [expanded, setExpanded] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const eventControl = (event: { type: string; }) => {
        if (event.type === 'mousemove' || event.type === 'touchmove') {
            setIsDragging(true);
        }

        if (event.type === 'mouseup' || event.type === 'touchend') {
            setTimeout(() => {
                setIsDragging(false);
            }, 100);
        }
    };

    const { width, opacity } = useSpring({
        from: { width: 0, opacity: 0 },
        to: { width: expanded ? 200 : 0, opacity: expanded ? 1 : 0 },
    });

    return (
        <Draggable onDrag={eventControl} onStop={eventControl}>
            <div className="possibilities">
                <div className={cx('possibility', b('possibility', 'more', { expanded }))}>
                    <IconMoreCircle handleClick={() => !isDragging && setExpanded(!expanded)} />
                </div>
                <animated.div 
                    className={b('possibilities', 'expanded')} 
                    style={{ width, opacity }}
                >
                    <DonatePossibility />
                    <BugPossibility />
                    <GithubPossibility />
                    <IdeaPossibility />
                </animated.div>
            </div>
        </Draggable>
    );
};

export default Possibilities;
