import * as React from 'react';
import type { LinkProps, LinkState } from './Link.types';
import { useLinkState } from './useLinkState';
import { getNativeElementProps } from '@eevee/react-utilities';

/**
 * Given user props, defines default props for the Link, calls useLinkState_unstable, and returns processed state.
 * @param props - User provided props to the Link component.
 * @param ref - User provided ref to be passed to the Link component.
 */
export const useLink = (props: LinkProps, ref: React.Ref<HTMLAnchorElement>): LinkState => {
  const state: LinkState = {
    // Props passed at the top-level
    linkType: 'internal',
    isCurrentLoc: false,

    // Slots definition
    components: {
      root: 'a',
    },

    root: getNativeElementProps('a', {
      ref,
      ...props,
    }),
  };

  useLinkState(state);

  return state;
};
