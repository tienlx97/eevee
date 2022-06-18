import { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';
import { Button } from '@eevee/react-button';

export type FolkButtonSlots = {
  root: NonNullable<EeveeSlot<typeof Button>>;
};

export type FolkButtonProps = EeveeProps<Partial<FolkButtonSlots>> & {};

export type FolkButtonState = EeveeState<FolkButtonSlots> & {
  iconClasses?: string;
  spanClasses?: string;
};
