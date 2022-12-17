import { Action, AnyAction, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { SETTINGS } from 'platform-components';

import { updateSetting } from '../slices/settings';
import { clearUser } from '../slices/user';

const usersMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: Action<unknown>) => {
    if (clearUser.match(action)) {
        store.dispatch(updateSetting({
            key: SETTINGS.ACCESS_TOKEN,
            value: null,
        }));
        store.dispatch(updateSetting({
            key: SETTINGS.REFRESH_TOKEN,
            value: null,
        }));
        localStorage.removeItem(SETTINGS.ACCESS_TOKEN);
        localStorage.removeItem(SETTINGS.REFRESH_TOKEN);
    }
    return next(action);
};

export default usersMiddleware;
