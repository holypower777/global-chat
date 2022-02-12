import { Header } from 'platform-components';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';

import messages from '../../../global-chat.json';

const rootContainerId = 'root';

function createContainer(targetParent: Element) {
    const newContainer = document.createElement('div');
    newContainer.id = rootContainerId;
    return targetParent.appendChild(newContainer);
}

const container = document.getElementById(rootContainerId) ?? createContainer(document.body);

const App = () => {
    const [value, setValue] = useState('');

    return (
        <IntlProvider
            defaultLocale="en-US"
            locale={navigator.language}
            messages={messages['en-US'].common}
        >
            <Router>
                <Header 
                    handleChange={(e) => setValue(e.target.value)}
                    value={value}
                />
            </Router>
        </IntlProvider>
    );
};

ReactDOM.render(<App />, container);
