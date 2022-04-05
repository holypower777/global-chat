import b from 'b_';
import { TwitchUserChannel, TwitchUserChannels } from 'platform-apis/types';
import { formatDate, isArrayEqual } from 'platform-components/src/utils';
import React from 'react';

import { H1 } from '../../header-text/header-text';
import Text from '../../text/text';
import Tooltip from '../../tooltip/tooltip';

import './rubricator__block.scss';

interface RubricatorBlockProps {
    items: TwitchUserChannels;
    handleSelect: (item: TwitchUserChannel) => void;
    selectedItem: TwitchUserChannel | null;
    activeLetter: string | undefined;
}

const RubricatorBlock = React.memo(({ items, handleSelect, selectedItem, activeLetter }: RubricatorBlockProps) => {
    const blockLetter = items[0].displayName.charAt(0).toUpperCase();

    return (
        <section
            className={b('rubricator', 'block', { selected: activeLetter?.toUpperCase() === blockLetter })}
            id={`block${blockLetter}`}
        >
            <H1>{blockLetter}</H1>
            <ul className={b('rubricator', 'block-items')}>
                {items.map((item) =>
                    (<li
                        className={b('rubricator', 'block-item', { selected: selectedItem && selectedItem.userId === item.userId })}
                        data-channel-id={item.userId}
                        data-first-message-date={formatDate(item.firstMessageDate)}
                        data-last-message-date={formatDate(item.lastMessageDate)}
                        data-login={item.login}
                        data-messages-amount={item.messages}
                        data-profile-image-url={item.profileImageUrl}
                        key={item.userId}
                        onClick={() => handleSelect(item)}
                    >
                        <Tooltip  direction={Tooltip.TOOLTIP_DIRECTION.right} title={<>
                            <div className={b('rubricator', 'block-item-tooltip')}>
                                <Text size={Text.SIZE.S}>Messages: {item.messages}</Text>
                                <Text size={Text.SIZE.S}>First message: {formatDate(item.firstMessageDate)}</Text>
                                <Text size={Text.SIZE.S}>Last message: {formatDate(item.lastMessageDate)}</Text>
                            </div>
                        </>}
                        >
                            {item.displayName}
                        </Tooltip>
                    </li>)
                )}
            </ul>
        </section>
    );
}, (prevProps, nextProps) => {
    const blockLetter = nextProps.items[0].displayName.charAt(0).toLowerCase();

    return isArrayEqual(prevProps.items, nextProps.items) && prevProps.activeLetter !== blockLetter && nextProps.activeLetter !== blockLetter;
});

export default RubricatorBlock;
