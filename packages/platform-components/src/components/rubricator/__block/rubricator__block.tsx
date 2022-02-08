import b from 'b_';
import React from 'react';

import { H1 } from '../../header-text/header-text';

import './rubricator__block.scss';

interface RubricatorBlockProps {
    items: Array<string>;
}

const RubricatorBlock = ({ items }: RubricatorBlockProps) => {
    const blockLetter = items[0].charAt(0).toUpperCase();

    return (
        <section className={b('rubricator', 'block')}>
            <H1>{blockLetter}</H1>
            <ul className={b('rubricator', 'block-items')}>
                {items.map((item) => 
                    (<li 
                        className={b('rubricator', 'block-item')}
                        key={item}
                    >
                        {item}
                    </li>)
                )}
            </ul>
        </section>
    );
};

export default RubricatorBlock;
