import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';
import type { ListType } from '../list/index';

export type ListItemSlots = {
  root: NonNullable<EeveeSlot<'li'>>;
  content: NonNullable<EeveeSlot<'div'>>;
};

export type IconProps = {
  [x: string]: () => JSX.Element;
};

export type ListItemProps = EeveeProps<Partial<ListItemSlots>> & {
  animated?: boolean;
  bullet?: 'default' | 'fullStar';
};

export type ListItemState = EeveeState<ListItemSlots> &
  Pick<ListItemProps, 'animated' | 'bullet'> & {
    type: ListType;
    iconSpring?: object;
    iconWrap?: string;
  };
