import { ChildrenProps } from 'platform-components/src/typings';
import React from 'react';

const LocationProvider = ({ children }: ChildrenProps) => {
    if (window.location.origin === 'https://twitch-global-chat.herokuapp.com' || window.location.origin === 'http://global-chat.ru') {
        window.location.href = `https://global-chat.ru${window.location.pathname}${window.location.search}`;
    }

    return <>{children}</>;
};

export default LocationProvider;
