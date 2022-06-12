import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { UlProps } from './Ul.types';
import { useUl } from './useUl';
import { useUlStyles } from './useUlStyles';
import { renderUl } from './renderUl';

/**
 * A Link is a reference to data that a user can follow by clicking or tapping it.
 */
export const Ul: ForwardRefComponent<UlProps> = React.forwardRef((props: UlProps, ref: React.Ref<HTMLUListElement>) => {
  const state = useUl(props, ref);

  useUlStyles(state);

  return renderUl(state);
  // Work around some small mismatches in inferred types which don't matter in practice
}) as ForwardRefComponent<UlProps>;

Ul.displayName = 'Ul';
