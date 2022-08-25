import * as React from 'react';

import { PageLayoutProps, PageLayoutState } from './Page.types';

export const usePageLayout = (props: PageLayoutProps, ref: React.Ref<HTMLDivElement>): PageLayoutState => {
  const state: PageLayoutState = {
    components: {
      root: 'div',
    },
    root: {
      ref,
      ...props,
    },
  };

  return state;
};
