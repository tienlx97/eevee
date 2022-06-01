/**
 * Design tokens for alias colors
 */

export type ColorTokens = {
  // must have:
  colorShadowAmbient: string;
  colorShadowKey: string;
  colorShadowAmbientLighter: string;
  colorShadowKeyLighter: string;
  colorShadowAmbientDarker: string;
  colorShadowKeyDarker: string;
  colorBrandShadowAmbient: string;
  colorBrandShadowKey: string;
  colorBackground1: string;
  colorForeground1: string;
  colorForeground1Hover: string;
  colorForeground1Pressed: string;
  colorForeground1Selected: string;

  colorForeground2: string;
  colorForeground2Hover: string;
  colorForeground2Pressed: string;
  colorForeground2Selected: string;

  colorForeground3: string;
  colorForeground3Hover: string;
  colorForeground3Pressed: string;
  colorForeground3Selected: string;

  colorForeground4: string;
  colorForeground4Hover: string;
  colorForeground4Pressed: string;
  colorForeground4Selected: string;

  colorForegroundDisabled: string;
  colorForegroundInvertedDisabled: string;

  colorStroke1: string;
  colorStroke1Hover: string;
  colorStroke1Pressed: string;
  colorStroke1Selected: string;
};

export type FontWeightTokens = {
  fontWeightBold: number;
  fontWeightMedium: number;
  fontWeightLight: number;
};

export type FontFamilyTokens = {
  fontFamily: string;
  fontFamilyMono: string;
  fontFamilySpicy: string;
};

export type StrokeWidthTokens = {
  strokeWidthThin: string;
  strokeWidthThick: string;
  strokeWidthThicker: string;
  strokeWidthThickest: string;
};

/**
 * Possible color variant values
 */
export type ColorVariants = {
  shade50: string;
  shade40: string;
  shade30: string;
  shade20: string;
  shade10: string;
  primary: string;
  tint10: string;
  tint20: string;
  tint30: string;
  tint40: string;
  tint50: string;
  tint60: string;
};

/**
 * All the global shared colors and their shade/tint variants
 */
export type GlobalSharedColors = {
  darkRed: ColorVariants;
  burgundy: ColorVariants;
  cranberry: ColorVariants;
  red: ColorVariants;
  darkOrange: ColorVariants;
  bronze: ColorVariants;
  pumpkin: ColorVariants;
  orange: ColorVariants;
  peach: ColorVariants;
  marigold: ColorVariants;
  yellow: ColorVariants;
  gold: ColorVariants;
  brass: ColorVariants;
  brown: ColorVariants;
  darkBrown: ColorVariants;
  lime: ColorVariants;
  forest: ColorVariants;
  seafoam: ColorVariants;
  lightGreen: ColorVariants;
  green: ColorVariants;
  darkGreen: ColorVariants;
  lightTeal: ColorVariants;
  teal: ColorVariants;
  darkTeal: ColorVariants;
  cyan: ColorVariants;
  steel: ColorVariants;
  lightBlue: ColorVariants;
  blue: ColorVariants;
  royalBlue: ColorVariants;
  darkBlue: ColorVariants;
  cornflower: ColorVariants;
  navy: ColorVariants;
  lavender: ColorVariants;
  purple: ColorVariants;
  darkPurple: ColorVariants;
  orchid: ColorVariants;
  grape: ColorVariants;
  berry: ColorVariants;
  lilac: ColorVariants;
  pink: ColorVariants;
  hotPink: ColorVariants;
  magenta: ColorVariants;
  plum: ColorVariants;
  beige: ColorVariants;
  mink: ColorVariants;
  silver: ColorVariants;
  platinum: ColorVariants;
  anchor: ColorVariants;
  charcoal: ColorVariants;
};

export type BorderRadiusTokens = {
  borderRadiusNone: string;
  borderRadiusSmall: string;
  borderRadiusMedium: string;
  borderRadiusLarge: string;
  borderRadiusXLarge: string;
  borderRadiusCircular: string;
};

export type CurveTokens = {
  curveAccelerateMax: string;
  curveAccelerateMid: string;
  curveAccelerateMin: string;
  curveDecelerateMax: string;
  curveDecelerateMid: string;
  curveDecelerateMin: string;
  curveEasyEaseMax: string;
  curveEasyEase: string;
  curveLinear: string;
};

export type DurationTokens = {
  durationUltraFast: string;
  durationFaster: string;
  durationFast: string;
  durationNormal: string;
  durationSlow: string;
  durationSlower: string;
  durationUltraSlow: string;
};

export type BreakPointSizes = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type BreakPoints = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  //
  xsAndSmaller: string;
  smAndSmaller: string;
  mdAndSmaller: string;
  lgAndSmaller: string;
  xlAndSmaller: string;
  //
  xlAndExtraExtraLarger: string;
};

/**
 * all and (max-width: 551.98px)
 * all and (min-width: 552px) and (max-width: 727.98px)
 * all and (min-width: 728px) and (max-width: 903.98px)
 * all and (min-width: 904px) and (max-width: 1079.98px)
 *
 * all and (max-width: 727.98px)
 * all and (max-width: 903.98px)
 * all and (max-width: 1079.98px)
 * all and (min-width: 1080px)
 * all and (max-width: 1239.98px)
 * all and (min-width: 7000px)
 * (orientation: landscape) and (max-width: 903.98px)
 */

export type Brands = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 | 160;

export type BrandVariants = Record<Brands, string>;

/**
 * Design tokens for shadow levels
 */
export type ShadowTokens = {
  shadow2: string;
  shadow4: string;
  shadow8: string;
  shadow16: string;
  shadow28: string;
  shadow64: string;
};

export type ShadowBrandTokens = {
  shadow2Brand: string;
  shadow4Brand: string;
  shadow8Brand: string;
  shadow16Brand: string;
  shadow28Brand: string;
  shadow64Brand: string;
};

export type Theme = ColorTokens &
  FontFamilyTokens &
  FontWeightTokens &
  BorderRadiusTokens &
  CurveTokens &
  DurationTokens &
  ShadowTokens &
  ShadowBrandTokens &
  StrokeWidthTokens;
// BreakPoints &
// BreakPointSizes;

export type PartialTheme = Partial<Theme>;
