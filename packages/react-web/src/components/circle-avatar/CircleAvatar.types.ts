import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';

export type CircleAvatarSlots = {
  root: NonNullable<Slot<'div'>>;
  img: NonNullable<Slot<'img'>>;
};

export type CircleAvatarProps = ComponentProps<Partial<CircleAvatarSlots>> & {
  width?: number;
  height?: number;
  url: string;
  title?: string;
  href?: string;
};

export type CircleAvatarState = ComponentState<CircleAvatarSlots> &
  Required<Pick<CircleAvatarProps, 'href'>> &
  Pick<CircleAvatarProps, 'width' | 'height' | 'url' | 'title'> & {
    linkClassName?: string;
  };
