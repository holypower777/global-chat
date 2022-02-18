import React from 'react';
import { useIntl } from 'react-intl';

import Icon, { SingleIconProps } from '../icon';

import './icon__ez.scss';

const IconEz = (props: SingleIconProps) => {
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
