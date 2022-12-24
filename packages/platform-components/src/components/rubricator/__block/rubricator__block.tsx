// @reference
// import b from 'b_';
// import { TwitchUserChannel, TwitchUserChannels } from 'platform-apis/types';
// import { formatDate, isArrayEqual } from 'platform-components/src/utils';
// import React from 'react';
// import { useIntl } from 'react-intl';

// import { H1 } from '../../header-text/header-text';

// import './rubricator__block.scss';

// interface RubricatorBlockProps {
//     items: TwitchUserChannels;
//     handleSelect: (item: TwitchUserChannel) => void;
//     selectedItem: TwitchUserChannel | null;
//     activeLetter: string | undefined;
// }

// const RubricatorBlock = React.memo(({ items, handleSelect, selectedItem, activeLetter }: RubricatorBlockProps) => {
//     const intl = useIntl();
//     const blockLetter = items[0].displayName.charAt(0).toUpperCase();

//     return (
//         <section
//             className={b('rubricator', 'block', { selected: activeLetter?.toUpperCase() === blockLetter })}
//             id={`block${blockLetter}`}
//         >
//             <H1>{blockLetter}</H1>
//             <ul className={b('rubricator', 'block-items')}>
//                 {items.map((item) =>
//                     (<li
//                         className={b('rubricator', 'block-item', { selected: selectedItem && selectedItem.userId === item.userId })}
//                         data-channel-id={item.userId}
//                         data-first-message-date={formatDate(item.firstMessageDate)}
//                         data-last-message-date={formatDate(item.lastMessageDate)}
//                         data-login={item.login}
//                         data-messages-amount={item.messages}
//                         data-profile-image-url={item.profileImageUrl}
//                         key={item.userId}
//                         onClick={() => handleSelect(item)}
//                         title={`${intl.formatMessage({ id: 'rubricator.item.title.messages' }, { amount: item.messages })}
// ${intl.formatMessage({ id: 'rubricator.item.title.firstMessage' }, { date: formatDate(item.firstMessageDate) })}
// ${intl.formatMessage({ id: 'rubricator.item.title.lastMessage' }, { date: formatDate(item.lastMessageDate) })}`}
//                     >
//                         {item.displayName}
//                     </li>)
//                 )}
//             </ul>
//         </section>
//     );
// }, (prevProps, nextProps) => {
//     const blockLetter = nextProps.items[0].displayName.charAt(0).toLowerCase();

//     return isArrayEqual(prevProps.items.map((e) => e.userId), nextProps.items.map((e) => e.userId)) && prevProps.activeLetter !== blockLetter && nextProps.activeLetter !== blockLetter;
// });

// export default RubricatorBlock;
