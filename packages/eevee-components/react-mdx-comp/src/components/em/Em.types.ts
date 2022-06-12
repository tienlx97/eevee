import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type EmSlots = {
  root: NonNullable<EeveeSlot<'em'>>;
};

export type EmType = 'original' | 'default';

export type EmProps = EeveeProps<EmSlots> & {
  type?: EmType;
};

export type EmState = EeveeState<EmSlots> & Pick<EmProps, 'type'> & {};
