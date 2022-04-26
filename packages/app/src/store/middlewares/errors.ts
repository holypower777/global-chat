import { Action, AnyAction, Dispatch, isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { SNACKBAR_TYPE } from 'platform-components';

import { addNotification } from '../../utils';

const rtkQueryErrorMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: Action<unknown>) => {
    if (isRejectedWithValue(action)) {
        //@ts-ignore
        if (action.payload && action.payload.data && action.payload.data.error && action.payload.data.error.message) {
            let id = null;
            let children = null;
            let uniqueKey = false;

            //@ts-ignore
            switch (action.payload.data.error.message) {
                case 'user not found':
                    id = 'backendError.userNotFound';
                    break;
                case 'messages not found':
                    id = 'backendError.messagesNotFound';
                    break;
                case 'messages of that channel_id not found':
                    id = 'backendError.indeedMessagesNotFound';
                    uniqueKey = true;
                    break;
                case 'something wrong happend :(':
                    id = 'backendError.somethingWrong';
                    break;
                case 'not acceptable':
                    id = 'backendError.notAcceptable';
                    break;
                default: //@ts-ignore
                    children = action.payload.data.error.message;
                    break;
            }

            addNotification({
                id,
                children,
                autoHideDuration: 6000,
                type: SNACKBAR_TYPE.ERROR,
            }, api.dispatch, uniqueKey);
        }
    }

    return next(action);
};

export default rtkQueryErrorMiddleware;
