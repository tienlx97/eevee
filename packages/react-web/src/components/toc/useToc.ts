import * as React from 'react';
import { getNativeElementProps } from '@eevee/react-utilities';
import type { TocProps, TocState } from './Toc.types';
import { useTocState } from './useTocState';

/**
 * Create the state required to render Toc.
 *
 * The returned state can be modified with hooks such as useTocStyles_unstable,
 * before being passed to renderToc_unstable.
 *
 * @param props - props from this instance of Toc
 * @param ref - reference to root HTMLElement of Toc
 */
export const useToc = (props: TocProps, ref: React.Ref<HTMLElement>): TocState => {
  const state: TocState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };

  useTocState(state);

  return state;
};
