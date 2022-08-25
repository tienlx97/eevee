import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type OlSlots = {
  root: NonNullable<Slot<'ol'>>;
};

export type OlType = 'original' | 'ordered';

export type OlProps = ComponentProps<OlSlots> & {
  olType: OlType;
};

export type OlState = ComponentState<OlSlots> & Pick<OlProps, 'olType'> & {};
