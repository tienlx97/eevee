import { tokens } from '@eevee/react-theme';
import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { ButtonState } from './Button.types';

// make dynamic later

const iconFilledClassName = 'eve-Icon-filled';
const iconRegularClassName = 'eve-Icon-regular';

export const buttonClassNames = {
  root: 'eve-Button',
  icon: 'eve-Button__icon',
};

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

    backgroundColor: tokens.colorBackground,
    color: tokens.colorForeground,
    ...shorthands.border(tokens.strokeWidthThin, 'solid', tokens.colorStroke1),

    fontFamily: tokens.fontFamily,

    outlineStyle: 'none',

    ':hover': {
      backgroundColor: tokens.colorBackground1Hover,
      ...shorthands.borderColor(tokens.colorStroke1Hover),
      color: tokens.colorForeground1Hover,

      cursor: 'pointer',

      [`& .${iconFilledClassName}`]: {
        display: 'inline',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'none',
      },
    },
  },
});

const useRootDisabledStyles = makeStyles({});

const useRootFocusStyles = makeStyles({});

const useRootIconOnlyStyles = makeStyles({});

const useIconStyles = makeStyles({});

export const useButtonStyles_unstable = (state: ButtonState): ButtonState => {
  // global styles
  const rootStyles = useRootStyles();
  const rootDisabledStyles = useRootDisabledStyles();
  const rootFocusStyles = useRootFocusStyles();
  const rootIconOnlyStyles = useRootIconOnlyStyles();
  const iconStyles = useIconStyles();

  const {} = state;

  state.root.className = mergeClasses(
    buttonClassNames.root,
    // Root styles

    // Disabled styles

    // Focus styles

    // Icon-only styles

    // User provided class name
    state.root.className,
  );

  if (state.icon) {
    state.icon.className = mergeClasses(
      buttonClassNames.icon,
      // sth
      state.icon.className,
    );
  }

  return state;
};
