import React from 'react';

import Button, { ButtonProps } from './button';

interface ExternalNavButtonProps extends ButtonProps {
    href: string;
    target?: '_blank' | '_self';
}

const ExternalNavButton = ({ href, target = '_blank', ...buttonProps }: ExternalNavButtonProps) => (
    <a href={href} target={target}>
        <Button {...buttonProps} />
    </a>
);

export default ExternalNavButton;
