import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import { MainLayoutProps, MainLayoutState } from './MainLayout.types';

export const useMainLayout = (props: MainLayoutProps, ref: React.Ref<HTMLElement>): MainLayoutState => {
  const { content, ...rest } = props;
  const state: MainLayoutState = {
    components: {
      root: 'main',
      content: 'div',
    },

    root: {
      ref,
      ...rest,
    },
    content: resolveShorthand(content, { defaultProps: { as: 'div' }, required: true }),
  };

  return state;
};
