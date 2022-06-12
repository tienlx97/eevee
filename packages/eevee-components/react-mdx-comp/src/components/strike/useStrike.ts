import * as React from 'react';
import type { StrikeProps, StrikeState } from './Strike.types';

import { getNativeElementProps } from '@eevee/react-utilities';

export const useStrike = (props: StrikeProps, ref?: React.Ref<HTMLSpanElement>): StrikeState => {
  const { as, ...rest } = props;

  const state: StrikeState = {
    components: {
      root: 'span',
    },
    root: getNativeElementProps('span', {
      as: as || 'span',
      ref,
      ...rest,
    }),
  };

  return state;
};
