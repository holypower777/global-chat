import flagsmith from 'flagsmith';
import { FlagsmithProvider } from 'flagsmith/react';
import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, Switch } from 'wouter';

import { Spin } from 'platform-components';

import { CommonFooter } from './common.components';
import LanguageProvider from './containers/language-provider/language-provider';
import LocationProvider from './containers/location-provider/location-provider';
// import NotificationProvider from './containers/notification-provider/notification-provider';
// import UserProvider from './containers/user-provider/user-provider';
import { store } from './store/store';

const rootContainerId = 'root';

function createContainer(targetParent: Element) {
    const newContainer = document.createElement('div');
    newContainer.id = rootContainerId;
    return targetParent.appendChild(newContainer);
}

const container = document.getElementById(rootContainerId) ?? createContainer(document.body);
const root = createRoot(container);

const Home = lazy(() => import('./pages/home/home'));
const About = lazy(() => import('./pages/about/about'));

const App = () => {
    return (
        <FlagsmithProvider
            flagsmith={flagsmith}
            options={{
                environmentID: process.env.FLAGSMITH_API_KEY || '',
                angularHttpClient: false,
            }}
        >
            <ReduxProvider store={store}>
                <LanguageProvider>
                    {/* <UserProvider> */}
                    {/* <NotificationProvider> */}
                    <Suspense fallback={<Spin center />}>
                        <LocationProvider>
                            <Switch>
                                <Route component={Home} path="/" />
                                <Route component={About} path="/about" />
                            </Switch>
                            <CommonFooter />
                        </LocationProvider>
                    </Suspense>
                    {/* </NotificationProvider> */}
                    {/* </UserProvider> */}
                </LanguageProvider>
            </ReduxProvider>
        </FlagsmithProvider>
    );
};

root.render(<App />);
