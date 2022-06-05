import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type ButtonSlots = {
  root: NonNullable<EeveeSlot<'button'>>;

  icon?: EeveeSlot<'span'>;
};

export type ButtonProps = EeveeProps<ButtonSlots> & {
  /**
   * A button can have its content and borders styled for greater emphasis or to be subtle.
   * - 'transparent': Removes background and border styling.
   * - 'unstyled'
   * @default 'transparent'
   */
  appearance?: 'unstyled' | 'transparent';

  /**
   * When set, allows the button to be focusable even when it has been disabled. This is used in scenarios where it
   * is important to keep a consistent tab order for screen reader and keyboard users. The primary example of this
   * pattern is when the disabled button is in a menu or a commandbar and is seldom used for standalone buttons.
   *
   * @default false
   */
  disabledFocusable?: boolean;

  /**
   * A button can show that it cannot be interacted with.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * A button can format its icon to appear before or after its content.
   *
   * @default 'before'
   */
  iconPosition?: 'before' | 'after';

  /**
   * A button can be rounded, circular, or square.
   *
   * @default 'rounded'
   */
  shape?: 'rounded' | 'circular' | 'square';

  /**
   * A button supports different sizes.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
};

export type ButtonState = EeveeState<ButtonSlots> &
  Required<Pick<ButtonProps, 'appearance' | 'disabledFocusable' | 'disabled' | 'iconPosition' | 'shape' | 'size'>> & {
    /**
     * A button can contain only an icon.
     *
     * @default false
     */
    iconOnly: boolean;
  };
