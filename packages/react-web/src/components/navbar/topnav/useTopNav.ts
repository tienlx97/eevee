import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import { TopNavProps, TopNavState } from './TopNav.types';

export const useTopNav = (props: TopNavProps, ref: React.Ref<HTMLDivElement>): TopNavState => {
  const { content, gap, ...rest } = props;

  const state: TopNavState = {
    components: {
      root: 'div',
      content: 'div',
      gap: 'div',
    },

    root: {
      ref,
      ...rest,
    },

    content: resolveShorthand(content, { required: true }),
    gap: resolveShorthand(gap, { required: true }),
  };

  return state;
};
