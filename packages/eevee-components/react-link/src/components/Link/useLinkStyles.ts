import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import type { LinkSlots, LinkState } from './Link.types';
import type { SlotClassNames } from '@eevee/react-utilities';

export const linkClassNames: SlotClassNames<LinkSlots> = {
  root: 'eve-Link',
};

const useStyles = makeStyles({
  focusIndicator: {
    ':focus': {
      outlineStyle: 'none',
    },
    [`:global([data-keyboard-nav]):focus`]: {
      borderBottomColor: 'transparent',
      textDecorationColor: tokens.colorStrokeFocus2,
      textDecorationLine: 'underline',
      textDecorationStyle: 'double',
    },
  },
  // Common styles.
  root: {
    backgroundColor: 'transparent',
    borderTopStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderBottomColor: 'transparent',
    borderBottomStyle: 'solid',
    cursor: 'pointer',
    display: 'inline',
    fontFamily: tokens.fontFamily,
    ...shorthands.margin(0),
    ...shorthands.padding(0),
    ...shorthands.overflow('inherit'),
    textAlign: 'left',
    textDecorationLine: 'none',
    textOverflow: 'inherit',
    userSelect: 'text',
  },

  // Overrides when an href is present so the Link renders as an anchor.
  href: {
    fontSize: 'inherit',
  },

  // get from joshcomeau.com
  joshBase: {
    color: tokens.colorForeground3, // hsl(230, 100%, 67%)
    '&:focus': {
      ...shorthands.outline('2px', 'auto', tokens.colorForeground3),
      outlineOffset: '2px',
    },
    '&:focus:not(.focus-visible)': {
      ...shorthands.outline('none'),
    },
  },

  joshTextLink: {
    color: tokens.colorForeground3, // hsl(230, 100%, 67%)
    fontWeight: tokens.fontWeightMedium, // 500

    '&:focus': {
      ...shorthands.outline('2px', 'auto', tokens.colorForeground3),
      outlineOffset: '2px',
    },

    '&:focus:not(.focus-visible)': {
      ...shorthands.outline('none'),
    },

    '@media (hover: hover)': {
      textDecorationLine: 'none',
      boxShadow: `0px 0px 0px ${tokens.colorForeground3}`,

      '&:hover': {
        transitionProperty: 'box-shadow',
        transitionDuration: '200ms',
        transitionTimingFunction: 'ease',
        transitionDelay: '0s',

        boxShadow: `0px 2px 0px ${tokens.colorForeground3}`,
      },
    },
  },

  disabled: {
    borderBottomColor: 'transparent',
    color: tokens.colorForegroundDisabled,
    cursor: 'not-allowed',

    ':hover': {
      borderBottomColor: 'transparent',
      color: tokens.colorForegroundDisabled,
    },

    ':active': {
      borderBottomColor: 'transparent',
      color: tokens.colorForegroundDisabled,
    },
  },
});

export const useLinkStyles = (state: LinkState): LinkState => {
  const styles = useStyles();
  const { appearance, disabled, root } = state;

  state.root.className = mergeClasses(
    linkClassNames.root,
    styles.root,
    styles.focusIndicator,
    root.as === 'a' && styles.href,
    appearance === 'josh-comeau' && styles.joshBase,
    appearance === 'josh-comeau' && styles.joshTextLink,
    disabled && styles.disabled,
    state.root.className,
  );

  return state;
};
