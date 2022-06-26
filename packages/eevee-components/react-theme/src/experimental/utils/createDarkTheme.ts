import { colorPaletteTokens } from '../alias/darkColorPalette';
import { generateColorTokens } from '../alias/darkColor';

import { borderRadius, fontSizes, lineHeights, fontFamilies, strokeWidths, fontWeights } from '../global/index';
import type { BrandVariants, Theme } from '../theme.types';
import { durations } from '../global/durations';
import { horizontalSpacings, verticalSpacings } from '../global/spacings';

export const createDarkTheme: (brand: BrandVariants) => Theme = brand => {
  const colorTokens = generateColorTokens(brand);

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

    ...colorTokens,
    ...colorPaletteTokens,
  };
};
