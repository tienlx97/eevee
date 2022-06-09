import { generateColorTokens } from '../alias/twDark';
import { borderRadius, fontSizes, lineHeights, fontFamilies, strokeWidths, fontWeights } from '../global/index';
import { horizontalSpacings, verticalSpacings } from '../global/spacings';
import type { Theme } from '../types';
import { durations } from '../global/durations';
import { curves } from '../global/curves';
import { createShadowTokens } from './shadows';

export const createDarkTheme = (): Theme => {
  const colorTokens = generateColorTokens();

  return {
    ...borderRadius,
    ...fontSizes,
    ...lineHeights,
    ...fontFamilies,
    ...fontWeights,
    ...strokeWidths,
    ...horizontalSpacings,
    ...verticalSpacings,
    ...durations,
    ...curves,

    ...colorTokens,

    ...createShadowTokens(colorTokens.colorShadowAmbient, colorTokens.colorShadowKey),
    ...createShadowTokens(colorTokens.colorBrandShadowAmbient, colorTokens.colorBrandShadowKey, 'Brand'),
  };
};
