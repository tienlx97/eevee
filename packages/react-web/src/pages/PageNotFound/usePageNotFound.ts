import * as React from 'react';
import { getNativeElementProps } from '@eevee/react-utilities';
import type { PageNotFoundProps, PageNotFoundState } from './PageNotFound.types';
import { usePageNotFoundState } from './usePageNotFoundState';

/**
 * Create the state required to render PageNotFound.
 *
 * The returned state can be modified with hooks such as usePageNotFoundStyles,
 * before being passed to renderPageNotFound.
 *
 * @param props - props from this instance of PageNotFound
 * @param ref - reference to root HTMLElement of PageNotFound
 */
export const usePageNotFound = (props: PageNotFoundProps, ref: React.Ref<HTMLElement>): PageNotFoundState => {
  const state: PageNotFoundState = {
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

  usePageNotFoundState(state);

  return state;
};
