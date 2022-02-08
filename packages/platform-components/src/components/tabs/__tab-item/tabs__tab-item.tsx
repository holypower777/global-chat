import b from 'b_';
import React, { Dispatch, SetStateAction } from 'react';

import './tabs__tab-item.scss';

interface TabItemProps {
    label: string;
    handleClick: Dispatch<SetStateAction<string>>;
    isActive: boolean;
}

const TabItem = ({ label, handleClick, isActive }: TabItemProps) => {
    return (
        <li
            className={b('tabs', 'tab', { active: isActive })}
            onClick={() => handleClick(label)}
        >
            {label}
        </li>
    );
};

export default TabItem;
