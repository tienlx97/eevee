export const KEYBOARD_NAV_ATTRIBUTE = 'data-keyboard-nav' as const;
export const KEYBOARD_NAV_SELECTOR = `:global([${KEYBOARD_NAV_ATTRIBUTE}])` as const;
export const FOCUS_VISIBLE_CLASS = 'eve-focus-visible';
export const FOCUS_WITHIN_CLASS = 'eve-focus-within';
export const defaultOptions = {
  style: {},
  selector: 'focus',
} as const;
