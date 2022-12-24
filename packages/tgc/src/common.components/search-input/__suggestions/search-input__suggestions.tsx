import b from 'b_';
import cx from 'classnames';
import React from 'react';

import { Spin, Text } from 'platform-components';
import './search-input__suggestions.scss';

export interface SuggestionProps {
    suggestions: Array<string>;
    isSuggestionsLoading: boolean;
    handleOnClick: (item: string) => void;
}

const SearchInputSuggestions = ({
    suggestions,
    isSuggestionsLoading,
    handleOnClick,
}: SuggestionProps) => {
    if (!suggestions.length || !isSuggestionsLoading) {
        return null;
    }

    return (
        <ul className={cx(b('search-input', 'suggestions'), 'custom-scroll')}>
            {isSuggestionsLoading ? <Spin size={Spin.SIZE.S} /> : null}
            {suggestions.map((suggestion) => (
                <Text
                    handleClick={() => handleOnClick(suggestion)}
                    key={suggestion}
                    tag={Text.TAG.LI}
                >
                    {suggestion}
                </Text>
            ))}
        </ul>
    );
};

export default SearchInputSuggestions;
