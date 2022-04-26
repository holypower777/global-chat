import { Action, AnyAction, Dispatch } from '@reduxjs/toolkit';

import { updateSetting } from '../slices/settings';

const settingsMiddleware = () => (next: Dispatch<AnyAction>) => (action: Action<unknown>) => {
    if (updateSetting.match(action)) {
        localStorage.setItem(action.payload.key, JSON.stringify(action.payload.value));
    }
    return next(action);
};

export default settingsMiddleware;
