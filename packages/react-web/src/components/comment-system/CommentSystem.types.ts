import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';
import { ButtonR } from '@eevee/react-button';

export type CommentSystemSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
  blur: NonNullable<EeveeSlot<'div'>>;
  commentWrapper: NonNullable<EeveeSlot<'div'>>;
  closeButton: NonNullable<EeveeSlot<typeof ButtonR>>;
};

export type CommentSystemProps = EeveeProps<Partial<CommentSystemSlots>> & {
  show: boolean;
  onClose: () => void;
};

export type CommentSystemState = EeveeState<CommentSystemSlots> &
  Pick<CommentSystemProps, 'show' | 'onClose'> & {
    theme?: string;
    buttonWrapperClassName?: string;
    responseTitleClassName?: string;
  };
