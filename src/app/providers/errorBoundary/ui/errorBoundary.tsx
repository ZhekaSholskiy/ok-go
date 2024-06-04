import React, {ErrorInfo, ReactNode} from 'react';
import {ErrorPage} from 'widgets/errorPage';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info);
    }

    render() {
        const {children} = this.props;
        const {hasError} = this.state;

        if (hasError) {
            // You can render any custom fallback UI
            return <ErrorPage />;
        }

        return children;
    }
}

export default ErrorBoundary;
