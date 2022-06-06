import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import { TopNavProps, TopNavState } from './TopNav.types';

export const useTopNav = (props: TopNavProps, ref: React.Ref<HTMLDivElement>): TopNavState => {
  const { content, ...rest } = props;

  const state: TopNavState = {
    components: {
      root: 'div',
      content: 'div',
    },

    root: {
      ref,
      ...rest,
    },

    content: resolveShorthand(content, { required: true }),
  };

  return state;
};
