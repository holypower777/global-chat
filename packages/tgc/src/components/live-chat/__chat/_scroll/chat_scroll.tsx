// @reference
// import b from 'b_';
// import { IconArrow, IconPause, Text } from 'platform-components';
// import { SimpleCallback } from 'platform-components/src/typings';
// import React, { useState } from 'react';

// import './chat_scroll.scss';

// interface LiveChatScrollButtonProps {
//     handleClick: SimpleCallback;
// }

// const LiveChatScrollButton = ({ handleClick }: LiveChatScrollButtonProps) => {
//     const [isHovering, setIsHovering] = useState(false);

//     return (
//         <button
//             className={b('live-chat', 'chat-scroll')}
//             onClick={handleClick}
//             onMouseOut={() => setIsHovering(false)}
//             onMouseOver={() => setIsHovering(true)}
//         >
//             {isHovering ? <IconArrow direction={IconArrow.DIREACTIONS.DOWN} /> : <IconPause />}
//             <Text id={`live-chat.chat.pause${isHovering ? '.hover' : ''}`} weight={Text.WEIGHT.L} />
//         </button>
//     );
// };

// export default LiveChatScrollButton;
