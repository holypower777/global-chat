import b from 'b_';
import React from 'react';
import { useTimer } from 'react-timer-hook';

import { LINKS, PLUG_TYPE, TEXT_WEIGHT } from '../constants';
import { H3 } from '../header-text/header-text';
import { IconEyeSlash, IconLock } from '../icon/icon';
import Text from '../text/text';

interface PlugProps {
    type: PLUG_TYPE;
    isAuth?: boolean;
    expiryTimestamp?: Date;
}

import './plug.scss';

const Plug = ({ type, isAuth, expiryTimestamp = new Date(new Date().getTime() + 60 * 60 * 24 * 1000) }: PlugProps) => {
    const { seconds, minutes, hours, isRunning } = useTimer({ expiryTimestamp });

    switch (type) {
        case PLUG_TYPE.DONATION:
            return (
                <div className="plug">
                    <H3 id="plug.userHidden.header" weight={TEXT_WEIGHT.M} />
                    <Text
                        id="plug.userHidden"
                        values={{ //@ts-ignore
                            link: (val) =>
                                (<a className={b('plug', 'link')} href={LINKS.BOOSTY} target="_blank">{val}</a>),
                        }}
                    />
                    <IconEyeSlash />
                </div>
            );
        case PLUG_TYPE.STATS:
            return (
                <div className="plug">
                    <H3 id="plug.stats.header" weight={TEXT_WEIGHT.M} />
                    <a className={b('plug', 'link')} href={LINKS.AUTH}>
                        <Text
                            id="plug.stats"
                            weight={Text.WEIGHT.M}
                        />
                    </a>
                    <IconEyeSlash />
                </div>
            );
        case PLUG_TYPE.LIMITS:
            return (
                <>
                    {isRunning && <div className="plug">
                        <H3
                            id="plug.limits.header"
                            values={{ time: `${hours}:${minutes}:${seconds}` }}
                            weight={TEXT_WEIGHT.M}
                        />
                        <Text
                            id={`plug.limits${isAuth ? '' : '.notAuth'}`}
                            values={{ //@ts-ignore
                                login: (val) =>
                                    (<a className={b('plug', 'link')} href={LINKS.AUTH}>{val}</a>), //@ts-ignore
                                boosty: (val) =>
                                    (<a className={b('plug', 'link')} href={LINKS.BOOSTY} target="_blank">{val}</a>),
                            }}
                        />
                        <IconLock />
                    </div>}
                </>
            );
        default:
            return null;
    }
};

Plug.TYPE = PLUG_TYPE;

export default Plug;
