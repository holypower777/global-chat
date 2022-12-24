import b from 'b_';
import cx from 'classnames';
import React from 'react';

import { ChildrenProps, MixProps, SimpleCallback } from '../../typings';
import { SIZE_EXTENDED } from '../constants';

import './icon.scss';

export interface SingleIconProps extends MixProps {
    /** Set the handler to handle click event */
    handleClick?: SimpleCallback | ((arg: unknown) => void);
    /** The title prop specifies extra information about an element. */
    title?: string;
    /** The size of the icon */
    size?: SIZE_EXTENDED;
    /** Set custom width of the icon. Note: size will be ignored */
    width?: number;
    /** Set custom height of the icon. Note: size will be ignored */
    height?: number;
    /** Whether the icon is clickable */
    clickable?: boolean;
}

export interface IconProps extends SingleIconProps, ChildrenProps {
    /** Icon name */
    ico: string;
    /** Icon BEM modifiers */
    mods?: Record<string, unknown>;
}

const Icon = ({
    ico,
    mods = {},
    children,
    mix,
    handleClick,
    title,
    size = SIZE_EXTENDED.S,
    width,
    height,
    clickable = false,
}: IconProps) => {
    const className = b('icon', ico, { ...mods });

    return (
        <i
            className={cx(className, b('icon', { size, clickable }), mix)}
            data-testid="icon"
            onClick={handleClick}
            style={{ width, height }}
            title={title}
        >
            {children}
        </i>
    );
};

Icon.SIZE = SIZE_EXTENDED;

export default Icon;
export { default as IconArrow } from './__arrow/icon__arrow';
export { default as IconBell } from './__bell/icon__bell';
export { default as IconCategory } from './__category/icon__category';
export { default as IconChart } from './__chart/icon__chart';
export { default as IconCircleCross } from './__circle-cross/icon__circle-cross';
export { default as IconCircleExc } from './__circle-exc/icon__circle-exc';
export { default as IconCircleTick } from './__circle-tick/icon__circle-tick';
export { default as IconCog } from './__cog/icon__cog';
export { default as IconCross } from './__cross/icon__cross';
export { default as IconDonate } from './__donate/icon__donate';
export { default as IconDots } from './__dots/icon__dots';
export { default as IconEyeSlash } from './__eye-slash/icon__eye-slash';
export { default as IconEz } from './__ez/icon__ez';
export { default as IconFeelsOkayMan } from './__feelsOkayMan/icon__feelsOkayMan';
export { default as IconForbidden } from './__forbidden/icon__forbidden';
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
