import * as React from 'react';
import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type ListSlots = {
  root: NonNullable<EeveeSlot<'li'>>;
  ordered: NonNullable<EeveeSlot<'ol'>>;
  unordered: NonNullable<EeveeSlot<'ul'>>;
  original: NonNullable<EeveeSlot<'ol'>>;
};

export type ListType = 'unordered' | 'ordered' | 'original';

export type ListProps = EeveeProps<Partial<ListSlots>> & {
  type?: ListType;
};

export type ListContextValue = ListType;

export type ListState = EeveeState<ListSlots> & {
  type: ListType;
};

export const ListContext = React.createContext<ListContextValue>('unordered');
