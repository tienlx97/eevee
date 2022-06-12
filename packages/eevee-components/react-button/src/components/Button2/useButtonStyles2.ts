import type { ButtonSlots2, ButtonState2 } from './Button2.types';
import { tokens } from '@eevee/react-theme';
// import { iconFilledClassName, iconRegularClassName } from '@eevee/react-icons';
import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { SlotClassNames } from '@eevee/react-utilities';
import {
  resetCommonWrapperStyles,
  resetCommonTextStyles,
  resetTextFontStyles,
  resetCommonTextOverflowStyles,
} from '@eevee/react-utilities';

export const buttonClassNames: SlotClassNames<ButtonSlots2> = {
  root: 'eve-Button2',
  iconAndText: 'eve-Button2__iconAndText',
  text: 'eve-Button2__text',
};

const useButtonStyles = makeStyles({
  base: resetCommonWrapperStyles(),
  root: {
    cursor: 'pointer',
    ...shorthands.borderRadius('9999px'),
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth(tokens.strokeWidthThick),
    ...shorthands.borderColor(tokens.background4),
    userSelect: 'none',
    transitionDuration: '0.2s',
    transitionProperty: 'background-color, box-shadow',
    outlineStyle: 'none',
    backgroundColor: tokens.background4,
    minHeight: '36px',
    minWidth: '36px',
    //margin-right: calc(-9px);

    '@media (hover: hover)': {
      ':hover': {
        // borderBottomColor: tokens.colorForeground3,
        // color: tokens.foreground1, // #fff hsl(222, 22%, 5%)
        backgroundColor: tokens.hover5,
      },
    },
  },
});

const useIconAndTextStyles = makeStyles({
  base: resetCommonTextStyles(),
  root: {
    display: 'flex',
    textAlign: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '0px',
    overflowWrap: 'break-word',
    lineHeight: tokens.lineHeightBase300,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.background3,
  },
});

const useTextStyles = makeStyles({
  base: resetCommonTextStyles(),
  base2: resetTextFontStyles(),
  base3: resetCommonTextOverflowStyles(),
  root: {
    minWidth: '0px',
    overflowWrap: 'break-word',
    lineHeight: tokens.lineHeightBase300,
    fontSize: tokens.fontSizeBase400,
    fontFamily: 'inherit',

    //     border-bottom: 2px solid rgb(15, 20, 25);
  },
});

export const useButtonStyles2 = (state: ButtonState2): ButtonState2 => {
  const buttonStyles = useButtonStyles();
  const iconAndTextStyles = useIconAndTextStyles();
  const textStyles = useTextStyles();

  state.root.className = mergeClasses(
    buttonClassNames.root,
    buttonStyles.base,
    buttonStyles.root,
    state.root.className,
  );

  state.iconAndText.className = mergeClasses(
    buttonClassNames.iconAndText,
    iconAndTextStyles.base,
    iconAndTextStyles.root,
    state.iconAndText?.className,
  );

  state.text.className = mergeClasses(
    buttonClassNames.text,
    textStyles.base,
    textStyles.base2,
    textStyles.base3,
    textStyles.root,
    state.text?.className,
  );

  return state;
};
