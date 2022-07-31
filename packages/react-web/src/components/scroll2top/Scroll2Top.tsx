import * as React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Scroll2Top: React.FC = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};
