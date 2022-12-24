import {
    Action,
    AnyAction,
    Dispatch,
    isRejectedWithValue,
    Middleware,
    MiddlewareAPI,
} from '@reduxjs/toolkit';

import { BACKEND_ERROR, LINKS, NOTIFICATIONS_DURATION, SNACKBAR_TYPE } from 'platform-components';

import { addNotification } from '../../utils';

const rtkQueryErrorMiddleware: Middleware =
    (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: Action<unknown>) => {
        if (isRejectedWithValue(action)) {
            //@ts-ignore
            if (action.payload && action.payload.data && action.payload.data.error) {
                let id = null;
                let children = null;
                let uniqueKey = false;

                //@ts-ignore
                if (!action.payload.data.error.intlId) {
                    //@ts-ignore
                    children = action.payload.data.error.message;
                } else {
                    //@ts-ignore
                    id = action.payload.data.error.intlId;
                }

                if (id === BACKEND_ERROR.USER_HIDDEN || BACKEND_ERROR.USER_NOT_FOUND) {
                    return next(action);
                }

                if (id === BACKEND_ERROR.NO_LIMITS) {
                    window.location.href = LINKS.NO_LIMITS;
                    return next(action);
                }

                if (
                    id === BACKEND_ERROR.MESSAGES_OF_THAT_CHANNEL_ID ||
                    id === BACKEND_ERROR.NO_LIMITS
                ) {
                    uniqueKey = true;
                }

                addNotification(
                    {
                        id,
                        children,
                        autoHideDuration: NOTIFICATIONS_DURATION.M,
                        type: SNACKBAR_TYPE.ERROR,
                    },
                    api.dispatch,
                    uniqueKey
                );
            }
        }

        return next(action);
    };

export default rtkQueryErrorMiddleware;
