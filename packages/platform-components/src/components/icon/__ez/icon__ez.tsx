import { SimpleCallback } from 'platform-components/src/typings';
import React from 'react';
import { useIntl } from 'react-intl';

import Icon from '../icon';

import './icon__ez.scss';

interface IconEzProps {
    handleClick?: SimpleCallback;
}

const IconEz = (props: IconEzProps) => {
    const intl = useIntl();

    return (
        <Icon ico="ez" {...props}>
            <img 
                alt={intl.formatMessage({ id: 'logo.icon.imageAlt' })} 
                src={intl.formatMessage({ id: 'logo.icon.imageSrc' })}
            />
        </Icon>
    );
};

export default IconEz;
