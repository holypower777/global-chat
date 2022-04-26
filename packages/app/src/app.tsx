import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import messages from '../../../global-chat.json';

import Home from './components/home/home';
import Kek from './components/kek/kek';
import LiveChat from './components/live-chat/live-chat';
import OverallStats from './components/overall-stats/overall-stats';
import UserHistory from './components/user-history/user-history';
import NotificationProvider from './containers/notification-provider/notification-provider';
import { store } from './store/store';

const rootContainerId = 'root';

function createContainer(targetParent: Element) {
    const newContainer = document.createElement('div');
    newContainer.id = rootContainerId;
    return targetParent.appendChild(newContainer);
}

const container = document.getElementById(rootContainerId) ?? createContainer(document.body);

const App = () => {
    return (
        <IntlProvider
            defaultLocale="en-US"
            locale={navigator.language}
            messages={messages['en-US'].common}
        >
            <ReduxProvider store={store}>
                <NotificationProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route>
                                <Route path="/">
                                    <Route element={<Home />} index />
                                    <Route element={<Kek />} path="kek" />
                                    <Route element={<LiveChat />} path="live-chat" />
                                    <Route element={<UserHistory />} path="messages">
                                        <Route element={<UserHistory />} path=":username" />
                                    </Route>
                                    <Route element={<OverallStats />} path="overall-stats" />
                                    <Route element={<Navigate to="/" />} path="*" />
                                </Route>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </NotificationProvider>
            </ReduxProvider>
        </IntlProvider>
    );
};

ReactDOM.render(<App />, container);
