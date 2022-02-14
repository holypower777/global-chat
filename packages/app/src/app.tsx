import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import messages from '../../../global-chat.json';

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
                <Router>
                    <UserHistory />
                </Router>
            </ReduxProvider>
        </IntlProvider>
    );
};

ReactDOM.render(<App />, container);
