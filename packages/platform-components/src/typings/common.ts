import { ReactNode } from 'react';

export type RComp = ReactNode | Array<ReactNode>;

export type SimpleCallback = () => void;
export type UpdateSettingsHandler = (key: string, value: unknown) => void;
export interface UpdateSettingsProps {
    updateSettings: (key: string, value: unknown) => void;
}
export interface ChildrenProps {
    children: RComp;
}

export interface OptionalChildrenProps {
    children?: RComp;
}

export interface MixProps {
    /** BEM mixes */
    mix?: string;
}

export type MessageFormatPrimitiveValue = ReactNode | string | number | boolean | null | undefined;
