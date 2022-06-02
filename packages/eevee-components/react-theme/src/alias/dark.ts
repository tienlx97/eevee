import type { ColorTokens } from '../types';

export const generateColorTokens = (): ColorTokens => ({
  colorBackground1: 'hsl(210, 30%, 8%)',
  colorBackground1Hover: '#3d3d3d',
  colorBackground1Pressed: '#fff',

  colorBackgroundDisabled: '#141414',

  colorTransparentBackground: 'transparent',
  colorTransparentBackgroundHover: 'transparent',
  colorTransparentBackgroundPressed: 'transparent',

  colorForeground1: '#fff',
  colorForeground1Hover: '#fff',
  colorForeground1Pressed: '#fff',
  colorForeground2: '#d6d6d6',
  colorForeground2BrandHover: '#2899f5',
  colorForeground2BrandPressed: '#1890f1',

  colorForegroundDisabled: '#5c5c5c',

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
