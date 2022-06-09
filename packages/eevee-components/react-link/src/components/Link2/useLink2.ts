import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import type { LinkProps2, LinkState2 } from './Link2.types';
import { useLinkState2 } from './useLinkState2';

/**
 * Given user props, defines default props for the Link, calls useLinkState_unstable, and returns processed state.
 * @param props - User provided props to the Link component.
 * @param ref - User provided ref to be passed to the Link component.
 */
export const useLink2 = (props: LinkProps2, ref: React.Ref<HTMLAnchorElement>): LinkState2 => {
  const { iconAndText, text, icon } = props;

  const as = props.as || 'a';

  const iconAndTextShorthand = resolveShorthand(iconAndText, {
    defaultProps: {
      as: 'div',
    },
    required: true,
  });

  const textShorthand = resolveShorthand(text, {
    defaultProps: {
      as: 'span',
    },
    required: true,
  });

  const state: LinkState2 = {
    // Props passed at the top-level
    linkType: 'internal',

    // Slots definition
    components: {
      root: 'a',
      iconAndText: 'div',
      text: 'span',
    },

    root: {
      ref,
      ...props,
      as,
    },
    iconAndText: iconAndTextShorthand,
    text: textShorthand,

    iconOnly: Boolean(icon && !props.children),
    icon,
  };

  useLinkState2(state);

  return state;
};
