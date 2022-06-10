import * as React from 'react';
import { PageProps, PageState } from './Page.types';
import { breakPoints } from '@eevee/react-theme';
import { useMediaQuery } from '../../hooks/index';

export const usePage = (props: PageProps, ref: React.Ref<HTMLDivElement>): PageState => {
  const hide = useMediaQuery(breakPoints.lgAndSmaller);

  const state: PageState = {
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
