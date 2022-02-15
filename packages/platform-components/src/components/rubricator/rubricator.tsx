import b from 'b_';
import cx from 'classnames';
import { splitIntoColumns } from 'platform-components/src/utils';
import React, { useEffect, useRef, useState } from 'react';

import RubricatorAlphabet from './__alphabet/rubricator__alphabet';
import RubricatorBlock from './__block/rubricator__block';

import './rubricator.scss';

interface Channel {
    userId: number;
    username: string;
    login: string;
}

interface RubricatorProps {
    channels: Array<Array<Channel>>;
    handleSelect: (item: string) => void;
    selectedItem: string;
}

const Rubricator = React.memo(({ channels = [], handleSelect, selectedItem }: RubricatorProps) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [columns, setColumns] = useState<Array<Array<Array<Channel>>>>([]);

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
    const activeLetter = selectedItem.charAt(0).toLowerCase();

    return (
        <div className="rubricator">
            {columns.length && <RubricatorAlphabet activeLetter={activeLetter} availableLetters={availableLetters} />}
            <div className={cx(b('rubricator', 'columns'), 'custom-scroll')} ref={parentRef}>
                {width && columns.length && columns.map((column, columnIndex) => (
                    <div className={b('rubricator', 'column')} key={columnIndex}>
                        {column.map((chan, chanIndex) => (
                            <RubricatorBlock
                                handleSelect={handleSelect}
                                items={chan.map(e => e.username)}
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
