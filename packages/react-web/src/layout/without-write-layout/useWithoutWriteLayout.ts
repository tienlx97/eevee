import * as React from 'react';
import { getNativeElementProps } from '@eevee/react-utilities';
import type { WithoutWriteLayoutProps, WithoutWriteLayoutState } from './WithoutWriteLayout.types';
import { useWithoutWriteLayoutState } from './useWithoutWriteLayoutState';
import { useMediaQuery } from '@hooks/index';
import { breakPoints } from '@eevee/react-theme';

/**
 * Create the state required to render WithoutWriteLayout.
 *
 * The returned state can be modified with hooks such as useWithoutWriteLayoutStyles_unstable,
 * before being passed to renderWithoutWriteLayout_unstable.
 *
 * @param props - props from this instance of WithoutWriteLayout
 * @param ref - reference to root HTMLElement of WithoutWriteLayout
 */
export const useWithoutWriteLayout = (
  props: WithoutWriteLayoutProps,
  ref: React.Ref<HTMLElement>,
): WithoutWriteLayoutState => {
  const hide = useMediaQuery(breakPoints.lgAndSmaller);

  const state: WithoutWriteLayoutState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
    },
    hide,
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };

  useWithoutWriteLayoutState(state);

  return state;
};
