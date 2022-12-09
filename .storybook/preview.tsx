import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';

const messages = require(`../global-chat.json`);

export const parameters = {
    controls: {
        expanded: true,
        matchers: {
            date: /Date$/,
        },
        sort: 'requiredFirst',
    },
};

export const decorators = [
    (Story: React.FC, context: any) => {
        const locale = context.globals.locale;
        const defaultLocale = context.parameters.globalTypes.locale.defaultValue

        return (
            <IntlProvider
                locale={context.globals.locale}
                defaultLocale={defaultLocale}
                messages={messages[locale]['common']}
            >
                <Router>
                    <Story />
                </Router>
            </IntlProvider>
        )
    },
];

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
