import { Notifications } from 'platform-components';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { getNotifications } from '../../store/slices/notifications';

interface NotificationProviderProps {
    children: ReactNode | Array<ReactNode>;
}

const NotificationProvider = ({
    children,
}: NotificationProviderProps) => {
    const notifications = useSelector(getNotifications);

    return (
        <>
            {children}
            <Notifications items={notifications} />
        </>
    );
};

export default NotificationProvider;
