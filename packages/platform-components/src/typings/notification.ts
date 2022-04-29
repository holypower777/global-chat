import { ReactNode } from 'react';

import { SNACKBAR_TYPE } from '../components/constants';

import { SimpleCallback } from './common';

export interface NotificationRaw {
    children?: ReactNode | Array<ReactNode> | null;
    id?: string | null;
    type?: SNACKBAR_TYPE;
    autoHideDuration?: number | null;
    mix?: string;
    disableWindowBlurListener?: boolean;
    disableReloadButton?: boolean;
    disableCloseButton?: boolean;
}

export interface Notification {
    children?: ReactNode | Array<ReactNode> | null;
    id?: string | null;
    key: number;
    type?: SNACKBAR_TYPE;
    autoHideDuration?: number | null;
    onClose?: SimpleCallback;
    mix?: string;
    disableWindowBlurListener?: boolean;
    disableCloseButton?: boolean;
    disableReloadButton?: boolean;
    life?: object | null;
}

export type NotificationsType = Array<Notification>;
