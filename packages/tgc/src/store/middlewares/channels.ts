import { Action, AnyAction, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

import { setSelectedChannel } from '../slices/channels';
import { clearMessages } from '../slices/messages';

const channelsMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: Action<unknown>) => {
    if (setSelectedChannel.match(action)) {
        store.dispatch(clearMessages());
    }

    return next(action);
};

export default channelsMiddleware;
