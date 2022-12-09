import { render } from '@testing-library/react';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';

import messages from '../../../../global-chat.json';
import { RComp } from '../typings';

export const renderWithIntl = (component: RComp) => {
    return render(<IntlProvider
        defaultLocale="en-US"
        locale="en-US" //@ts-ignore
        messages={messages['en-US'].tests}
    >
        {component}
    </IntlProvider>);
};

export const renderWithRouter = (component: RComp) => {
    return render(<Router>
        {component}
    </Router>);
};

export const renderWithIntlAndRouter = (component: RComp) => {
    return renderWithIntl(<Router>
        {component}
    </Router>);
};
