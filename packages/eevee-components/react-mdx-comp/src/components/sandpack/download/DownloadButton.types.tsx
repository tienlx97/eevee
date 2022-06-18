import { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';
import { Button } from '@eevee/react-button';

export type DownloadButtonSlots = {
  root: NonNullable<EeveeSlot<typeof Button>>;
};

export type DownloadButtonProps = EeveeProps<Partial<DownloadButtonSlots>> & {};

export type DownloadButtonState = EeveeState<DownloadButtonSlots> & {
  downloadHTML?: () => void;
  iconClasses?: string;
};
