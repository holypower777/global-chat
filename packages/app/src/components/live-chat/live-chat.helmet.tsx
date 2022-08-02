import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

const LiveChatHelmet = () => {
    const intl = useIntl();

    return (
        <Helmet defaultTitle={intl.formatMessage({ id: 'title.common' })}>
            <meta content={intl.formatMessage({ id: 'meta.desc.liveChat' })} name="description" />
            <title>{intl.formatMessage({ id: 'title.liveChat' })}</title>
        </Helmet>
    );
};

export default LiveChatHelmet;
