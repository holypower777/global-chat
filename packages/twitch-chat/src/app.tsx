import { Logo, UserCard } from 'platform-components';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import messages from '../../../global-chat.json';

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
            <div>
                <Logo />
                <UserCard 
                    avatarSrc="https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-70x70.png"
                    createdAt={new Date()}
                    totalMessages={2}
                    userId={12932497}
                    username="Gazely"
                />
                heleloddwqwqw dwq../
            </div>
        </IntlProvider>
    );
};

ReactDOM.render(<App />, container);
