import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { ListProps } from './List.types';
import { useList } from './useList';
import { useListStyles } from './useListStyles';
import { renderList } from './renderList';

/**
 * A Link is a reference to data that a user can follow by clicking or tapping it.
 */
export const List: ForwardRefComponent<ListProps> = React.forwardRef(
  (props: ListProps, ref: React.Ref<HTMLLIElement>) => {
    const state = useList(props, ref);

    useListStyles(state);

    return renderList(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<ListProps>;

List.displayName = 'List';
