import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';
import type { Toc } from 'typings/my-mdx/index';

export type RightSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type RightProps = EeveeProps<Partial<RightSlots>> & {};

export type RightState = EeveeState<RightSlots> & {
  toc?: any;
};
