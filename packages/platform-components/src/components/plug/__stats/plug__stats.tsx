import b from 'b_';
import React from 'react';

import { H3, IconEyeSlash, LINKS, Text } from '../../../..';
import { MixProps } from '../../../typings';
import Plug from '../plug';

const PlugStats = ({ ...props }: MixProps) => (
    <Plug plu="stats" {...props}>
        <H3 id="plug.stats.header" weight={Text.WEIGHT.M} />
        <a className={b('plug', 'link')} href={LINKS.AUTH}>
            <Text id="plug.stats" weight={Text.WEIGHT.M} />
        </a>
        <IconEyeSlash height={70} width={70} />
    </Plug>
);

export default PlugStats;
