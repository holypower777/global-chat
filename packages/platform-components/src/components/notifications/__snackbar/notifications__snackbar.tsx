import b from 'b_';
import cx from 'classnames';
import React, { ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { animated, SpringValue } from 'react-spring';

import { SimpleCallback, Notification } from '../../../typings';
import { SNACKBAR_TYPE } from '../../constants';
import { IconBell, IconCircleExc, IconCross, IconSquareTick, IconTriangleExc } from '../../icon/icon';

import './notifications__snackbar.scss';

interface NotificationsSnackbarProps {
    children?: ReactNode | Array<ReactNode> | null;
    id?: string | null;
    setRef: (ref: HTMLDivElement) => WeakMap<Notification, HTMLDivElement>;
    type?: SNACKBAR_TYPE;
    onClose?: SimpleCallback;
    mix?: string;
    disableCloseButton?: boolean;
    life?: SpringValue<string> | null;
    style?: object;
}

const NotificationsSnackbar = ({
    children,
    id,
    type = SNACKBAR_TYPE.ERROR,
    onClose = () => ({}),
    mix,
    disableCloseButton = false,
    life = null,
    style,
    setRef,
}: NotificationsSnackbarProps) => {
    const intl = useIntl();
    const content = id ? intl.formatMessage({ id }) : children;
    let icon;

    switch (type) {
        case SNACKBAR_TYPE.WARNING:
            icon = <IconTriangleExc />;
            break;
        case SNACKBAR_TYPE.INFO:
            icon = <IconBell />;
            break;
        case SNACKBAR_TYPE.SUCCESS:
            icon = <IconSquareTick />;
            break;
        default:
            icon = <IconCircleExc />;
            break;
    }

    return (
        <animated.div
            className={cx(b('notifications', 'snackbar'), mix)}
            style={style}
        >
            <div
                className={b('notifications', 'snackbar-content', { type })}
                ref={(ref: HTMLDivElement) => ref && setRef(ref)}
            >
                {life && <animated.div className={b('notifications', 'snackbar-life', { type })} style={{ right: life }} />}
                {icon}
                {content}{id ? children : null}
                {!disableCloseButton && <IconCross handleClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                />}
            </div>
        </animated.div>
    );
};

NotificationsSnackbar.TYPE = SNACKBAR_TYPE;

export default NotificationsSnackbar;
