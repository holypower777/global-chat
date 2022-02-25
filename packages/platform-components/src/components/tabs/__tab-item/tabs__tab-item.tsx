import b from 'b_';
import React from 'react';

import './tabs__tab-item.scss';

interface TabItemProps {
    label: string;
    handleClick: (index: number) => void;
    isActive: boolean;
    index: number;
}

const TabItem = ({ label, handleClick, isActive, index }: TabItemProps) => {
    return (
        <li
            className={b('tabs', 'tab', { active: isActive })}
            onClick={() => handleClick(index)}
        >
            {label}
        </li>
    );
};

export default TabItem;
