import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import React, { ErrorInfo } from 'react';
import { connect } from 'react-redux';

import { NOTIFICATIONS_DURATION, SNACKBAR_TYPE } from 'platform-components';
import { ChildrenProps } from 'platform-components/src/typings';

import { addNotification } from '../../utils';

interface ErrorBoundaryProps extends ChildrenProps {
    dispatch: Dispatch<AnyAction>;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        addNotification(
            {
                id: 'notification.commonError',
                type: SNACKBAR_TYPE.ERROR,
                autoHideDuration: NOTIFICATIONS_DURATION.M,
            },
            this.props.dispatch
        );

        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            this.setState({ hasError: false });
        }

        return this.props.children;
    }
}

export default connect()(ErrorBoundary);
