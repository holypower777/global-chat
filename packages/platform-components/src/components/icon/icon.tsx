import b from 'b_';
import cx from 'classnames';
import React, { MouseEventHandler, ReactNode } from 'react';

import './icon.scss';

export interface SingleIconProps {
    handleClick?: MouseEventHandler<HTMLElement>;
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
export { default as IconUser } from './__user/icon__user';
export { default as IconEz } from './__ez/icon__ez';
export { default as IconTwitch } from './__twitch/icon__twitch';
export { default as IconSearch } from './__search/icon__search';
export { default as IconCategory } from './__category/icon__category';
export { default as IconCog } from './__cog/icon__cog';
export { default as IconBug } from './__bug/icon__bug';
export { default as IconDonate } from './__donate/icon__donate';
export { default as IconMoreCircle } from './__more-circle/icon__more-circle';
