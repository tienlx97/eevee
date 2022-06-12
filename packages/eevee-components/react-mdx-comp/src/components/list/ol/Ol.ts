import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { OlProps } from './Ol.types';
import { useOl } from './useOl';
import { useOlStyles } from './useOlStyles';
import { renderOl } from './renderOl';

/**
 * A Link is a reference to data that a user can follow by clicking or tapping it.
 */
export const Ol: ForwardRefComponent<OlProps> = React.forwardRef((props: OlProps, ref: React.Ref<HTMLOListElement>) => {
  const state = useOl(props, ref);

  useOlStyles(state);

  return renderOl(state);
  // Work around some small mismatches in inferred types which don't matter in practice
}) as ForwardRefComponent<OlProps>;

Ol.displayName = 'Ol';
