import React from 'react';

import { H3, IconSearchZoomOut, Text } from '../../../..';
import { MixProps } from '../../../typings';
import Plug from '../plug';

const PlugUserNotFound = ({ ...props }: MixProps) => (
    <Plug plu="user-not-found" {...props}>
        <H3 id="plug.userNotFound.header" weight={Text.WEIGHT.M} />
        <Text id="plug.userNotFound" />
        <IconSearchZoomOut height={70} width={70} />
    </Plug>
);

export default PlugUserNotFound;
