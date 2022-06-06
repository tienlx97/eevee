import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import { SideNavProps, SideNavState } from './SideNav.types';
import { Top } from './top';

export const useSideNav = (props: SideNavProps, ref: React.Ref<HTMLDivElement>): SideNavState => {
  const { content, top, ...rest } = props;

  const state: SideNavState = {
    components: {
      root: 'div',
      content: 'div',
      top: Top,
    },

    root: {
      ref,
      ...rest,
    },

    content: resolveShorthand(content, { required: true }),
    top: resolveShorthand(top, { required: true }),
  };

  return state;
};
