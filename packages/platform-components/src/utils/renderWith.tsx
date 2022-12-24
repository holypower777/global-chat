import { render } from '@testing-library/react';
import React from 'react';
import { IntlProvider } from 'react-intl';

import messages from '../../../../global-chat.json';
import { RComp } from '../typings';

export const renderWithIntl = (component: RComp) => {
    return render(
        <IntlProvider
            defaultLocale="en-US"
            locale="en-US" //@ts-ignore
            messages={messages['en-US'].tests}
        >
            {component}
        </IntlProvider>
    );
};
