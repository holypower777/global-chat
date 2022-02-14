import b from 'b_';
import { isArrayEqual } from 'platform-components/src/utils';
import React from 'react';

import { H1 } from '../../header-text/header-text';

import './rubricator__block.scss';

interface RubricatorBlockProps {
    items: Array<string>;
    handleSelect: (item: string) => void;
    selectedItem: string;
}

const RubricatorBlock = React.memo(({ items, handleSelect, selectedItem }: RubricatorBlockProps) => {
    const blockLetter = items[0].charAt(0).toUpperCase();

    return (
        <section className={b('rubricator', 'block')} id={`block${blockLetter}`}>
            <H1>{blockLetter}</H1>
            <ul className={b('rubricator', 'block-items')}>
                {items.map((item) => 
                    (<li 
                        className={b('rubricator', 'block-item', { selected: selectedItem === item })}
                        key={item}
                        onClick={() => handleSelect(item)}
                    >
                        {item}
                    </li>)
                )}
            </ul>
        </section>
    );
}, (prevProps, nextProps) => {
    const blockLetter = nextProps.items[0].charAt(0).toUpperCase();
    const firstLetterPrev = prevProps.selectedItem.charAt(0).toUpperCase();
    const firstLetterNext = nextProps.selectedItem.charAt(0).toUpperCase();

    return isArrayEqual(prevProps.items, nextProps.items) && firstLetterPrev !== blockLetter && firstLetterNext !== blockLetter;
});

export default RubricatorBlock;
