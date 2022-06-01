import * as React from 'react';
import type { EeveeProviderProps } from './EeveeProvider.types';
import { useEeveeProvider } from './useEeveeProvider';
import { renderEeveeProvider } from './renderEeveeProvider';
import { useEeveeProviderContextValues } from './useEeveeProviderContextValues';

export const EeveeProvider: React.FC<EeveeProviderProps> = ({ children, ...props }) => {
  const state = useEeveeProvider(props);

  // Inject style here

  let contextValues = useEeveeProviderContextValues(state);
  contextValues.children = children;

  return renderEeveeProvider(contextValues);
};

EeveeProvider.displayName = 'EeveeProvider';
