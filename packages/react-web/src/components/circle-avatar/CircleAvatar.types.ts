import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type CircleAvatarSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
  img: NonNullable<EeveeSlot<'img'>>;
};

export type CircleAvatarProps = EeveeProps<Partial<CircleAvatarSlots>> & {
  width?: number;
  height?: number;
  url: string;
  title?: string;
};

export type CircleAvatarState = EeveeState<CircleAvatarSlots> &
  Pick<CircleAvatarProps, 'width' | 'height' | 'url' | 'title'> & {
    linkClassName?: string;
  };
