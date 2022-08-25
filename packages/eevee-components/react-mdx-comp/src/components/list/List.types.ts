import * as React from 'react';
import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type ListSlots = {
  root: NonNullable<Slot<'li'>>;
  ordered: NonNullable<Slot<'ol'>>;
  unordered: NonNullable<Slot<'ul'>>;
  original: NonNullable<Slot<'ol'>>;
};

export type ListType = 'unordered' | 'ordered' | 'original';

export type ListProps = ComponentProps<Partial<ListSlots>> & {
  type?: ListType;
};

export type ListContextValue = ListType;

export type ListState = ComponentState<ListSlots> & {
  type: ListType;
};

export const ListContext = React.createContext<ListContextValue>('unordered');
