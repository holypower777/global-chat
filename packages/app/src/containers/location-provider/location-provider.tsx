import { LINKS } from 'platform-components';
import { ChildrenProps } from 'platform-components/src/typings';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { matchPath, useLocation } from 'react-router-dom';

const LocationProvider = ({ children }: ChildrenProps) => {
    const intl = useIntl();
    const loc = useLocation();

    if (window.location.origin === 'https://twitch-global-chat.herokuapp.com' || window.location.origin === 'http://global-chat.ru') {
        window.location.href = `https://global-chat.ru${window.location.pathname}${window.location.search}`;
    }

    useEffect(() => {
        if (matchPath(`${LINKS.MESSAGES}/:username`, loc.pathname)) {
            document.title = loc.pathname.slice(10);
        }

        if (matchPath(LINKS.OVERALL_STATS, loc.pathname)) {
            document.title = intl.formatMessage({ id: 'title.overallStats' });
        }

        if (matchPath(LINKS.HOME, loc.pathname)) {
            document.title = intl.formatMessage({ id: 'title.common' });
        }

        if (matchPath(LINKS.LIVE_CHAT, loc.pathname)) {
            document.title = intl.formatMessage({ id: 'title.liveChat' });
        }
    }, [loc]);

    return <>{children}</>;
};

export default LocationProvider;
