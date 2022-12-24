// @reference
// import b from 'b_';
// import { useFlags } from 'flagsmith/react';
// import { H1, H3, TEXT_WEIGHT, Text } from 'platform-components';
// import React from 'react';

// import './about.scss';

// const About = () => {
//     const { from_online: fromOnline, message_length: messageLength } = useFlags(['from_online', 'message_length']);

//     return (
//         <main className="about">
//             <H1 id="about.header" />
//             <div className={b('about', 'block')}>
//                 <H3 id="about.whatIs" weight={TEXT_WEIGHT.M} />
//                 <Text id="about.whatIs.analytics" />
//                 <div style={{ marginBottom: 20 }} />
//                 <Text id="about.whatIs.unqiue" />
//             </div>
//             <div className={b('about', 'block')}>
//                 <H3 id="about.summary" weight={TEXT_WEIGHT.M} />
//                 <Text id="about.summary.text" values={{ amount: fromOnline.value || 0 }}/>
//             </div>
//             <div className={b('about', 'block')}>
//                 <H3 id="about.table" weight={TEXT_WEIGHT.M} />
//                 <div className="custom-scroll" style={{ overflowX: 'auto' }}>
//                     <table
//                         className={b('about', 'block_table')}
//                         style={{ width: 1000, marginBottom: 10 }}
//                     >
//                         <thead>
//                             <tr>
//                                 <th><Text id="about.table.dataType" weight={Text.WEIGHT.M} /></th>
//                                 <th><Text id="about.table.dateSince" weight={Text.WEIGHT.M} /></th>
//                                 <th><Text id="about.table.dataUpdated" weight={Text.WEIGHT.M} /></th>
//                                 <th><Text id="about.table.cacheTime" weight={Text.WEIGHT.M} /></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td><Text id="link.messages" /></td>
//                                 <td><Text id="about.table.dateStart" /></td>
//                                 <td><Text id="about.table.liveTime" /></td>
//                                 <td><Text id="common.minutes" values={{ min: 2 }} /></td>
//                             </tr>
//                             <tr>
//                                 <td><Text id="common.users" /></td>
//                                 <td><Text id="about.table.dateStart" /></td>
//                                 <td><Text id="about.table.posts" /></td>
//                                 <td><Text id="common.minutes" values={{ min: 2 }} /></td>
//                             </tr>
//                             <tr>
//                                 <td><Text id="title.overallStats" /></td>
//                                 <td><Text id="about.table.dateStart" /></td>
//                                 <td><Text id="about.table.every" /></td>
//                                 <td><Text id="common.minutes" values={{ min: 5 }} /></td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="custom-scroll" style={{ overflowX: 'auto' }}>
//                     <table className={b('about', 'block_table')} style={{ width: 562 }}>
//                         <thead>
//                             <tr>
//                                 <th><Text id="about.table.configType" weight={Text.WEIGHT.M} /></th>
//                                 <th><Text id="about.table.configValue" weight={Text.WEIGHT.M} /></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td><Text id="about.table.fromOnline" /></td>
//                                 <td><Text id="about.table.viewers" values={{ amount: fromOnline.value || 0 }} /></td>
//                             </tr>
//                             <tr>
//                                 <td><Text id="about.table.messageLength" /></td>
//                                 <td>{messageLength.value}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </main >
//     );
// };

// export default About;
