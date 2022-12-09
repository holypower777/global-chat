import React from 'react';
import { Link } from 'react-router-dom';

import Button, { ButtonProps } from './button';

interface NavButtonProps extends ButtonProps {
    href: string;
}

const NavButton = ({ href, ...buttonProps }: NavButtonProps) => (
    <Link to={href}>
        <Button {...buttonProps} />
    </Link>
);

export default NavButton;
