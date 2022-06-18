import { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';
import { Button } from '@eevee/react-button';

export type ResetButtonSlots = {
  root: NonNullable<EeveeSlot<typeof Button>>;
};

export type ResetButtonProps = EeveeProps<Partial<ResetButtonSlots>> & {
  onReset?: () => void;
};

export type ResetButtonState = EeveeState<ResetButtonSlots> &
  Pick<ResetButtonProps, 'onReset'> & {
    iconClasses?: string;
  };
