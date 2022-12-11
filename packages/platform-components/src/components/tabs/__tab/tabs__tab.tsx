import b from 'b_';
import React, { ReactNode } from 'react';

import { MessageFormatPrimitiveValue, SimpleCallback } from '../../../typings';
import Text from '../../text/text';

import './tabs__tab.scss';

export interface Tab {
    /** Tab unique id. Serves for changing tabs. */
    id: number | string;
    /** Intl id. Text to be within tab. */
    intlId: string;
    /** Intl values field. */
    values?: Record<string, MessageFormatPrimitiveValue>;
    /** Set the icon component of the tab. */
    icon?: ReactNode;
}

export interface TabsTabProps extends Tab {
    /** Whether the tab is active */
    isActive: boolean;
    /** Set the handler to handle click event */
    handleClick: SimpleCallback
}

const TabsTab = ({
    isActive = false,
    intlId,
    values = {},
    icon,
    handleClick,
}: TabsTabProps) => {
    const className = b('tabs', 'tab', { active: isActive });

    return(
        <li
            className={className}
            data-active={isActive}
            data-testid={b('tabs', 'tab')}
            onClick={handleClick}
        >
            {icon}
            <Text id={intlId} values={values} />
        </li>
    );
};

export default TabsTab;
