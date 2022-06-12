import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { ListItemProps } from './ListItem.types';
import { useListItem } from './useListItem';
import { useListItemStyles } from './useListItemStyles';
import { renderListItem } from './renderListItem';

/**
 * A Link is a reference to data that a user can follow by clicking or tapping it.
 */
export const ListItem: ForwardRefComponent<ListItemProps> = React.forwardRef(
  (props: ListItemProps, ref: React.Ref<HTMLLIElement>) => {
    const state = useListItem(props, ref);

    useListItemStyles(state);

    return renderListItem(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<ListItemProps>;

ListItem.displayName = 'ListItem';
