import { ReactNode } from 'react';

export type SimpleCallback = () => void;
export interface UpdateSettingsProps {
    updateSettings: (key: string, value: unknown) => void;
}
export interface ChildrenProps {
    children: ReactNode | Array<ReactNode>;
}
