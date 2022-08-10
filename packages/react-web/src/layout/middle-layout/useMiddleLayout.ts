import * as React from 'react';
import { getNativeElementProps } from '@eevee/react-utilities';
import type { MiddleLayoutProps, MiddleLayoutState } from './MiddleLayout.types';
import { useMiddleLayoutState } from './useMiddleLayoutState';

/**
 * Create the state required to render WriteLayout.
 *
 * The returned state can be modified with hooks such as useWriteLayoutStyles_unstable,
 * before being passed to renderWriteLayout_unstable.
 *
 * @param props - props from this instance of WriteLayout
 * @param ref - reference to root HTMLElement of WriteLayout
 */
export const useMiddleLayout = (props: MiddleLayoutProps, ref: React.Ref<HTMLElement>): MiddleLayoutState => {
  const state: MiddleLayoutState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'main',
    },
    styles: [],
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('main', {
      ref,
      ...props,
    }),
  };

  useMiddleLayoutState(state);

  return state;
};
