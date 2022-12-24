import b from 'b_';
import React from 'react';
import { useTimer } from 'react-timer-hook';

import { H3, IconLock, LINKS, Text } from '../../../..';
import { MixProps } from '../../../typings';
import Plug from '../plug';

interface PlugLimitsProps extends MixProps {
    expiryTimestamp?: Date;
}

const PlugLimits = ({
    expiryTimestamp = new Date(new Date().getTime() + 60 * 60 * 24 * 1000),
    ...props
}: PlugLimitsProps) => {
    const { seconds, minutes, hours, isRunning } = useTimer({ expiryTimestamp });

    return (
        <Plug plu="limits" {...props}>
            {isRunning ? (
                <>
                    <H3
                        id="plug.limits.header"
                        values={{ time: `${hours}:${minutes}:${seconds}` }}
                        weight={Text.WEIGHT.M}
                    />
                    <Text
                        id="plug.limits"
                        values={{
                            //@ts-ignore
                            boosty: (val) => (
                                <a
                                    className={b('plug', 'link')}
                                    href={LINKS.BOOSTY}
                                    target="_blank"
                                >
                                    {val}
                                </a>
                            ),
                        }}
                    />
                    <IconLock height={70} width={70} />
                </>
            ) : null}
        </Plug>
    );
};

export default PlugLimits;
