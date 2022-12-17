import b from 'b_';
import React, { useState } from 'react';
import { animated, config, useTransition } from 'react-spring';
import { Link } from 'wouter';

import { LINKS } from '../constants';
import { H1 } from '../header-text/header-text';
import Icon, { IconEz, IconFeelsOkayMan } from '../icon/icon';

import './logo.scss';

interface LogoProps {
    /** Whether the logo is always full size */
    full?: boolean;
}

const Logo = ({ full = false }: LogoProps) => {
    const [toggle, setToggle] = useState(false);
    const transitions = useTransition(toggle, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: toggle,
        delay: 400,
        config: config.molasses,
        onRest: () => setToggle(!toggle),
    });

    return (
        <Link className={b('logo', { adaptive: !full })} data-testid="logo" to={LINKS.HOME}>
            <H1
                id="logo.text"
                mix={b('logo', 'text', { desktop: true })}
                values={{ platform: <span className={b('logo', 'text', { twitch: true })}>Twitch</span> }}
            />
            {!full && <H1
                id="logo.text.small"
                mix={b('logo', 'text', { mobile: true })}
                values={{ platform: <span className={b('logo', 'text', { twitch: true })}>T</span> }}
            />}
            <div className={b('logo', 'smile')}>
                {transitions(({ opacity }, item) =>
                    item ? (
                        <animated.div
                            style={{
                                position: 'absolute',
                                opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
                            }}
                        >
                            <IconEz size={Icon.SIZE.XL} />
                        </animated.div>
                    ) : (
                        <animated.div
                            style={{
                                position: 'absolute',
                                opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
                            }}
                        >
                            <IconFeelsOkayMan size={Icon.SIZE.XL} />
                        </animated.div>
                    )
                )}
            </div>
        </Link>
    );
};

export default Logo;
