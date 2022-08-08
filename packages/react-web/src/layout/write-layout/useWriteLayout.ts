import * as React from 'react';
import { getNativeElementProps } from '@eevee/react-utilities';
import type { WriteLayoutProps, WriteLayoutState } from './WriteLayout.types';
import { useWriteLayoutState } from './useWriteLayoutState';

/**
 * Create the state required to render WriteLayout.
 *
 * The returned state can be modified with hooks such as useWriteLayoutStyles_unstable,
 * before being passed to renderWriteLayout_unstable.
 *
 * @param props - props from this instance of WriteLayout
 * @param ref - reference to root HTMLElement of WriteLayout
 */
export const useWriteLayout = (props: WriteLayoutProps, ref: React.Ref<HTMLElement>): WriteLayoutState => {
  const state: WriteLayoutState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'main',
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('main', {
      ref,
      ...props,
    }),
  };

  useWriteLayoutState(state);

  return state;
};
