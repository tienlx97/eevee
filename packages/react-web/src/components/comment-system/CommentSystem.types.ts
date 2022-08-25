import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';
import { ButtonR } from '@eevee/react-button';

export type CommentSystemSlots = {
  root: NonNullable<Slot<'div'>>;
  blur: NonNullable<Slot<'div'>>;
  commentWrapper: NonNullable<Slot<'div'>>;
  closeButton: NonNullable<Slot<typeof ButtonR>>;
};

export type CommentSystemProps = ComponentProps<Partial<CommentSystemSlots>> & {
  show: boolean;
  onClose: () => void;
};

export type CommentSystemState = ComponentState<CommentSystemSlots> &
  Pick<CommentSystemProps, 'show' | 'onClose'> & {
    theme?: string;
    buttonWrapperClassName?: string;
    responseTitleClassName?: string;
  };
