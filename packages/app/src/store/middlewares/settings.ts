import { Action, AnyAction, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { decode } from 'jws';
import { usersApi } from 'platform-apis';
import { SETTINGS } from 'platform-components';

import { UpdateSetting, updateSetting } from '../slices/settings';
import { RootState } from '../store';

const settingsMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: Action<unknown>) => {
    if (updateSetting.match(action)) {
        const { key, value } = action.payload as UpdateSetting;

        localStorage.setItem(key, JSON.stringify(value));

        if (key === SETTINGS.ACCESS_TOKEN && value !== null) {
            const { payload } = decode(value as string);
            const userId = (store.getState() as RootState).user.userId;

            if (userId !== payload.user_id) { //@ts-ignore
                store.dispatch(usersApi.endpoints.getUserById.initiate({ 
                    userId: payload.user_id,
                    token: value as string,
                }));
            }
        }
    }
    return next(action);
};

export default settingsMiddleware;
