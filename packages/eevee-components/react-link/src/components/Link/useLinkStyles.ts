import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import type { LinkSlots, LinkState } from './Link.types';
import { resetTextFontStyles, resetCommonTextStyles, SlotClassNames } from '@eevee/react-utilities';

export const linkClassNames: SlotClassNames<LinkSlots> = {
  root: 'eve-Link',
};

const useRootStyles = makeStyles({
  reset: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontStyle: 'inherit',
    fontVariantLigatures: 'inherit',
    fontVariantCaps: 'inherit',
    fontVariantNumeric: 'inherit',
    fontVariantEastAsian: 'inherit',
    fontWeight: 'inherit',
    fontStretch: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    fontFamily: 'inherit',
    ...shorthands.margin('0px'),
    textAlign: 'inherit',
    textDecorationLine: 'none',
    textDecorationThickness: 'initial',
    textDecorationStyle: 'initial',
    textDecorationColor: 'initial',
    color: 'inherit',
    listStylePosition: 'initial',
    listStyleImage: 'initial',
    listStyleType: 'none',
    cursor: 'pointer',
    ...resetCommonTextStyles(),
    ...resetTextFontStyles(),
  },

  focusIndicator: {
    ':focus': {
      ...shorthands.outline('2px', 'auto', tokens.f7),
      outlineOffset: '2px',
    },

    '&:focus:not(.focus-visible)': {
      ...shorthands.outline('none'),
    },
  },
  root: {
    minWidth: '0px',
    overflowWrap: 'break-word',
    fontFamily: 'inherit',
    color: tokens.f7,

    '@media (hover: hover)': {
      boxShadow: `0px 0px 0px ${tokens.f7}`, // rgb(29, 155, 240)
      ':hover': {
        // textDecorationThickness: tokens.strokeWidthThin,
        // textDecorationLine: 'underline',

        // color: tokens.f7, // rgb(29, 155, 240)

        transitionProperty: 'box-shadow',
        transitionDuration: '200ms',
        boxShadow: `0px 2px 0px ${tokens.f7}`, // rgb(29, 155, 240)
      },
    },
  },

  medium: {
    ...shorthands.border('inherit'),
    fill: 'inherit',
  },

  disabled: {
    pointerEvents: 'none',
    color: tokens.f2,
  },
});

export const useLinkStyles = (state: LinkState): LinkState => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    linkClassNames.root,
    rootStyles.reset,
    rootStyles.focusIndicator,
    state.appearance === 'twitter' && rootStyles.root,
    state.appearance === 'medium' && rootStyles.medium,
    state.disabled && rootStyles.disabled,
    state.root.className,
  );

  return state;
};
