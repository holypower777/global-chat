import b from 'b_';
import React from 'react';

import { H3, IconEyeSlash, LINKS, Text } from '../../../..';
import { MixProps } from '../../../typings';
import Plug from '../plug';

const PlugDonation = ({ ...props }: MixProps) => (
    <Plug plu="donation" {...props}>
        <H3 id="plug.userHidden.header" weight={Text.WEIGHT.M} />
        <Text
            id="plug.userHidden"
            values={{ //@ts-ignore
                link: (val) =>
                    (<a className={b('plug', 'link')} href={LINKS.BOOSTY} target="_blank">{val}</a>),
            }}
        />
        <IconEyeSlash height={70} width={70} />
    </Plug>
);

export default PlugDonation;
