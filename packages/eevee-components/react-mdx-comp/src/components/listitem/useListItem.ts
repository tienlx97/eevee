import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import type { ListItemProps, ListItemState } from './ListItem.types';
import { ListContext } from '../list/index';
import { useListItemState } from './useListItemState';
export const useListItem = (props: ListItemProps, ref?: React.Ref<HTMLLIElement>): ListItemState => {
  const { as, content, animated, bullet = 'default', ...rest } = props;
  const context = React.useContext(ListContext);
  const state: ListItemState = {
    type: context,
    animated,
    bullet,
    components: {
      root: 'li',
      content: 'div',
    },
    root: {
      ref,
      as: as || 'li',
      ...rest,
    },
    content: resolveShorthand(content, {
      defaultProps: {
        as: 'div',
      },
      required: true,
    }),
  };

  useListItemState(state);

  return state;
};
