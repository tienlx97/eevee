import { ButtonState } from './Button.types';
import { tokens } from '@eevee/react-theme';
import { iconFilledClassName, iconRegularClassName } from '@eevee/react-icons';
import { shorthands, makeStyles, mergeClasses } from '@griffel/react';

export const buttonClassNames = {
  root: 'eve-Button',
  icon: 'eve-Button__icon',
};

const iconSpacingVar = '--eve-Button__icon--spacing';

const useRootStyles = makeStyles({
  // Base styles
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    verticalAlign: 'middle',

    ...shorthands.margin(0),

    maxWidth: '280px',

    ...shorthands.overflow('hidden'),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    backgroundColor: tokens.background1, // #16181d #fff
    color: tokens.foreground1, // #fff #hsl(222, 22%, 5%)
    ...shorthands.border(tokens.strokeWidthThin, 'solid', tokens.border1), // #666666 #d1d1d1

    fontFamily: tokens.fontFamily,

    outlineStyle: 'none',

    ':hover': {
      // backgroundColor: tokens.colorBackground1Hover,
      // ...shorthands.borderColor(tokens.colorStroke1Hover), // #757575 #c7c7c7
      color: tokens.foreground1,

      cursor: 'pointer',

      [`& .${iconFilledClassName}`]: {
        display: 'inline',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'none',
      },
    },

    ':hover:active': {
      // backgroundColor: tokens.colorBackground1Pressed, // #fff #e0e0e0
      // ...shorthands.borderColor(tokens.colorStroke1Pressed), // #6b6b6b #b3b3b3
      // color: tokens.colorForeground1Pressed, // ##fff hsl(222, 22%, 5%)

      outlineStyle: 'none',

      [`& .${iconFilledClassName}`]: {
        display: 'inline',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'none',
      },
    },
  },

  // High contrast styles
  highContrast: {
    '@media (forced-colors: active)': {
      ':focus': {
        ...shorthands.borderColor('ButtonText'),
      },

      ':hover': {
        ...shorthands.borderColor('Highlight'),
        color: 'Highlight',
      },

      ':hover:active': {
        color: 'Highlight',
      },
    },
  },

  // Appearance variations
  // for apearance = transparent
  transparent: {
    backgroundColor: tokens.backgroundTransparent,
    ...shorthands.borderColor('transparent'),
    color: tokens.foreground1,

    ':hover': {
      backgroundColor: tokens.backgroundTransparent,
      ...shorthands.borderColor('transparent'),
      // color: tokens.colorForeground2BrandHover,
    },

    ':hover:active': {
      backgroundColor: tokens.backgroundTransparent,
      ...shorthands.borderColor('transparent'),
      // color: tokens.colorForeground2BrandPressed,
    },
  },

  // Shape variations
  circular: {
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
  },
  rounded: {
    /* The borderRadius rounded styles are handled in the size variations */
  },
  square: {
    ...shorthands.borderRadius(tokens.borderRadiusNone),
  },

  // Size variations
  small: {
    ...shorthands.padding(tokens.spacingVerticalNone, tokens.spacingHorizontalS),

    height: '24px',
    minWidth: '64px',

    ...shorthands.borderRadius(tokens.borderRadiusMedium),

    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase200,
  },
  medium: {
    ...shorthands.padding(tokens.spacingVerticalNone, tokens.spacingHorizontalM),

    height: '32px',
    minWidth: '96px',

    ...shorthands.borderRadius(tokens.borderRadiusMedium),

    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase300,
  },
  large: {
    ...shorthands.padding(tokens.spacingVerticalNone, tokens.spacingHorizontalL),

    height: '40px',
    minWidth: '96px',

    ...shorthands.borderRadius(tokens.borderRadiusMedium),

    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase400,
  },
});

const useRootDisabledStyles = makeStyles({
  // Base styles
  base: {
    backgroundColor: tokens.backgroundDisabled, // #141414 ##f0f0f0
    ...shorthands.borderColor(tokens.borderDisable), // #424242 #e0e0e0
    color: tokens.foregroundDisabled, // #5c5c5c # #bdbdbd

    cursor: 'not-allowed',

    ':hover': {
      backgroundColor: tokens.backgroundDisabled, // #141414 ##f0f0f0
      ...shorthands.borderColor(tokens.borderDisable), // #424242 #e0e0e0
      color: tokens.foregroundDisabled, // #5c5c5c # #bdbdbd

      cursor: 'not-allowed',

      [`& .${iconFilledClassName}`]: {
        display: 'none',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'inline',
      },
    },

    ':hover:active': {
      backgroundColor: tokens.backgroundDisabled, // #141414 ##f0f0f0
      ...shorthands.borderColor(tokens.borderDisable), // #424242 #e0e0e0
      color: tokens.foregroundDisabled, // #5c5c5c # #bdbdbd

      cursor: 'not-allowed',

      [`& .${iconFilledClassName}`]: {
        display: 'none',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'inline',
      },
    },
  },

  // High contrast styles
  highContrast: {
    '@media (forced-colors: active)': {
      ...shorthands.borderColor('GrayText'),
      color: 'GrayText',

      ':focus': {
        ...shorthands.borderColor('GrayText'),
      },

      ':hover': {
        ...shorthands.borderColor('GrayText'),
        color: 'GrayText',
      },

      ':hover:active': {
        ...shorthands.borderColor('GrayText'),
        color: 'GrayText',
      },
    },
  },

  // Appearance variations
  transparent: {
    backgroundColor: 'transparent',
    ...shorthands.borderColor('transparent'),

    ':hover': {
      backgroundColor: 'transparent',
      ...shorthands.borderColor('transparent'),
    },

    ':hover:active': {
      backgroundColor: 'transparent',
      ...shorthands.borderColor('transparent'),
    },
  },
});

const useRootFocusStyles = makeStyles({
  base: {
    ':focus': {
      outlineStyle: 'none',
    },
    [`:global([data-keyboard-nav]):focus`]: {
      ...shorthands.borderColor('transparent'),
      outlineColor: 'transparent',
      outlineWidth: tokens.strokeWidthThick,
      outlineStyle: 'solid',
      boxShadow: `
        ${tokens.shadow4},
        0 0 0 2px ${tokens.foreground1} `, // '#fff #000
      zIndex: 1,
    },
  },

  // Shape variations
  circular: {
    ':focus': {
      outlineStyle: 'none',
    },
    [`:global([data-keyboard-nav]):focus`]: {
      ...shorthands.borderRadius(tokens.borderRadiusCircular),
    },
  },
  rounded: {
    /* The rounded styles are exactly the same as the base styles. */
  },
  square: {
    ':focus': {
      outlineStyle: 'none',
    },
    [`:global([data-keyboard-nav]):focus`]: {
      ...shorthands.borderRadius(tokens.borderRadiusNone),
    },
  },

  // Size variations
  small: {
    [`:global([data-keyboard-nav]):focus`]: {
      ...shorthands.borderRadius(tokens.borderRadiusSmall),
    },
  },
  medium: {
    [`:global([data-keyboard-nav]):focus`]: {
      ...shorthands.borderRadius(tokens.borderRadiusMedium),
    },
  },
  large: {
    [`:global([data-keyboard-nav]):focus`]: {
      ...shorthands.borderRadius(tokens.borderRadiusLarge),
    },
  },
});

const useRootIconOnlyStyles = makeStyles({
  // Size variations
  small: {
    ...shorthands.padding(tokens.spacingHorizontalXS),

    minWidth: '28px',
    maxWidth: '28px',
  },
  medium: {
    ...shorthands.padding(tokens.spacingHorizontalXS),

    minWidth: '32px',
    maxWidth: '32px',
  },
  large: {
    ...shorthands.padding(tokens.spacingHorizontalSNudge),

    minWidth: '40px',
    maxWidth: '40px',
  },
});

const useIconStyles = makeStyles({
  // Base styles
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
  },

  // Size variations
  small: {
    fontSize: '20px',
    height: '20px',
    width: '20px',

    [iconSpacingVar]: tokens.spacingHorizontalXS,
  },
  medium: {
    fontSize: '20px',
    height: '20px',
    width: '20px',

    [iconSpacingVar]: tokens.spacingHorizontalSNudge,
  },
  large: {
    fontSize: '24px',
    height: '24px',
    width: '24px',

    [iconSpacingVar]: tokens.spacingHorizontalSNudge,
  },

  // Icon position variations
  before: {
    marginRight: `var(${iconSpacingVar})`,
  },
  after: {
    marginLeft: `var(${iconSpacingVar})`,
  },
});

export const useButtonStyles = (state: ButtonState): ButtonState => {
  // global styles
  const rootStyles = useRootStyles();
  const rootDisabledStyles = useRootDisabledStyles();
  const rootFocusStyles = useRootFocusStyles();
  const rootIconOnlyStyles = useRootIconOnlyStyles();
  const iconStyles = useIconStyles();

  const { appearance, size, shape, disabled, disabledFocusable, iconOnly, iconPosition } = state;

  state.root.className = mergeClasses(
    // use this to css styled
    buttonClassNames.root,

    // Root styles
    rootStyles.base,
    rootStyles.highContrast,
    appearance === 'transparent' && rootStyles[appearance], // another `appearance`?.future
    size && rootStyles[size],
    rootStyles[shape],

    // Disabled styles
    (disabled || disabledFocusable) && rootDisabledStyles.base,
    (disabled || disabledFocusable) && rootDisabledStyles.highContrast,
    // another `appearance`?.future
    appearance === 'transparent' && (disabled || disabledFocusable) && rootDisabledStyles[appearance],

    // Focus styles
    rootFocusStyles.base,
    // appearance === 'primary' && rootFocusStyles.primary, // later
    size && rootFocusStyles[size],
    rootFocusStyles[shape],

    // Icon-only styles
    iconOnly && size && rootIconOnlyStyles[size],

    // User provided class name
    state.root.className,
  );

  if (state.icon) {
    state.icon.className = mergeClasses(
      buttonClassNames.icon,
      iconStyles.base,
      state.root.children !== undefined && state.root.children !== null && iconStyles[iconPosition],
      size && iconStyles[size],
      state.icon.className,
    );
  }

  return state;
};
