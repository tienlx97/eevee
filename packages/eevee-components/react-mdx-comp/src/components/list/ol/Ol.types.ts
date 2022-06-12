import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type OlSlots = {
  root: NonNullable<EeveeSlot<'ol'>>;
};

export type OlType = 'original' | 'ordered';

export type OlProps = EeveeProps<OlSlots> & {
  olType: OlType;
};

export type OlState = EeveeState<OlSlots> & Pick<OlProps, 'olType'> & {};
