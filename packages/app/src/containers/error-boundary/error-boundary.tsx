import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { SNACKBAR_TYPE } from 'platform-components';
import React, { ErrorInfo, ReactNode } from 'react';
import { connect } from 'react-redux';

import { addNotification } from '../../utils';

interface ErrorBoundaryProps {
    dispatch: Dispatch<AnyAction>;
    children: ReactNode | Array<ReactNode>;
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
        addNotification({
            id: 'notification.commonError',
            type: SNACKBAR_TYPE.ERROR,
            autoHideDuration: 6000,
        }, this.props.dispatch);

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
