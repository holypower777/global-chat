import b from 'b_';
import cx from 'classnames';
import React from 'react';

import './rubricator__alphabet.scss';

const possibleSymbols = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

interface RubricatorAlphabetProps {
    activeLetter: string;
    availableLetters: Array<string>;
}

const RubricatorAlphabet = React.memo(({ activeLetter, availableLetters }: RubricatorAlphabetProps) => {
    const symbols = possibleSymbols.map((symbol) => {
        return (
            <li key={symbol}>
                <a 
                    className={b('rubricator', 'alphabet-symbol', { 
                        presence: availableLetters.includes(symbol),
                        active: symbol === activeLetter,
                    })}
                    href={`#block${symbol.toUpperCase()}`}
                >
                    {symbol}
                </a>
            </li>
        );
    });

    return <ul className={cx(b('rubricator', 'alphabet'), 'custom-scroll')}>{ symbols }</ul>;
});

export default RubricatorAlphabet;
