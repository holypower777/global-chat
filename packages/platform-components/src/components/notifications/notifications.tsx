// @reference
// import b from 'b_';
// import React, { useMemo, useState } from 'react';
// import { Controller, useTransition } from 'react-spring';

// import { NotificationsType } from '../../typings';
// import { NOTIFICATIONS_DIRECTION } from '../constants';

// import NotificationsSnackbar from './__snackbar/notifications__snackbar';

// import './notifications.scss';

// interface NotificationsProps {
//     items: NotificationsType;
//     direction?: NOTIFICATIONS_DIRECTION;
// }

// const Notifications = ({ items, direction = NOTIFICATIONS_DIRECTION.BOTTOM_LEFT }: NotificationsProps) => {
//     const refMap = useMemo(() => new WeakMap(), []);
//     const cancelMap = useMemo(() => new WeakMap(), []);
//     const [ctrls, setCtrls] = useState<Array<Controller>>([]);
//     const config = { tension: 125, friction: 20, precision: 0.1 };

//     const transitions = useTransition(items, {
//         from: { opacity: 0, height: 0, life: '100%' },
//         enter: (item) => async (next, cancel) => {
//             cancelMap.set(item, cancel);
//             await next({ opacity: 1, height: refMap.get(item).offsetHeight + 10 });
//             await next({ life: '0%' });
//         },
//         keys: (item) => item.key,
//         leave: [{ opacity: 0 }, { height: 0 }],
//         onStart: (result, ctrl, item) => {
//             if (item && !item.disableWindowBlurListener) {
//                 setCtrls([...ctrls, ctrl]);
//             }
//         },
//         onRest: (result, ctrl, item) => item.onClose && item.onClose(),
//         config: (item, index, phase) => key => {
//             return phase === 'enter' && key === 'life' ? { duration: item.autoHideDuration || Infinity } : config;
//         },
//     });

//     window.onfocus = () => {
//         ctrls.map((c) => c.resume());
//     };

//     window.onblur = () => {
//         ctrls.map((c) => c.pause());
//     };

//     return (
//         <div className={b('notifications', { direction })}>
//             {transitions(({ life, ...style }, item) => (
//                 <NotificationsSnackbar
//                     {...item}
//                     life={life}
//                     setRef={(ref: HTMLDivElement) => (refMap.set(item, ref))}
//                     style={style}
//                 />
//             ))}
//         </div>
//     );
// };

// Notifications.DIRECTION = NOTIFICATIONS_DIRECTION;

// export default React.memo(Notifications);
