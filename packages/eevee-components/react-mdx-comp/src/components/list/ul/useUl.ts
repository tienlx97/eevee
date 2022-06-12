import * as React from 'react';
import type { UlProps, UlState } from './Ul.types';

export const useUl = (props: UlProps, ref?: React.Ref<HTMLUListElement>): UlState => {
  const { as, ...rest } = props;

  const state: UlState = {
    components: {
      root: 'ul',
    },
    root: {
      ref,
      as: as || 'ul',
      ...rest,
    },
  };

  return state;
};
