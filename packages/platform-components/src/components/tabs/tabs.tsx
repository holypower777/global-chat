import cx from 'classnames';
import React, { Dispatch, ReactElement, SetStateAction } from 'react';

import TabItem from './__tab-item/tabs__tab-item';

import './tabs.scss';

interface TabsProps {
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<string>>;
    children: Array<ReactElement>;
    mix?: string;
}

const Tabs = ({ activeTab, setActiveTab, children, mix }: TabsProps) => {
    return (
        <ul className={cx('tabs', mix)}>
            {children!.map((child) => {
                const label = child.props.label;

                return (
                    <TabItem 
                        handleClick={setActiveTab}
                        isActive={label === activeTab}
                        label={label}
                    />
                );
            })}
        </ul>
    );
};

export default Tabs;
