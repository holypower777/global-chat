import React from 'react';
import { IntlProvider } from 'react-intl';

import messages from '../global-chat.json';

export const parameters = {
    controls: {
        expanded: true,
        matchers: {
            date: /Date$/,
        },
        sort: 'requiredFirst',
    },
};

export const globalTypes = {
    locale: {
        name: 'locale',
        defaultValue: 'en-US',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'ru-RU', title: 'Russian' },
                { value: 'en-US', title: 'English' },
            ],
        },
    },
};

export const decorators = [
    (Story: React.FC, context: any) => {
        const locale = context.globals.locale;

        return (
            <IntlProvider
                locale={locale}
                defaultLocale={locale}
                messages={messages[locale]['common']}
            >
                <Story />
            </IntlProvider>
        )
    },
];
