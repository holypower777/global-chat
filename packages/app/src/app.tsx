import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import Home from './components/home/home';
import LiveChat from './components/live-chat/live-chat';
import OverallStats from './components/overall-stats/overall-stats';
import UserHistory from './components/user-history/user-history';
import LanguageProvider from './containers/language-provider/language-provider';
import NotificationProvider from './containers/notification-provider/notification-provider';
import PossibilitiesProvider from './containers/possibilities-provider/possibilities-provider';
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
        <ReduxProvider store={store}>
            <LanguageProvider>
                <NotificationProvider>
                    <PossibilitiesProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route>
                                    <Route path="/">
                                        <Route element={<Home />} index />
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
                    </PossibilitiesProvider>
                </NotificationProvider>
            </LanguageProvider>
        </ReduxProvider>
    );
};

ReactDOM.render(<App />, container);
