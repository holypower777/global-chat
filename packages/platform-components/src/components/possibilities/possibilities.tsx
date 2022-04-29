import b from 'b_';
import React, { useRef, useState } from 'react';
import { animated, useChain, useSpring, useSpringRef, useTransition } from 'react-spring';

import { useOnClickOutside } from '../../hooks';
import { UpdateSettingsProps } from '../../typings';

import BugPossibility from './__bug/possibilities__bug';
import DonatePossibility from './__donate/possibilities__donate';
import GithubPossibility from './__github/possibilities__github';
import IdeaPossibility from './__idea/possibilities__idea';
import LanguagePossibility from './__language/possibilities__language';

import './possibilities.scss';

export interface PossibilityProps {
    style: object;
    disabled?: boolean;
}

const Possibilities = ({ updateSettings }: UpdateSettingsProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const springApi = useSpringRef();
    const { size } = useSpring({
        ref: springApi,
        from: { size: '10px' },
        to: {
            size: open ? 'auto' : '10px',
        },
    });
    const transApi = useSpringRef();
    const transition = useTransition(open ? ['donate', 'bug', 'github', 'idea', 'language'] : [], {
        ref: transApi,
        trail: 200 / 4,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    });

    useChain(open ? [springApi, transApi] : [transApi, springApi], [0, 0]);
    useOnClickOutside(ref, () => setOpen(false));

    return (
        <animated.div
            className={b('possibilities', { open })}
            onClick={() => setOpen((o) => !o)}
            ref={ref}
            style={{ width: size, height: size }}
        >
            {transition((style, item) => {
                switch (item) {
                    case 'github':
                        return <GithubPossibility style={style} />;
                    case 'donate':
                        return <DonatePossibility disabled style={style} />;
                    case 'idea':
                        return <IdeaPossibility style={style} />;
                    case 'language':
                        return <LanguagePossibility style={style} updateSettings={updateSettings} />;
                    default:
                        return <BugPossibility style={style} />;
                }
            })}
        </animated.div>
    );
};

export default Possibilities;
