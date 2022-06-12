import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import type { LinkIconState, LinkIconSlots } from './LinkIcon.types';
import {
  resetCommonWrapperStyles,
  resetTextFontStyles,
  resetCommonTextOverflowStyles,
  resetCommonTextStyles,
  SlotClassNames,
} from '@eevee/react-utilities';

export const linkIconClassNames: SlotClassNames<LinkIconSlots> = {
  root: 'eve-LinkIcon',
  iconWrap: 'eve-LinkIcon__iconWrap',
  textWrap: 'eve-LinkIcon__textWrap',
};

const useLinkStyles = makeStyles({
  focusIndicator: {
    ':focus': {
      ...shorthands.outline('2px', 'auto', tokens.foreground3),
      outlineOffset: '2px',
    },

    '&:focus:not(.focus-visible)': {
      ...shorthands.outline('none'),
    },
  },

  resetCss: {
    ...resetTextFontStyles(),
    cursor: 'pointer',
    ...resetCommonWrapperStyles(),
  },

  root: {
    userSelect: 'none',
    transitionDuration: '0.2s',
    transitionProperty: 'background-color, box-shadow',
    outlineStyle: 'none',
    backgroundColor: tokens.background4,
    //     margin-right: calc(-9px); // inject
  },

  iconOnly: {
    ...shorthands.borderRadius('9999px'),
    minHeight: '36px',
    minWidth: '36px',
  },
});

const useIconWrapStyles = makeStyles({
  base: resetCommonTextStyles(),
  reset: {
    ...resetCommonTextStyles(),
  },
  root: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '0px',
    overflowWrap: 'break-word',
    lineHeight: tokens.lineHeightBase300,
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.foreground1, // inject
  },
});

const useTextWrapStyles = makeStyles({
  reset: {
    ...resetCommonTextStyles(),
    ...resetTextFontStyles(),
    ...resetCommonTextOverflowStyles(),
  },
  root: {
    minWidth: '0px',
    overflowWrap: 'break-word',
    lineHeight: tokens.lineHeightBase300,
    fontSize: tokens.fontSizeBase400,
    fontFamily: 'inherit',
    // color: tokens.foreground3,
    // ...shorthands.borderBottom('2px', 'solid', tokens.background3), // inject
  },
});

const useHoverStyles = makeStyles({
  iconOnly: {
    '@media (hover: hover)': {
      ':hover': {
        backgroundColor: tokens.hover5,
      },
    },
  },
});

export const useLinkIconStyles = (state: LinkIconState): LinkIconState => {
  const linkStyles = useLinkStyles();
  const iconWrapStyles = useIconWrapStyles();
  const textWrapStyles = useTextWrapStyles();
  const hoverStyles = useHoverStyles();

  const { iconOnly } = state;

  state.root.className = mergeClasses(
    linkIconClassNames.root,
    linkStyles.resetCss,
    linkStyles.focusIndicator,
    linkStyles.root,
    iconOnly && linkStyles.iconOnly,
    iconOnly && hoverStyles.iconOnly,
    state.root.className,
  );

  state.iconWrap.className = mergeClasses(
    linkIconClassNames.iconWrap,
    iconWrapStyles.base,
    iconWrapStyles.root,
    state.iconWrap.className,
  );

  state.textWrap.className = mergeClasses(
    linkIconClassNames.textWrap,
    textWrapStyles.reset,
    textWrapStyles.root,
    state.textWrap.className,
  );

  return state;
};
