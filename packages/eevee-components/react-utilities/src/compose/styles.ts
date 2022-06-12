import type { GriffelStyle } from '@griffel/react';
import { shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const resetCommonWrapperStyles = (styles?: GriffelStyle): GriffelStyle => ({
  alignItems: 'stretch',
  ...shorthands.border('0', 'solid', 'black'),
  boxSizing: 'border-box',
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'column',
  flexShrink: '0',
  ...shorthands.margin('0px'),
  ...shorthands.padding('0px'),
  minHeight: '0px',
  minWidth: '0px',
  position: 'relative',
  zIndex: 0,
  ...styles,
});

// wrapper text and svs , etc.
export const resetCommonTextStyles = (styles?: GriffelStyle): GriffelStyle => ({
  ...shorthands.border('0', 'solid', 'black'),
  boxSizing: 'border-box',
  color: 'rgba(0, 0, 0, 1)',
  display: 'inline',
  fontFamily: tokens.fontFamily,
  fontSize: tokens.fontSizeBase300,
  fontWeight: tokens.fontWeightRegular,
  ...shorthands.margin('0px'),
  ...shorthands.padding('0px'),
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  ...styles,
});

export const resetTextFontStyles = (styles?: GriffelStyle): GriffelStyle => ({
  color: 'inherit',
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
  whiteSpace: 'inherit',
  ...styles,
});

export const resetCommonTextOverflowStyles = (appendStyle?: GriffelStyle): GriffelStyle => ({
  maxWidth: '100%',
  ...shorthands.overflow('hidden'),
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  ...appendStyle,
});
