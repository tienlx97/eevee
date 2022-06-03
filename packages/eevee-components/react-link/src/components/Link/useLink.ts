import * as React from 'react';
import type { LinkProps, LinkState } from './Link.types';
import { useLinkState } from './useLinkState';

/**
 * Given user props, defines default props for the Link, calls useLinkState_unstable, and returns processed state.
 * @param props - User provided props to the Link component.
 * @param ref - User provided ref to be passed to the Link component.
 */
export const useLink = (props: LinkProps, ref: React.Ref<HTMLAnchorElement>): LinkState => {
  const { appearance = 'josh-comeau', disabled = false, disabledFocusable = false } = props;
  const as = props.as || 'a';

  const state: LinkState = {
    // Props passed at the top-level
    appearance,
    disabled,
    disabledFocusable,
    linkType: 'internal',

    // Slots definition
    components: {
      root: 'a',
    },

    root: {
      ref,
      ...props,
      as,
    },
  };

  useLinkState(state);

  return state;
};
