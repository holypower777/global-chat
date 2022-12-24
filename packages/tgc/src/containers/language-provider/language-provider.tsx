import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import { ChildrenProps } from 'platform-components/src/typings';

import messages from '../../../../../global-chat.json';
import { getLanguage } from '../../store/slices/settings';

const LanguageProvider = ({ children }: ChildrenProps) => {
    const language = useSelector(getLanguage);

    return (
        <IntlProvider
            defaultLocale="en-US"
            locale={language} //@ts-ignore
            messages={messages[language].common}
        >
            {children}
        </IntlProvider>
    );
};

export default LanguageProvider;
