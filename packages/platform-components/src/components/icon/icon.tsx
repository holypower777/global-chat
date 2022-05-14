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
export { default as IconBug } from './__bug/icon__bug';
export { default as IconCategory } from './__category/icon__category';
export { default as IconCircleExc } from './__circle-exc/icon__circle-exc';
export { default as IconCog } from './__cog/icon__cog';
export { default as IconCross } from './__cross/icon__cross';
export { default as IconDonate } from './__donate/icon__donate';
export { default as IconDots } from './__dots/icon__dots';
export { default as IconEz } from './__ez/icon__ez';
export { default as IconFlagRu } from './__flag-ru/icon__flag-ru';
export { default as IconFlagUsa } from './__flag-usa/icon__flag-usa';
export { default as IconGithub } from './__github/icon__github';
export { default as IconIdea } from './__idea/icon__idea';
export { default as IconMoreCircle } from './__more-circle/icon__more-circle';
export { default as IconPause } from './__pause/icon__pause';
export { default as IconReply } from './__reply/icon__reply';
export { default as IconSearch } from './__search/icon__search';
export { default as IconSquareTick } from './__square-tick/icon__square-tick';
export { default as IconTime } from './__time/icon__time';
export { default as IconTriangleExc } from './__triangle-exc/icon__triangle-exc';
export { default as IconTwitch } from './__twitch/icon__twitch';
export { default as IconUser } from './__user/icon__user';
