import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import type { LinkProps, LinkState } from './Link.types';
import { useLinkState } from './useLinkState';

/**
 * Given user props, defines default props for the Link, calls useLinkState_unstable, and returns processed state.
 * @param props - User provided props to the Link component.
 * @param ref - User provided ref to be passed to the Link component.
 */
export const useLink = (props: LinkProps, ref: React.Ref<HTMLAnchorElement>): LinkState => {
  const { disabled = false, disabledFocusable = false, icon } = props;
  const as = props.as || 'a';
  const iconShorthand = resolveShorthand(icon);

  const state: LinkState = {
    // Props passed at the top-level
    disabled,
    disabledFocusable,
    linkType: 'internal',

    // Slots definition
    components: {
      root: 'a',
      icon: 'span',
    },

    root: {
      ref,
      ...props,
      as,
    },
    icon: iconShorthand,

    iconOnly: Boolean(iconShorthand?.children && !props.children),
  };

  useLinkState(state);

  return state;
};
