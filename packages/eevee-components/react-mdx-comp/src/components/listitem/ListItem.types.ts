import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';
import type { ListType } from '../list/index';

export type ListItemSlots = {
  root: NonNullable<Slot<'li'>>;
  content: NonNullable<Slot<'div'>>;
};

export type IconProps = {
  [x: string]: () => JSX.Element;
};

export type ListItemProps = ComponentProps<Partial<ListItemSlots>> & {
  animated?: boolean;
  bullet?: 'default' | 'fullStar';
};

export type ListItemState = ComponentState<ListItemSlots> &
  Pick<ListItemProps, 'animated' | 'bullet'> & {
    type: ListType;
    iconSpring?: object;
    iconWrap?: string;
  };
