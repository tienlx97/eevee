import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { PageNotFound } from '@pages/index';

type ErrorHandlerState = {
  errorStatusCode: number;
  from?: string;
};

export const ErrorHandler: React.FC = ({ children }) => {
  const location = useLocation();

  const renderContent = () => {
    if (!location.state) {
      return children;
    }

    const state = location.state as ErrorHandlerState;

    switch (state.errorStatusCode) {
      case 404:
        return <PageNotFound from={state.from} />;
      default:
        return children;
    }
  };

  return <>{renderContent()}</>;
};
