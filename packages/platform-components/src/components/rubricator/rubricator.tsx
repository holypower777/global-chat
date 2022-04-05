import b from 'b_';
import cx from 'classnames';
import { TwitchUserChannel, TwitchUserChannels } from 'platform-apis/types';
import { splitIntoColumns } from 'platform-components/src/utils';
import React, { useEffect, useRef, useState } from 'react';

import RubricatorAlphabet from './__alphabet/rubricator__alphabet';
import RubricatorBlock from './__block/rubricator__block';

import './rubricator.scss';

interface RubricatorProps {
    channels: Array<TwitchUserChannels>;
    handleSelect: (item: TwitchUserChannel) => void;
    selectedItem: TwitchUserChannel | null;
}

const Rubricator = React.memo(({ channels = [], handleSelect, selectedItem }: RubricatorProps) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [columns, setColumns] = useState<Array<Array<TwitchUserChannels>>>([]);

    useEffect(() => {
        setWidth(parentRef.current!.getBoundingClientRect().width);
        const numberOfColumns = Math.floor(width / 250);

        const balancedColumns = splitIntoColumns(channels.map((e) => e.length), numberOfColumns);
        const res = [];
        let lastIndex = 0;
        for (let i = 0; i < balancedColumns.length; i += 1) {
            res.push(channels.slice(lastIndex, lastIndex + balancedColumns[i].length));
            lastIndex += balancedColumns[i].length;
        }

        setColumns(res);

        const handleResize = () => {
            setWidth(parentRef.current!.getBoundingClientRect().width);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, [channels, parentRef, width]);

    const availableLetters = channels.map((e) => e[0].login[0].toLowerCase());
    const activeLetter = channels.flat().find((e) => selectedItem && e.userId === selectedItem.userId)?.displayName.charAt(0).toLowerCase();

    return (
        <div className="rubricator">
            {columns.length && <RubricatorAlphabet activeLetter={activeLetter} availableLetters={availableLetters} />}
            <div className={cx(b('rubricator', 'columns'), 'custom-scroll')} ref={parentRef}>
                {width && columns.length && columns.map((column, columnIndex) => (
                    <div className={b('rubricator', 'column')} key={columnIndex}>
                        {column.map((chan, chanIndex) => (
                            <RubricatorBlock
                                activeLetter={activeLetter}
                                handleSelect={handleSelect}
                                items={chan}
                                key={chanIndex}
                                selectedItem={selectedItem}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Rubricator;
