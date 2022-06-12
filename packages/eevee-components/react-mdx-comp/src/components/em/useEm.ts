import * as React from 'react';
import type { EmProps, EmState } from './Em.types';

import { getNativeElementProps } from '@eevee/react-utilities';

export const useEm = (props: EmProps, ref?: React.Ref<HTMLElement>): EmState => {
  const { as, type = 'default', ...rest } = props;

  const state: EmState = {
    type,
    components: {
      root: 'em',
    },
    root: getNativeElementProps('em', {
      as: as || 'em',
      ref,
      ...rest,
    }),
  };

  return state;
};
