import b from 'b_';
import React from 'react';

import './rubricator__alphabet.scss';

const possibleSymbols = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

interface RubricatorAlphabetProps {
    availableLetters: Array<string>;
}

const RubricatorAlphabet = ({ availableLetters }: RubricatorAlphabetProps) => {
    const symbols = possibleSymbols.map((symbol) => {
        return (
            <li 
                className={b('rubricator', 'alphabet-symbol', { presence: availableLetters.includes(symbol) })}
                key={symbol}
            >
                {symbol}
            </li>
        );
    });

    return <ul className={b('rubricator', 'alphabet')}>{ symbols }</ul>;
};

export default RubricatorAlphabet;
