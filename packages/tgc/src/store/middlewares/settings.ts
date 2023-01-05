import { Action, AnyAction, Dispatch } from '@reduxjs/toolkit';

// import { clearMessages } from '../slices/messages';
import { UpdateSetting, updateSetting } from '../slices/settings';

const settingsMiddleware = () => (next: Dispatch<AnyAction>) => (action: Action<unknown>) => {
    if (updateSetting.match(action)) {
        const { key, value } = action.payload as UpdateSetting;

        localStorage.setItem(key, JSON.stringify(value));

        // if (key === SETTINGS.SORT_BY_DATE) {
        //     store.dispatch(clearMessages());
        // }
    }

    return next(action);
};

export default settingsMiddleware;
