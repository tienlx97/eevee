import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { EmProps } from './Em.types';
import { useEm } from './useEm';
import { useEmStyles } from './useEmStyles';
import { renderEm } from './renderEm';

export const Em: ForwardRefComponent<EmProps> = React.forwardRef((props: EmProps, ref: React.Ref<HTMLElement>) => {
  const state = useEm(props, ref);

  useEmStyles(state);

  return renderEm(state);
  // Work around some small mismatches in inferred types which don't matter in practice
}) as ForwardRefComponent<EmProps>;

Em.displayName = 'Em';
