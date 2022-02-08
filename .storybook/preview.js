import React from 'react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';

const messages = require(`../global-chat.json`);

const withThemeProvider = (Story, context) => {
    const theme = getTheme(context.globals.theme);
    return (
        <ThemeProvider theme={theme}>
            <Story {...context} />
        </ThemeProvider>
    )
}

export const decorators = [
    (Story, context) => {
        const locale = context.globals.locale;
        const defaultLocale = context.parameters.globalTypes.locale.defaultValue

        return (
            <MemoryRouter>
                <IntlProvider
                    locale={context.globals.locale}
                    defaultLocale={defaultLocale}
                    messages={messages[locale]['common']}
                >
                    <Story />
                </IntlProvider>
            </MemoryRouter>
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
