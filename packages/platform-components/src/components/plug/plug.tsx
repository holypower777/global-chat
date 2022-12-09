import b from 'b_';
import cx from 'classnames';
import React from 'react';

import { ChildrenProps, MixProps } from '../../typings';

import './plug.scss';

interface PlugProps extends ChildrenProps, MixProps {
    /** Plug name */
    plu: string;
    /** Plug BEM modifiers */
    mods?: Record<string, unknown>;
}

const Plug = ({
    mix,
    plu,
    mods,
    children,
}: PlugProps) => {
    return (
        <div
            className={cx('plug', b('plug', plu, mods), mix)}
            data-testid="plug"
        >
            {children}
        </div>
    );
};

export default Plug;
export { default as PlugDonation } from './__donation/plug__donation';
export { default as PlugInternalError } from './__internal-error/plug__internal-error';
export { default as PlugLimits } from './__limits/plug__limits';
export { default as PlugNoChatActivity } from './__no-chat-activity/plug__no-chat-activity';
export { default as PlugStats } from './__stats/plug__stats';
export { default as PlugUserNotFound } from './__user-not-found/plug__user-not-found';
