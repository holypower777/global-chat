// @reference
// import b from 'b_';
// import { IconTime, Text } from 'platform-components';
// import React from 'react';
// import { useIntl } from 'react-intl';
// import { useSelector } from 'react-redux';

// import { getOverallStats } from '../../../store/slices/overall-stats';
// import { getMinutesFromNow } from '../../../utils';

// import './overall-stats__stats.scss';
// import OverallStatsStatsUsernames from './__usernames/stats__usernames';

// const OverallStatsStats = () => {
//     const intl = useIntl();
//     const stats = useSelector(getOverallStats);

//     if (!stats) {
//         return null;
//     }

//     return (
//         <div className={b('overall-stats', 'stats')}>
//             <Text
//                 id="overall-stats.totalMessages"
//                 mix={b('overall-stats', 'stats-key')}
//                 weight={Text.WEIGHT.M}
//             >
//                 <span className={b('overall-stats', 'stats-value')}>
//                     {intl.formatNumber(stats.totalMessages)}
//                 </span>
//             </Text>
//             <Text
//                 id="overall-stats.totalUsers"
//                 mix={b('overall-stats', 'stats-key')}
//                 weight={Text.WEIGHT.M}
//             >
//                 <span className={b('overall-stats', 'stats-value')}>
//                     {intl.formatNumber(stats.totalUsers)}
//                 </span>
//             </Text>
//             <Text
//                 id="overall-stats.totalChannels"
//                 mix={b('overall-stats', 'stats-key')}
//                 weight={Text.WEIGHT.M}
//             >
//                 <span className={b('overall-stats', 'stats-value')}>
//                     {intl.formatNumber(stats.totalChannels)}
//                 </span>
//             </Text>
//             <OverallStatsStatsUsernames
//                 id="overall-stats.mostActiveUsers"
//                 renderMessagesAmount
//                 users={stats.mostActiveUsers}
//             />
//             <OverallStatsStatsUsernames
//                 id="overall-stats.mostActiveChannels"
//                 users={stats.mostActiveChannels}
//             />
//             <OverallStatsStatsUsernames
//                 id="overall-stats.mostSearchedUsers"
//                 users={stats.mostSearchedUsers}
//             />
//             <Text
//                 id="overall-stats.currentlyActiveChannels"
//                 mix={b('overall-stats', 'stats-key')}
//                 weight={Text.WEIGHT.M}
//             >
//                 <span className={b('overall-stats', 'stats-value')}>
//                     {stats.currentlyActiveChannels}
//                 </span>
//             </Text>
//             <div className={b('overall-stats', 'stats-update')}>
//                 <IconTime />
//                 <Text weight={Text.WEIGHT.M}>
//                     {intl.formatMessage({ id: 'overall-stats.lastUpdate' }, { min: getMinutesFromNow(stats.time!) })}
//                 </Text>
//             </div>
//         </div>
//     );
// };

// export default OverallStatsStats;
