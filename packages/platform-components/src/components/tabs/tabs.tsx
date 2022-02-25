import cx from 'classnames';
import React, { ReactElement } from 'react';

import TabItem from './__tab-item/tabs__tab-item';

import './tabs.scss';

interface TabsProps {
    activeTab: number;
    setActiveTab: (index: number) => void;
    children: Array<ReactElement>;
    mix?: string;
}

const Tabs = ({ activeTab, setActiveTab, children, mix }: TabsProps) => {
    return (
        <ul className={cx('tabs', mix)}>
            {children!.map((child, index) => {
                const label = child.props.label;

                return (
                    <TabItem 
                        handleClick={setActiveTab}
                        index={index}
                        isActive={index === activeTab}
                        key={index}
                        label={label}
                    />
                );
            })}
        </ul>
    );
};

export default Tabs;
