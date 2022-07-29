import b from 'b_';
import cx from 'classnames';
import React, { MouseEventHandler, ReactNode } from 'react';

import './icon.scss';

export interface SingleIconProps {
    handleClick?: MouseEventHandler<HTMLElement>;
    title?: string;
    mix?: string;
}

interface IconProps extends SingleIconProps {
    ico: string
    hidden?: boolean;
    mix?: string;
    mods?: Record<string, unknown>;
    theme?: string;
    children?: ReactNode | Array<ReactNode>;
}

const Icon = ({ hidden, ico, mix, mods={}, theme, handleClick, children, ...props }: IconProps) => {
    const className = b('icon', ico, { hidden, theme, ...mods });

    return (
        <i className={cx('icon', className, mix)} onClick={handleClick} {...props}>
            {children}
        </i>
    );
};

export default Icon;
export { default as IconArrow } from './__arrow/icon__arrow';
export { default as IconBell } from './__bell/icon__bell';
export { default as IconCategory } from './__category/icon__category';
export { default as IconChart } from './__chart/icon__chart';
export { default as IconCircleExc } from './__circle-exc/icon__circle-exc';
export { default as IconCircleTick } from './__circle-tick/icon__circle-tick';
export { default as IconCog } from './__cog/icon__cog';
export { default as IconCross } from './__cross/icon__cross';
export { default as IconDonate } from './__donate/icon__donate';
export { default as IconDots } from './__dots/icon__dots';
export { default as IconEyeSlash } from './__eye-slash/icon__eye-slash';
export { default as IconEz } from './__ez/icon__ez';
export { default as IconHierarchy } from './__hierarchy/icon__hierarchy';
export { default as IconLike } from './__like/icon__like';
export { default as IconLock } from './__lock/icon__lock';
export { default as IconMessage } from './__message/icon__message';
export { default as IconMessageAdd } from './__message-add/icon__message-add';
export { default as IconMessageRemove } from './__message-remove/icon__message-remove';
export { default as IconMessageText } from './__message-text/icon__message-text';
export { default as IconPause } from './__pause/icon__pause';
export { default as IconReply } from './__reply/icon__reply';
export { default as IconSearch } from './__search/icon__search';
export { default as IconSearchZoomOut } from './__search-zoom-out/icon__search-zoom-out';
export { default as IconSettings } from './__settings/icon__settings';
export { default as IconStar } from './__star/icon__star';
export { default as IconTime } from './__time/icon__time';
export { default as IconTriangleExc } from './__triangle-exc/icon__triangle-exc';
export { default as IconTwitch } from './__twitch/icon__twitch';
export { default as IconTwitchtracker } from './__twitchtracker/icon__twitchtracker';
export { default as IconUser } from './__user/icon__user';
