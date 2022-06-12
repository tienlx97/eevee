import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import type { ListProps, ListState } from './List.types';

export const useList = (props: ListProps, ref?: React.Ref<HTMLLIElement>): ListState => {
  const { as, ordered, original, type = 'unordered', unordered, ...rest } = props;

  const state: ListState = {
    components: {
      root: 'li',
      ordered: 'ol',
      unordered: 'ul',
      original: 'ol',
    },
    root: {
      ref,
      as: as || 'li',
      ...rest,
    },
    type,
    ordered: resolveShorthand(ordered, {
      defaultProps: {
        as: 'ol',
      },
      required: true,
    }),
    unordered: resolveShorthand(unordered, {
      defaultProps: {
        as: 'ul',
      },
      required: true,
    }),
    original: resolveShorthand(original, {
      defaultProps: {
        as: 'ol',
      },
      required: true,
    }),
  };

  return state;
};
