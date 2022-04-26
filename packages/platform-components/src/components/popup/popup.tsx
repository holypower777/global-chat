import b from 'b_';
import cx from 'classnames';
import React, { ReactNode, useRef, useState } from 'react';

import { useOnClickOutside } from '../../hooks';
import { POPUP_DIRECTION } from '../constants';

import './popup.scss';

interface PopupSettingsProps {
    target: ReactNode;
    children: ReactNode | Array<ReactNode>;
    direction?: POPUP_DIRECTION;
    mix?: string;
}

const Popup = ({ target, children, direction = POPUP_DIRECTION.right, mix }: PopupSettingsProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, () => setIsOpen(false));

    return (
        <div className={cx('popup', mix)} ref={ref}>
            <div className={b('popup', 'target')} onClick={() => setIsOpen(!isOpen)}>
                {target}
            </div>
            {isOpen && <div className={b('popup', 'content', { direction })}>
                {children}
            </div>}
        </div>
    );
};

Popup.DIRECTION = POPUP_DIRECTION;

export default Popup;
