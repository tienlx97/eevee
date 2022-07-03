// import { colorPaletteTokens } from '../alias/lightColorPalette';
import { generateColorTokens } from '../alias/lightColor';

import { borderRadius, fontSizes, lineHeights, fontFamilies, strokeWidths, fontWeights } from '../global/index';
import type { BrandVariants, Theme } from '../theme.types';
// import { durations } from '../global/durations';
import { horizontalSpacings, verticalSpacings } from '../global/spacings';

export const createLightTheme: (brand: BrandVariants) => Theme = brand => {
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
    // ...durations,

    ...colorTokens,
    // ...colorPaletteTokens,
  };
};
