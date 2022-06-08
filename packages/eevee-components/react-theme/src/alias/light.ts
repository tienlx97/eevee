import type { ColorTokens } from '../types';

export const generateColorTokens = (): ColorTokens => ({
  colorBackground1: '#fff',
  colorBackground1Hover: '#f5f5f5',
  colorBackground1Pressed: '#e0e0e0',
  colorBackground2: '#fafafa',
  colorBackground2Hover: '#f0f0f0',
  colorBackground2Pressed: '#dbdbdb',

  colorBackgroundDisabled: '#f0f0f0',

  colorTransparentBackground: 'transparent',
  colorTransparentBackgroundHover: 'transparent',
  colorTransparentBackgroundPressed: 'transparent',
  colorTransparentStroke: 'transparent',

  colorForeground1: '#242424',
  colorForeground1Hover: '#242424',
  colorForeground1Pressed: '#242424',
  colorForeground2: '#424242',
  colorForeground2Hover: '#242424',
  colorForeground2BrandHover: '#0078d4',
  colorForeground2BrandPressed: '#106ebe',
  colorForeground3: '#616161',
  colorForegroundDisabled: '#bdbdbd',

  colorBrandForegroundLink: '#106ebe',
  colorBrandForegroundLinkHover: '#005a9e',

  colorStroke1: '#d1d1d1',
  colorStroke1Hover: '#c7c7c7',
  colorStroke1Pressed: '#b3b3b3',
  colorStroke2: '#e0e0e0',
  colorStrokeFocus2: '#000000',
  colorStrokeDisabled: '#e0e0e0',

  // shadow
  colorShadowAmbient: 'rgba(0,0,0,0.12)',
  colorShadowKey: 'rgba(0,0,0,0.14)',
  colorBrandShadowAmbient: 'rgba(0,0,0,0.30)',
  colorBrandShadowKey: 'rgba(0,0,0,0.25)',
});
