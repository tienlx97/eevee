import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import type { LinkSlots, LinkState } from './Link.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { iconFilledClassName, iconRegularClassName } from '@eevee/react-icons';

export const linkClassNames: SlotClassNames<LinkSlots> = {
  root: 'eve-Linkr',
  icon: 'eve-Linkr_icon',
};

const useStyles = makeStyles({
  focusIndicator: {
    ':focus': {
      ...shorthands.outline('2px', 'auto', tokens.colorBrandForegroundLinkHover),
      outlineOffset: '2px',
    },

    '&:focus:not(.focus-visible)': {
      ...shorthands.outline('none'),
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
    borderBottomWidth: tokens.strokeWidthThin,
    boxSizing: 'border-box',
    color: tokens.colorForeground1,
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
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

  // Overrides when the Link appears subtle.
  subtle: {
    color: tokens.colorForeground2,
  },

  // Overrides when the Link is rendered inline within text.
  inline: {
    boxShadow: `0px 2px 0px ${tokens.colorBrandForegroundLink}`,
  },

  // Overrides when the Link is rendered inline within text and appears subtle.
  inlineSubtle: {
    boxShadow: `0px 2px 0px ${tokens.colorForeground2}`,
  },

  // Overrides when the Link is disabled.
  disabled: {
    borderBottomColor: 'transparent',
    color: tokens.colorForegroundDisabled,
    cursor: 'not-allowed',
    '@media (hover: hover)': {
      ':hover': {
        borderBottomColor: 'transparent',
        color: tokens.colorForegroundDisabled,
      },
    },

    ':active': {
      borderBottomColor: 'transparent',
      color: tokens.colorForegroundDisabled,
    },
  },
});

const useHoverStyles = makeStyles({
  root: {
    '@media (hover: hover)': {
      boxShadow: `0px 0px 0px ${tokens.colorBrandForegroundLinkHover}`,
      ':hover': {
        // borderBottomColor: tokens.colorForeground3,
        color: tokens.colorBrandForegroundLinkHover,

        transitionProperty: 'box-shadow',
        transitionDuration: '200ms',
        boxShadow: `0px 2px 0px ${tokens.colorBrandForegroundLinkHover}`,
      },
    },
  },

  stubtle: {
    '@media (hover: hover)': {
      boxShadow: `0px 0px 0px ${tokens.colorForeground2Hover}`,
      ':hover': {
        // borderBottomColor: tokens.colorForeground3,
        color: tokens.colorForeground2Hover,

        transitionProperty: 'box-shadow',
        transitionDuration: '200ms',
        boxShadow: `0px 2px 0px ${tokens.colorForeground2Hover}`,
      },
    },
  },

  iconOnly: {
    '@media (hover: hover)': {
      ':hover': {
        // borderBottomColor: tokens.colorForeground3,
        color: '#fff',

        //for icon with 2 class name
        [`& .${iconFilledClassName}`]: {
          display: 'inline',
        },
        [`& .${iconRegularClassName}`]: {
          display: 'none',
        },
      },
    },
  },
});

const useIconStyles = makeStyles({
  root: {
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
  },
});

export const useLinkStyles = (state: LinkState): LinkState => {
  const styles = useStyles();
  const iconStyles = useIconStyles();
  const hoverStyles = useHoverStyles();

  const { appearance, disabled, inline, root, iconOnly } = state;

  state.root.className = mergeClasses(
    linkClassNames.root,

    styles.root,
    !iconOnly && hoverStyles.root,
    styles.focusIndicator,

    root.as === 'a' && root.href && styles.href,

    appearance === 'subtle' && styles.subtle,
    appearance === 'subtle' && hoverStyles.stubtle,

    inline && styles.inline,
    appearance === 'subtle' && inline && styles.inlineSubtle,

    disabled && styles.disabled,

    // iconOnly && styles.iconOnly,
    iconOnly && hoverStyles.iconOnly,

    state.root.className,
  );

  if (state.icon) {
    state.icon.className = mergeClasses(
      //
      linkClassNames.icon,
      iconStyles.root,
      state.icon.className,
    );
  }

  return state;
};
