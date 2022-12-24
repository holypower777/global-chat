// @reference
// import b from 'b_';
// import { TwitchUser } from 'platform-apis/types';
// import { IconTwitch, Text } from 'platform-components';
// import { LINKS, SEARCH_TYPE, SETTINGS } from 'platform-components/src/components/constants';
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

// import { updateSetting } from '../../../../store/slices/settings';

// import './stats__usernames.scss';

// interface OverallStatsStatsUsernamesProps {
//     users: Array<TwitchUser>;
//     id: string;
//     renderMessagesAmount?: boolean;
// }

// const OverallStatsStatsUsernames = ({ users, id, renderMessagesAmount = false }: OverallStatsStatsUsernamesProps) => {
//     const dispatch = useDispatch();

//     return (
//         <div className={b('overall-stats', 'stats-usernames')}>
//             <Text
//                 id={id}
//                 mix={b('overall-stats', 'stats-key')}
//                 weight={Text.WEIGHT.M}
//             />
//             {users.map((user) => (
//                 <React.Fragment key={user.userId}>
//                     <Link
//                         className={b('overall-stats', 'stats-value')}
//                         onClick={() => dispatch(updateSetting({ key: SETTINGS.USER_TYPE, value: SEARCH_TYPE.USERNAME }))}
//                         to={`${LINKS.MESSAGES}/${user.displayName}`}
//                     >
//                         <Text weight={Text.WEIGHT.M}>{user.displayName}{renderMessagesAmount && ` (${user.messagesAmount})`}</Text>
//                     </Link>
//                     <a href={`https://www.twitch.tv/${user.displayName}`} target="_blank">
//                         <IconTwitch />
//                     </a>
//                 </React.Fragment>
//             ))}
//         </div>
//     );
// };

// export default OverallStatsStatsUsernames;
