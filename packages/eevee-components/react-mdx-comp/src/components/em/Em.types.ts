import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type EmSlots = {
  root: NonNullable<Slot<'em'>>;
};

export type EmType = 'original' | 'default';

export type EmProps = ComponentProps<EmSlots> & {
  type?: EmType;
};

export type EmState = ComponentState<EmSlots> & Pick<EmProps, 'type'> & {};
