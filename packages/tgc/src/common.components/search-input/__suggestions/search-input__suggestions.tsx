import b from 'b_';
import cx from 'classnames';
import { Spin, Text } from 'platform-components';
import React from 'react';

export interface DropdownProps {
    items: Array<string>;
    isDropdownLoading: boolean;
    handleOnClick: (item: string) => void;
}

const SearchInputSuggestions = ({ items, isDropdownLoading, handleOnClick } : DropdownProps) => {

    return (
        <div>
            {(items.length > 0 || isDropdownLoading) &&
            <ul className={cx(b('input', 'dropdown'), 'custom-scroll')}>
                {isDropdownLoading && <Spin size={Spin.SIZE.S} />}
                {items.map(item => <Text handleClick={() => handleOnClick(item)} tag={Text.TAG.LI}>{item}</Text>)}
            </ul>}
        </div>
    );
};

export default SearchInputSuggestions;
