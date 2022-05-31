/**
 * Design tokens for alias colors
 */

export type ColorTokens = {
  // must have:
  colorNeutralShadowAmbient: string;
  colorNeutralShadowKey: string;
  colorNeutralShadowAmbientLighter: string;
  colorNeutralShadowKeyLighter: string;
  colorNeutralShadowAmbientDarker: string;
  colorNeutralShadowKeyDarker: string;
  colorBrandShadowAmbient: string;
  colorBrandShadowKey: string;

  colorBackground: string;
  colorForeground: string;

  colorForeground1Hover: string;

  colorBackground1Hover: string;

  colorStroke1: string;
  colorStroke1Hover: string;
  colorStroke1Pressed: string;
  colorStroke1Selected: string;

  // maybe change
  colorText: string;
  colorBlurredBackground: string;
  colorPrimary: string;
  colorSecondary: string;
  colorTertiary: string;
  colorDecorative: string;
  colorMuted: string;
  colorMutedBackground: string;
  colorInfo: string;
  colorSuccess: string;
  colorSuccessBackground: string;
  colorError: string;
  colorErrorBackground: string;
  colorAlert: string;
  colorAlertBackground: string;
  colorVenn0: string;
  colorVenn1: string;
  colorGray100: string;
  colorGray200: string;
  colorGray300: string;
  colorGray400: string;
  colorGray500: string;
  colorGray600: string;
  colorGray700: string;
  colorGray800: string;
  colorGray900: string;
  colorGray1000: string;
  colorSubtleBackground: string;
  colorSubtleFloating: string;
  colorHomepageLight: string;
  colorHomepageDark: string;
  colorHomepageBg: string;
  syntaxBg: string;
  syntaxHighLight: string;
  syntaxTxt: string;
  syntaxComment: string;
  syntaxProps: string;
  syntaxBool: string;
  syntaxVal: string;
  syntaxStr: string;
  syntaxName: string;
  syntaxDel: string;
  syntaxRegex: string;
  syntaxFn: string;
  // syntaxDark: string;
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
