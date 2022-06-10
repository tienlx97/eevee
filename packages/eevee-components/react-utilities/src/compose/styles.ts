import type { GriffelStyle } from '@griffel/react';
import { shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const commonRootStyles = (appendStyle?: GriffelStyle): GriffelStyle => ({
  alignItems: 'stretch',
  ...shorthands.border('0', 'solid', 'black'),
  boxSizing: 'border-box',
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'column',
  flexShrink: '0',
  marginBottom: '0px',
  marginLeft: '0px',
  marginRight: '0px',
  marginTop: '0px',
  minHeight: '0px',
  minWidth: '0px',
  paddingBottom: '0px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  position: 'relative',
  zIndex: '0',
  ...appendStyle,
});

// wrapper text and svs , etc.
export const commonWrapperStyles = (appendStyle?: GriffelStyle): GriffelStyle => ({
  ...shorthands.border('0', 'solid', 'black'),
  boxSizing: 'border-box',
  color: 'rgba(0, 0, 0, 1)',
  display: 'inline',
  fontFamily: tokens.fontFamily,
  fontSize: tokens.fontSizeBase300,
  fontWeight: tokens.fontWeightRegular,
  marginBottom: '0px',
  marginLeft: '0px',
  marginRight: '0px',
  marginTop: '0px',
  paddingBottom: '0px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  ...appendStyle,
});

export const commonTextStyles = (appendStyle?: GriffelStyle): GriffelStyle => ({
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
  ...appendStyle,
});

export const commonTextStyles2 = (appendStyle?: GriffelStyle): GriffelStyle => ({
  maxWidth: '100%',
  ...shorthands.overflow('hidden'),
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  ...appendStyle,
});
