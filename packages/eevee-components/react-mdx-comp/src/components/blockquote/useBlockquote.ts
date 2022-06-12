import * as React from 'react';
import type { BlockquoteProps, BlockquoteState } from './Blockquote.types';

export const useBlockquote = (props: BlockquoteProps, ref?: React.Ref<HTMLElement>): BlockquoteState => {
  const { as, ...rest } = props;

  const state: BlockquoteState = {
    components: {
      root: 'blockquote',
    },
    root: {
      ref,
      as: as || 'blockquote',
      ...rest,
    },
  };

  return state;
};
