import { generateColorTokens } from '../alias/darkColor';
import { durations, borderRadius, curves, fontFamilies, fontWeights, strokeWidths } from '../global';
import { Theme } from '../types';
import { createShadowTokens } from './shadows';

export const createDarkTheme = (): Theme => {
  const colorTokens = generateColorTokens();

  return {
    ...colorTokens,
    ...durations,
    ...borderRadius,
    ...curves,
    ...fontFamilies,
    ...fontWeights,
    ...strokeWidths,
    ...createShadowTokens(colorTokens.colorShadowAmbient, colorTokens.colorShadowKey),
    ...createShadowTokens(colorTokens.colorBrandShadowAmbient, colorTokens.colorBrandShadowKey, 'Brand'),
  };
};
