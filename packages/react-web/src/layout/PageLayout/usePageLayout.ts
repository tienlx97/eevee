import * as React from 'react';
import { breakPoints } from '@eevee/react-theme';
import { useMediaQuery } from '@hooks/index';

import { PageLayoutProps, PageLayoutState } from './Page.types';

export const usePageLayout = (props: PageLayoutProps, ref: React.Ref<HTMLDivElement>): PageLayoutState => {
  const hide = useMediaQuery(breakPoints.lgAndSmaller);

  const state: PageLayoutState = {
    hide,
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
