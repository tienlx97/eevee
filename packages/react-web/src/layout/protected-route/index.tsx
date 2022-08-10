import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '@context/AuthContext';
import { Spinner } from '@components/spinner2/index';

type ProtectedRouteProps = {
  redirectPath?: string;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectPath = '/home' }) => {
  const { state } = useAuthContext();

  if (!state.authIsReady) {
    return (
      <div style={{ width: '100%' }}>
        <Spinner />
      </div>
    );
  }

  if (!state.user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children ? children : <Outlet />}</>;
};
