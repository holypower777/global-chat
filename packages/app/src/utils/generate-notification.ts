import { NotificationRaw } from 'platform-components/src/typings';
import { generateRandom } from 'platform-components/src/utils';
import { Dispatch } from 'redux';

import { pushNotification, removeNotification } from '../store/slices/notifications';

const hashNotification = (s: string) => {
    let h = 0;
    for(let i = 0; i < s.length; i+=1) {
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    }

    return h;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addNotification = (notification: NotificationRaw, dispatch: Dispatch<any>, uniqueKey = false) => {
    let key = hashNotification(JSON.stringify(notification));
    key += uniqueKey ? generateRandom(1000, 10000) : 0;
    const formattedNotification = {
        ...notification,
        key,
        onClose: () => {
            dispatch(removeNotification(key));
        },
    };

    dispatch(pushNotification(formattedNotification));
};

export default addNotification;
