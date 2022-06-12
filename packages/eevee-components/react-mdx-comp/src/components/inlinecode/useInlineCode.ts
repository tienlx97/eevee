import * as React from 'react';
import type { InlineCodeProps, InlineCodeState } from './InlineCode.types';

export const useInlineCode = (props: InlineCodeProps, ref?: React.Ref<HTMLElement>): InlineCodeState => {
  const { as, ...rest } = props;

  const state: InlineCodeState = {
    components: {
      root: 'code',
    },
    root: {
      ref,
      as: as || 'code',
      ...rest,
    },
  };

  return state;
};
