import type { ComponentProps, ComponentState, Slot } from '@eevee/react-utilities';

export type PopoverItemSlots = {
  root: Slot<'div'>;

  /**
   * Component children are placed in this slot
   * Avoid using the `children` property in this slot in favour of Component children whenever possible
   */
  content?: Slot<'span'>;
};

export type PopoverItemProps = ComponentProps<Partial<PopoverItemSlots>> & {
  /**
   * Applies disabled styles to menu item but remains focusable
   *
   * @default false
   */
  disabled?: boolean;
};

export type PopoverItemState = ComponentState<PopoverItemSlots> & Pick<PopoverItemProps, 'disabled'>;
