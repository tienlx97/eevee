import * as React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '@context/AuthContext';
import { Spinner } from '@components/spinner-2/index';
import { useToast } from '@eevee/react-toast';

type ProtectedRouteProps = {
  redirectPath?: string;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectPath = '/home' }) => {
  const { isAuthReady, user } = useAuthContext();

  if (!isAuthReady && !user) {
    return (
      <div style={{ width: '100%' }}>
        <Spinner />
      </div>
    );
  }

  if (isAuthReady && !user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children ? children : <Outlet />}</>;
};
