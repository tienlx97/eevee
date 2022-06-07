import type { ColorTokens } from '../types';

export const generateColorTokens = (): ColorTokens => ({
  colorBackground1: '#23272f',
  colorBackground1Hover: '#3d3d3d',
  colorBackground1Pressed: '#fff',
  colorBackground2: '#16181d',

  colorBackgroundDisabled: '#141414',

  colorTransparentBackground: 'transparent',
  colorTransparentBackgroundHover: 'transparent',
  colorTransparentBackgroundPressed: 'transparent',
  colorTransparentStroke: 'transparent',

  colorForeground1: '#fff',
  colorForeground1Hover: '#fff',
  colorForeground1Pressed: '#fff',
  colorForeground2: '#d6d6d6',
  colorForeground2Hover: '#fff',
  colorForeground2BrandHover: '#2899f5',
  colorForeground2BrandPressed: '#1890f1',
  colorForeground3: 'hsl(230, 100%, 67%)',
  colorForegroundDisabled: '#5c5c5c',

  colorBrandForegroundLink: '#2899f5',
  colorBrandForegroundLinkHover: '#3aa0f3',

  colorStroke1: '#666666',
  colorStroke1Hover: '#757575',
  colorStroke1Pressed: '#6b6b6b',
  colorStrokeFocus2: '#fff',
  colorStrokeDisabled: '#424242',

  // shadow
  colorShadowAmbient: 'rgba(0,0,0,0.24)',
  colorShadowKey: 'rgba(0,0,0,0.28)',
  colorBrandShadowAmbient: 'rgba(0,0,0,0.30)',
  colorBrandShadowKey: 'rgba(0,0,0,0.25)',
});
