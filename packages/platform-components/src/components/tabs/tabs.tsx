import cx from 'classnames';
import React from 'react';

import { MixProps } from '../../typings';

import TabsTab, { Tab } from './__tab/tabs__tab';

import './tabs.scss';

export interface TabsProps extends MixProps {
    /** Tabs to render. Tab is
     * { id: number | string, intlId: string, values?: {}, icon?: ReactNode }
     */
    tabs: Array<Tab>;
    /** A selected tab id */
    activeId: string | number;
    /** Set the handler to handle tab click event */
    handleTabClick: (id: number | string) => void;
}

const Tabs = ({ tabs = [], activeId, handleTabClick, mix }: TabsProps) => {
    return (
        <ul className={cx('tabs', mix)} data-testid="tabs">
            {tabs.map((tab) => (
                <TabsTab
                    handleClick={() => tab.id !== activeId && handleTabClick(tab.id)}
                    icon={tab.icon}
                    id={tab.id}
                    intlId={tab.intlId}
                    isActive={tab.id === activeId}
                    key={tab.id}
                    values={tab.values}
                />
            ))}
        </ul>
    );
};

export default Tabs;
