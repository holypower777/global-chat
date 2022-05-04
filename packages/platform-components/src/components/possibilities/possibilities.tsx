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
    const { size, backgroundImage } = useSpring({
        ref: springApi,
        from: { size: '10px', backgroundImage: 'url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFsSURBVEiJ7dY9S1xBFMbx367XRmKjKTYWBlmVdJpOCCQoGiX4OSzESv0WgfiFRGMg2KQLyfrSuLplErSRsOpuijuXXcPelxC2EHzgcA9z/2fO3LlzZgYm8QlNtFPsCMs6WsFxBt/EAaql0Pk37OBWby3iPcZRQh1b2EvhI2zihZBtMgXsVgOvgjUK8FNoRhjMGHm3bgKb+IX4cgHwv/SYoFCCtnjp5amE1j/y7bK4iN7lwC9RwWmwCmZzYlZRgwX8wmV49rKmuLASbYe2NP4KPzGffOoQpjGQMpo6fvzV9hTPU/g7nOA6+cl5c9rrfeGYfkxR0tc8fMd6zmhm8RvPMBb8mZyYDfEmqoWJHBjO8Bpvgp+nCbQiYb0WCGjrFGYR/hatflbyBeb6vVV8edCb3SjOI/dPqiwN6pxkRfgRVCIciovog/SjcwlP8FW86oaxht0UPhIX42eo4qPsa0sNb7s6WA5tWdeWfVT/AAnffyV1z4+BAAAAAElFTkSuQmCC\')' },
        to: {
            size: open ? 'auto' : '10px',
            backgroundImage: open ? 'none' : 'url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFsSURBVEiJ7dY9S1xBFMbx367XRmKjKTYWBlmVdJpOCCQoGiX4OSzESv0WgfiFRGMg2KQLyfrSuLplErSRsOpuijuXXcPelxC2EHzgcA9z/2fO3LlzZgYm8QlNtFPsCMs6WsFxBt/EAaql0Pk37OBWby3iPcZRQh1b2EvhI2zihZBtMgXsVgOvgjUK8FNoRhjMGHm3bgKb+IX4cgHwv/SYoFCCtnjp5amE1j/y7bK4iN7lwC9RwWmwCmZzYlZRgwX8wmV49rKmuLASbYe2NP4KPzGffOoQpjGQMpo6fvzV9hTPU/g7nOA6+cl5c9rrfeGYfkxR0tc8fMd6zmhm8RvPMBb8mZyYDfEmqoWJHBjO8Bpvgp+nCbQiYb0WCGjrFGYR/hatflbyBeb6vVV8edCb3SjOI/dPqiwN6pxkRfgRVCIciovog/SjcwlP8FW86oaxht0UPhIX42eo4qPsa0sNb7s6WA5tWdeWfVT/AAnffyV1z4+BAAAAAElFTkSuQmCC\')',
        },
    });
    const transApi = useSpringRef();
    const transition = useTransition(open ? ['donate', 'bug', 'github', 'idea', 'language'] : [], {
        ref: transApi,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' },
    });

    useChain(open ? [springApi, transApi] : [transApi, springApi], [0, 0]);
    useOnClickOutside(ref, () => setOpen(false));

    return (
        <animated.div
            className={b('possibilities', { open })}
            onClick={() => setOpen((o) => !o)}
            ref={ref}
            style={{ width: size, height: size, backgroundImage }}
        >
            {transition((style, item) => {
                switch (item) {
                    case 'github':
                        return <GithubPossibility style={style} />;
                    case 'donate':
                        return <DonatePossibility style={style} />;
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
