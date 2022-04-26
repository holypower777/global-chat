import b from 'b_';
import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { HEADER_TEXT_SIZE, TEXT_WEIGHT } from '../constants';
import { H1 } from '../header-text/header-text';
import { IconEz } from '../icon/icon';

import './logo.scss';

interface LogoProps {
    alwaysFull?: boolean;
    size?: HEADER_TEXT_SIZE;
}

const Logo = ({ alwaysFull = false, size = HEADER_TEXT_SIZE.L }: LogoProps) => {
    const intl = useIntl();

    return (
        <Link className={b('logo', 'link')} to="/">
            <div className={b('logo', { adaptive: !alwaysFull, size })}>
                <H1 mix={b('logo', 'text')} size={size} weight={TEXT_WEIGHT.L}>
                    <span className={b('logo', 'text-first')}>{intl.formatMessage({ id: 'logo.text.firstWord' })} </span>
                    {intl.formatMessage({ id: 'logo.text.restWords' })}
                </H1>
                <IconEz />
            </div>
        </Link>
    );
};

Logo.SIZE = HEADER_TEXT_SIZE;

export default Logo;
