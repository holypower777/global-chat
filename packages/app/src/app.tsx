import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import messages from '../../../global-chat.json';

import DevPage from './components/dev-page/dev-page';
import Home from './components/home/home';
import UserHistory from './components/user-history/user-history';
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
                <BrowserRouter>
                    <Routes>
                        <Route>
                            <Route path="/">
                                <Route element={<Home />} index/>
                                <Route element={<UserHistory />} path="messages">
                                    <Route element={<UserHistory />} path=":username" />
                                </Route>
                                <Route element={<DevPage />} path="overall-stats"/>
                                <Route element={<Navigate to="/"/>} path="*"/>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ReduxProvider>
        </IntlProvider>
    );
};

ReactDOM.render(<App />, container);
