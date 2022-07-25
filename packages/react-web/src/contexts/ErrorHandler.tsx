import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { PageNotFound } from '../pages/PageNotFound/index';

export const ErrorHandler: React.FC = ({ children }) => {
  const location = useLocation();

  const renderContent = () => {
    if (!location.state) {
      return children;
    }

    switch ((location.state as any).errorStatusCode) {
      case 404:
        return <PageNotFound />;
      default:
        return children;
    }
  };

  return <>{renderContent()}</>;
};
