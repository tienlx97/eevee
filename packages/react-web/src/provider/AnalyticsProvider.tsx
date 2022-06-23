import * as React from 'react';
import { usePersistedState } from '../hooks/index';
import { generateId } from '../utilities/index';

export type AnalyticsContextValue = {
  userId: string | number | object;
};

const AnalyticsContext = React.createContext<AnalyticsContextValue | undefined>(undefined);

export const AnalyticsProvider: React.FC = ({ children }) => {
  const [userId] = usePersistedState(generateId(8), 'jwc/unique-id');

  const value = React.useMemo(() => ({ userId }), [userId]);

  // prettier-ignore
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
