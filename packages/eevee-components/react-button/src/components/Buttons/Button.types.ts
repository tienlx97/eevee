import * as React from 'react';

//======================

export type SlotRenderFunction<Props> = (
  Component: React.ElementType<Props>,
  props: Omit<Props, 'children' | 'as'>,
) => React.ReactNode;

/**
 * If type T includes `null`, remove it and add `undefined` instead.
 */
type ReplaceNullWithUndefined<T> = T extends null ? Exclude<T, null> | undefined : T;
type SlotShorthandValue = React.ReactChild | React.ReactNodeArray | React.ReactPortal;
export type SlotPropsRecord = Record<
  string,
  Pick<React.HTMLAttributes<HTMLElement>, 'children' | 'className' | 'style'> | SlotShorthandValue | null | undefined
>;
type AsIntrinsicElement<As extends keyof JSX.IntrinsicElements> = { as?: As };
type PropsWithoutRef<P> = 'ref' extends keyof P ? (P extends unknown ? Omit<P, 'ref'> : P) : P;
type ExtractSlotProps<S> = Exclude<S, React.ReactChild | React.ReactNodeArray | React.ReactPortal | null | undefined>;

//
type CompProps<Slots extends SlotPropsRecord, Primary extends keyof Slots = 'root'> = Omit<Slots, Primary & 'root'> &
  PropsWithoutRef<ExtractSlotProps<Slots['root']>>;

//
export type CompState<Slots extends SlotPropsRecord> = {
  components: {
    [Key in keyof Slots]-?:
      | React.ComponentType<ExtractSlotProps<Slots[Key]>>
      | (ExtractSlotProps<Slots[Key]> extends AsIntrinsicElement<infer As> ? As : keyof JSX.IntrinsicElements);
  };
} & {
  [Key in keyof Slots]: ReplaceNullWithUndefined<
    Exclude<Slots[Key], SlotShorthandValue | (Key extends 'root' ? null : never)>
  >;
};

//======================
export type ButtonSlots = {
  /**
   * Root of the component that renders as either a `<button>` tag or an `<a>` tag.
   */
  root: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

  /**
   * Icon that renders either before or after the `children` as specified by the `iconPosition` prop.
   */
  icon: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
};

export type ButtonProps = CompProps<ButtonSlots> & {
  /**
   * A button can have its content and borders styled for greater emphasis or to be subtle.
   * - 'secondary' (default): Gives emphasis to the button in such a way that it indicates a secondary action.
   * - 'primary': Emphasizes the button as a primary action.
   * - 'outline': Removes background styling.
   * - 'subtle': Minimizes emphasis to blend into the background until hovered or focused.
   * - 'transparent': Removes background and border styling.
   *
   * @default 'secondary'
   */
  appearance?: 'secondary' | 'primary' | 'outline' | 'subtle' | 'transparent';

  /**
   * A button can fill the width of its container.
   * @default false
   *
   * @deprecated - Use style overrides instead.
   */
  block?: boolean;

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

export type ButtonState = CompState<ButtonSlots> &
  Required<
    Pick<ButtonProps, 'appearance' | 'block' | 'disabledFocusable' | 'disabled' | 'iconPosition' | 'shape' | 'size'>
  > & {
    /**
     * A button can contain only an icon.
     *
     * @default false
     */
    iconOnly: boolean;
  };
