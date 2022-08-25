import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';
import { Button } from '@eevee/react-button';

export type ActionSlots = {
  root: NonNullable<Slot<'div'>>;
  publish: NonNullable<Slot<typeof Button>>;
  editOrPreview: NonNullable<Slot<typeof Button>>;
};

export type ActionProps = ComponentProps<Partial<ActionSlots>> & {
  onEditPreviewChange?: (val: boolean) => void;
};

export type ActionState = ComponentState<ActionSlots> &
  Pick<ActionProps, 'onEditPreviewChange'> & {
    spacingClassName?: string;
  };
