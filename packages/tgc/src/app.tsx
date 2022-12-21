import flagsmith from 'flagsmith';
import { FlagsmithProvider } from 'flagsmith/react';
import { Spin } from 'platform-components';
import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, Switch } from 'wouter';

import { withHeader, CommonFooter } from './common.components';
import NoLimits from './components/no-limits/no-limits';
import LanguageProvider from './containers/language-provider/language-provider';
import LocationProvider from './containers/location-provider/location-provider';
import NotificationProvider from './containers/notification-provider/notification-provider';
import UserProvider from './containers/user-provider/user-provider';
import { store } from './store/store';

const rootContainerId = 'root';

function createContainer(targetParent: Element) {
    const newContainer = document.createElement('div');
    newContainer.id = rootContainerId;
    return targetParent.appendChild(newContainer);
}

const container = document.getElementById(rootContainerId) ?? createContainer(document.body);
const root = createRoot(container);

// const LiveChat = lazy(() => import('./components/live-chat/live-chat'));
// const OverallStats = lazy(() => import('./components/overall-stats/overall-stats'));
const Home = lazy(() => import('./pages/home/home'));
// const UserHistory = lazy(() => import('./components/user-history/user-history'));
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
                    <UserProvider>
                        <NotificationProvider>
                            <Suspense fallback={<Spin center/>}>
                                <LocationProvider>
                                    <Switch>
                                        <Route component={Home} path="/"/>
                                        <Route component={About} path="/about"/>
                                        {/*<Route element={withHeader(<LiveChat/>)} path="live-chat"/>*/}
                                        {/*<Route element={withHeader(<UserHistory/>)} path="messages">*/}
                                        {/*    <Route element={withHeader(<UserHistory/>)} path=":username"/>*/}
                                        {/*</Route>*/}
                                        {/*<Route element={withHeader(<OverallStats/>)} path="overall-stats"/>*/}
                                        {/*<Route component={withHeader(<NoLimits/>)} path="no-limits"/>*/}
                                        {/*<Route component={withHeader(<About/>)} path="about"/>*/}
                                        {/*<Route element={<Navigate to="/"/>} path="*"/>*/}
                                    </Switch>
                                    <CommonFooter/>
                                </LocationProvider>
                            </Suspense>
                        </NotificationProvider>
                    </UserProvider>
                </LanguageProvider>
            </ReduxProvider>
        </FlagsmithProvider>
    );
};

root.render(<App/>);
