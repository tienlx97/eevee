import * as React from 'react';
import type { OlProps, OlState } from './Ol.types';

import { getNativeElementProps } from '@eevee/react-utilities';

export const useOl = (props: OlProps, ref?: React.Ref<HTMLOListElement>): OlState => {
  const { as, olType = 'ordered', ...rest } = props;

  const state: OlState = {
    olType,
    components: {
      root: 'ol',
    },
    root: getNativeElementProps('ol', {
      as: as || 'ol',
      ref,
      ...rest,
    }),
  };

  return state;
};
