import React from 'react';

import { H3, IconMessageRemove, Text } from '../../../..';
import { MixProps } from '../../../typings';
import Plug from '../plug';

const PlugNoChatActivity = ({ ...props }: MixProps) => (
    <Plug plu="no-chat-activity" {...props}>
        <H3 id="plug.noChatActivity.header" weight={Text.WEIGHT.M} />
        <Text id="plug.noChatActivity" />
        <IconMessageRemove height={70} width={70} />
    </Plug>
);

export default PlugNoChatActivity;
