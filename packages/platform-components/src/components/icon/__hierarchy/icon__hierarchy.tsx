import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__hierarchy.scss';

const IconHierarchy = (props: SingleIconProps) => (
    <Icon ico="hierarchy" {...props}>
        <svg data-testid="icon__hierarchy" viewBox="0 0 12 12">
            <path d="M2.5 7.5V4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.625 11C3.52246 11 4.25 10.2725 4.25 9.375C4.25 8.47754 3.52246 7.75 2.625 7.75C1.72754 7.75 1 8.47754 1 9.375C1 10.2725 1.72754 11 2.625 11Z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.5 4C3.32843 4 4 3.32843 4 2.5C4 1.67157 3.32843 1 2.5 1C1.67157 1 1 1.67157 1 2.5C1 3.32843 1.67157 4 2.5 4Z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 4C10.3284 4 11 3.32843 11 2.5C11 1.67157 10.3284 1 9.5 1C8.67157 1 8 1.67157 8 2.5C8 3.32843 8.67157 4 9.5 4Z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.56494 7.49998C2.78994 6.62498 3.58994 5.97498 4.53494 5.97998L6.24994 5.98499C6.67494 5.98499 7.08494 5.89999 7.44994 5.73999" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </Icon>
);

export default IconHierarchy;
