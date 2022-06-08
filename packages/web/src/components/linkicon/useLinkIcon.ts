import * as React from 'react';
import type { LinkIconProps, LinkIconState } from './Link.types';
import { Linkr } from '@eevee/react-link';
import { resolveShorthand } from '@eevee/react-utilities';

export const useLinkIcon = (props: LinkIconProps, ref: React.Ref<HTMLAnchorElement>): LinkIconState => {
  const { as = 'div', link, ...rest } = props;

  const state: LinkIconState = {
    components: {
      root: 'div',
      link: Linkr,
    },

    root: {
      as,
      ...rest,
    },
    link: resolveShorthand(link, {
      defaultProps: {
        ref,
      },
    }),
  };

  return state;
};
