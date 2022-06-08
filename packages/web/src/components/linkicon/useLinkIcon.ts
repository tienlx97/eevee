import * as React from 'react';
import type { LinkIconProps, LinkIconState } from './Link.types';
import { useLocation } from 'react-router-dom';
import { Linkr } from '@eevee/react-link';
import { resolveShorthand } from '@eevee/react-utilities';

export const useLinkIcon = (props: LinkIconProps, ref: React.Ref<HTMLAnchorElement>): LinkIconState => {
  const { as = 'a', wrapper, href, ...rest } = props;

  const wrapperShorthand = resolveShorthand(wrapper);
  wrapperShorthand.as = 'div';

  const state: LinkIconState = {
    components: {
      wrapper: 'div',
      root: Linkr,
    },

    wrapper: wrapperShorthand,
    root: {
      ref,
      as,
      href,
      ...rest,
    },
  };

  return state;
};
