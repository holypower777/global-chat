import b from 'b_';
import React from 'react';

import { H3, IconHierarchy, LINKS, Text } from '../../../..';
import { MixProps } from '../../../typings';
import Plug from '../plug';

const PlugInternalError = ({ ...props }: MixProps) => (
    <Plug plu="internal-error" {...props}>
        <H3 id="plug.internalError.header" weight={Text.WEIGHT.M} />
        <Text
            id="plug.internalError"
            values={{
                //@ts-ignore
                reload: (val) => (
                    <span className={b('plug', 'link')} onClick={() => window.location.reload()}>
                        {val}
                    </span>
                ), //@ts-ignore
                bug: (val) => (
                    <a className={b('plug', 'link')} href={LINKS.BUG_REPORT} target="_blank">
                        {val}
                    </a>
                ),
            }}
        />
        <IconHierarchy height={70} width={70} />
    </Plug>
);

export default PlugInternalError;
