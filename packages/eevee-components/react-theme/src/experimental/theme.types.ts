export type ColorTokens = {
  //
  bg1: string;
  bg2: string;
  bg3: string;
  bg4: string;
  bg5: string;
  bg6: string;
  bg7: string;
  bg8: string;
  bg9: string;
  bg10: string;
  bgDisable: string;
  bgTransparent: string;
  bgNote: string;
  bgTip: string;
  bgImportant: string;
  bgCaution: string;
  bgWarning: string;
  //
  f1: string;
  f2: string;
  f3: string;
  f4: string;
  f5: string;
  f6: string;
  f7: string;
  f8: string;
  f9: string;
  f10: string;
  fDisable: string;
  //
  bNote: string;
  bTip: string;
  bImportant: string;
  bCaution: string;
  bWarning: string;
  b1: string;
  b2: string;
  bDisable: string;

  // Old code snippet
  syntaxBg: string;
  syntaxHighlight: string;
  syntaxTxt: string;
  syntaxComment: string;
  syntaxProp: string;
  syntaxBool: string;
  syntaxVal: string;
  syntaxStr: string;
  syntaxName: string;
  syntaxDel: string;
  syntaxRegex: string;
  syntaxFn: string;
  //
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  //

  spColorsFgActive: string;
  spColorsFgDefault: string;
  spColorsFgInactive: string;
  spColorsBgActive: string;
  spColorsBgDefault: string;
  spColorsBgDefaultOverlay: string;
  spColorsBgInput: string;
  spColorsAccent: string;
  spColorsBgError: string;
  spColorsFgError: string;
  themePlain: string;
  themeComment: string;
  themeKeyword: string;
  themeTag: string;
  themePunctuation: string;
  themeDefinition: string;
  themeProperty: string;
  themeStatic: string;
  themeString: string;
};

export type ColorPaletteRed =
  | 'colorPaletteRedBackground1'
  | 'colorPaletteRedBackground2'
  | 'colorPaletteRedBackground3'
  | 'colorPaletteRedForeground1'
  | 'colorPaletteRedForeground2'
  | 'colorPaletteRedForeground3'
  | 'colorPaletteRedBorderActive'
  | 'colorPaletteRedBorder1'
  | 'colorPaletteRedBorder2';

export type ColorPaletteGreen =
  | 'colorPaletteGreenBackground1'
  | 'colorPaletteGreenBackground2'
  | 'colorPaletteGreenBackground3'
  | 'colorPaletteGreenForeground1'
  | 'colorPaletteGreenForeground2'
  | 'colorPaletteGreenForeground3'
  | 'colorPaletteGreenBorderActive'
  | 'colorPaletteGreenBorder1'
  | 'colorPaletteGreenBorder2';

export type ColorPaletteDarkOrange =
  | 'colorPaletteDarkOrangeBackground1'
  | 'colorPaletteDarkOrangeBackground2'
  | 'colorPaletteDarkOrangeBackground3'
  | 'colorPaletteDarkOrangeForeground1'
  | 'colorPaletteDarkOrangeForeground2'
  | 'colorPaletteDarkOrangeForeground3'
  | 'colorPaletteDarkOrangeBorderActive'
  | 'colorPaletteDarkOrangeBorder1'
  | 'colorPaletteDarkOrangeBorder2';

export type ColorPaletteYellow =
  | 'colorPaletteYellowBackground1'
  | 'colorPaletteYellowBackground2'
  | 'colorPaletteYellowBackground3'
  | 'colorPaletteYellowForeground1'
  | 'colorPaletteYellowForeground2'
  | 'colorPaletteYellowForeground3'
  | 'colorPaletteYellowBorderActive'
  | 'colorPaletteYellowBorder1'
  | 'colorPaletteYellowBorder2';

export type ColorPaletteBerry =
  | 'colorPaletteBerryBackground1'
  | 'colorPaletteBerryBackground2'
  | 'colorPaletteBerryBackground3'
  | 'colorPaletteBerryForeground1'
  | 'colorPaletteBerryForeground2'
  | 'colorPaletteBerryForeground3'
  | 'colorPaletteBerryBorderActive'
  | 'colorPaletteBerryBorder1'
  | 'colorPaletteBerryBorder2';

export type ColorPaletteMarigold =
  | 'colorPaletteMarigoldBackground1'
  | 'colorPaletteMarigoldBackground2'
  | 'colorPaletteMarigoldBackground3'
  | 'colorPaletteMarigoldForeground1'
  | 'colorPaletteMarigoldForeground2'
  | 'colorPaletteMarigoldForeground3'
  | 'colorPaletteMarigoldBorderActive'
  | 'colorPaletteMarigoldBorder1'
  | 'colorPaletteMarigoldBorder2';

export type ColorPaletteLightGreen =
  | 'colorPaletteLightGreenBackground1'
  | 'colorPaletteLightGreenBackground2'
  | 'colorPaletteLightGreenBackground3'
  | 'colorPaletteLightGreenForeground1'
  | 'colorPaletteLightGreenForeground2'
  | 'colorPaletteLightGreenForeground3'
  | 'colorPaletteLightGreenBorderActive'
  | 'colorPaletteLightGreenBorder1'
  | 'colorPaletteLightGreenBorder2';

export type ColorPaletteDarkRed =
  | 'colorPaletteDarkRedBackground2'
  | 'colorPaletteDarkRedForeground2'
  | 'colorPaletteDarkRedBorderActive';

export type ColorPaletteCranberry =
  | 'colorPaletteCranberryBackground2'
  | 'colorPaletteCranberryForeground2'
  | 'colorPaletteCranberryBorderActive';

export type ColorPalettePumpkin =
  | 'colorPalettePumpkinBackground2'
  | 'colorPalettePumpkinForeground2'
  | 'colorPalettePumpkinBorderActive';

export type ColorPalettePeach =
  | 'colorPalettePeachBackground2'
  | 'colorPalettePeachForeground2'
  | 'colorPalettePeachBorderActive';

export type ColorPaletteGold =
  | 'colorPaletteGoldBackground2'
  | 'colorPaletteGoldForeground2'
  | 'colorPaletteGoldBorderActive';

export type ColorPaletteBrass =
  | 'colorPaletteBrassBackground2'
  | 'colorPaletteBrassForeground2'
  | 'colorPaletteBrassBorderActive';

export type ColorPaletteBrown =
  | 'colorPaletteBrownBackground2'
  | 'colorPaletteBrownForeground2'
  | 'colorPaletteBrownBorderActive';

export type ColorPaletteForest =
  | 'colorPaletteForestBackground2'
  | 'colorPaletteForestForeground2'
  | 'colorPaletteForestBorderActive';

export type ColorPaletteSeafoam =
  | 'colorPaletteSeafoamBackground2'
  | 'colorPaletteSeafoamForeground2'
  | 'colorPaletteSeafoamBorderActive';

export type ColorPaletteDarkGreen =
  | 'colorPaletteDarkGreenBackground2'
  | 'colorPaletteDarkGreenForeground2'
  | 'colorPaletteDarkGreenBorderActive';

export type ColorPaletteLightTeal =
  | 'colorPaletteLightTealBackground2'
  | 'colorPaletteLightTealForeground2'
  | 'colorPaletteLightTealBorderActive';

export type ColorPaletteTeal =
  | 'colorPaletteTealBackground2'
  | 'colorPaletteTealForeground2'
  | 'colorPaletteTealBorderActive';

export type ColorPaletteSteel =
  | 'colorPaletteSteelBackground2'
  | 'colorPaletteSteelForeground2'
  | 'colorPaletteSteelBorderActive';

export type ColorPaletteBlue =
  | 'colorPaletteBlueBackground2'
  | 'colorPaletteBlueForeground2'
  | 'colorPaletteBlueBorderActive';

export type ColorPaletteRoyalBlue =
  | 'colorPaletteRoyalBlueBackground2'
  | 'colorPaletteRoyalBlueForeground2'
  | 'colorPaletteRoyalBlueBorderActive';

export type ColorPaletteCornflower =
  | 'colorPaletteCornflowerBackground2'
  | 'colorPaletteCornflowerForeground2'
  | 'colorPaletteCornflowerBorderActive';

export type ColorPaletteNavy =
  | 'colorPaletteNavyBackground2'
  | 'colorPaletteNavyForeground2'
  | 'colorPaletteNavyBorderActive';

export type ColorPaletteLavender =
  | 'colorPaletteLavenderBackground2'
  | 'colorPaletteLavenderForeground2'
  | 'colorPaletteLavenderBorderActive';

export type ColorPalettePurple =
  | 'colorPalettePurpleBackground2'
  | 'colorPalettePurpleForeground2'
  | 'colorPalettePurpleBorderActive';

export type ColorPaletteGrape =
  | 'colorPaletteGrapeBackground2'
  | 'colorPaletteGrapeForeground2'
  | 'colorPaletteGrapeBorderActive';

export type ColorPaletteLilac =
  | 'colorPaletteLilacBackground2'
  | 'colorPaletteLilacForeground2'
  | 'colorPaletteLilacBorderActive';

export type ColorPalettePink =
  | 'colorPalettePinkBackground2'
  | 'colorPalettePinkForeground2'
  | 'colorPalettePinkBorderActive';

export type ColorPaletteMagenta =
  | 'colorPaletteMagentaBackground2'
  | 'colorPaletteMagentaForeground2'
  | 'colorPaletteMagentaBorderActive';

export type ColorPalettePlum =
  | 'colorPalettePlumBackground2'
  | 'colorPalettePlumForeground2'
  | 'colorPalettePlumBorderActive';

export type ColorPaletteBeige =
  | 'colorPaletteBeigeBackground2'
  | 'colorPaletteBeigeForeground2'
  | 'colorPaletteBeigeBorderActive';

export type ColorPaletteMink =
  | 'colorPaletteMinkBackground2'
  | 'colorPaletteMinkForeground2'
  | 'colorPaletteMinkBorderActive';

export type ColorPalettePlatinum =
  | 'colorPalettePlatinumBackground2'
  | 'colorPalettePlatinumForeground2'
  | 'colorPalettePlatinumBorderActive';

export type ColorPaletteAnchor =
  | 'colorPaletteAnchorBackground2'
  | 'colorPaletteAnchorForeground2'
  | 'colorPaletteAnchorBorderActive';

export type StatusColorPaletteTokens = Record<
  | ColorPaletteRed
  | ColorPaletteGreen
  | ColorPaletteDarkOrange
  | ColorPaletteYellow
  | ColorPaletteBerry
  | ColorPaletteMarigold
  | ColorPaletteLightGreen,
  string
>;

export type PersonaColorPaletteTokens = Record<
  | ColorPaletteDarkRed
  | ColorPaletteCranberry
  | ColorPalettePumpkin
  | ColorPalettePeach
  | ColorPaletteGold
  | ColorPaletteBrass
  | ColorPaletteBrown
  | ColorPaletteForest
  | ColorPaletteSeafoam
  | ColorPaletteDarkGreen
  | ColorPaletteLightTeal
  | ColorPaletteTeal
  | ColorPaletteSteel
  | ColorPaletteBlue
  | ColorPaletteRoyalBlue
  | ColorPaletteCornflower
  | ColorPaletteNavy
  | ColorPaletteLavender
  | ColorPalettePurple
  | ColorPaletteGrape
  | ColorPaletteLilac
  | ColorPalettePink
  | ColorPaletteMagenta
  | ColorPalettePlum
  | ColorPaletteBeige
  | ColorPaletteMink
  | ColorPalettePlatinum
  | ColorPaletteAnchor,
  string
>;

export type ColorPaletteTokens = StatusColorPaletteTokens & PersonaColorPaletteTokens;

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

export type Brands = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 | 160;

export type BrandVariants = Record<Brands, string>;

/**
 * All the global shared colors and their shade/tint variants
 */
export type GlobalSharedColors = {
  darkRed: ColorVariants;
  cranberry: ColorVariants;
  red: ColorVariants;
  darkOrange: ColorVariants;
  pumpkin: ColorVariants;
  peach: ColorVariants;
  marigold: ColorVariants;
  yellow: ColorVariants;
  gold: ColorVariants;
  brass: ColorVariants;
  brown: ColorVariants;
  forest: ColorVariants;
  seafoam: ColorVariants;
  lightGreen: ColorVariants;
  green: ColorVariants;
  darkGreen: ColorVariants;
  lightTeal: ColorVariants;
  teal: ColorVariants;
  steel: ColorVariants;
  blue: ColorVariants;
  royalBlue: ColorVariants;
  cornflower: ColorVariants;
  navy: ColorVariants;
  lavender: ColorVariants;
  purple: ColorVariants;
  grape: ColorVariants;
  berry: ColorVariants;
  lilac: ColorVariants;
  pink: ColorVariants;
  magenta: ColorVariants;
  plum: ColorVariants;
  beige: ColorVariants;
  mink: ColorVariants;
  platinum: ColorVariants;
  anchor: ColorVariants;
};

export type FontSizeTokens = {
  fontSizeBase100: string;
  fontSizeBase200: string;
  fontSizeBase300: string;
  fontSizeBase400: string;
  fontSizeBase500: string;
  fontSizeBase600: string;

  fontSizeHero700: string;
  fontSizeHero800: string;
  fontSizeHero900: string;
  fontSizeHero1000: string;
};

export type LineHeightTokens = {
  lineHeightBase100: string;
  lineHeightBase200: string;
  lineHeightBase300: string;
  lineHeightBase400: string;
  lineHeightBase500: string;
  lineHeightBase600: string;

  lineHeightHero700: string;
  lineHeightHero800: string;
  lineHeightHero900: string;
  lineHeightHero1000: string;
};

export type FontWeightTokens = {
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightSemibold: number;
};

export type FontFamilyTokens = {
  fontFamily: string;
  fontFamilyMono: string;
  fontFamilySpicy: string;
};

export type TextAlignment =
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'center'
  | 'end'
  | 'start'
  | 'justify'
  | 'left'
  | 'match-parent'
  | 'right';

export type TextAlignments = {
  start: TextAlignment;
  center: TextAlignment;
  end: TextAlignment;
  justify: TextAlignment;
};

export type BorderRadiusTokens = {
  borderRadiusNone: string;
  borderRadiusSmall: string;
  borderRadiusMedium: string;
  borderRadiusLarge: string;
  borderRadiusXLarge: string;
  borderRadiusCircular: string;
};

export type StrokeWidthTokens = {
  strokeWidthThin: string;
  strokeWidthThick: string;
  strokeWidthThicker: string;
  strokeWidthThickest: string;
};

export type SpacingTokens = {
  none: string;
  xxs: string;
  xs: string;
  sNudge: string;
  s: string;
  mNudge: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
};

export type HorizontalSpacingTokens = {
  spacingHorizontalNone: string;
  spacingHorizontalXXS: string;
  spacingHorizontalXS: string;
  spacingHorizontalSNudge: string;
  spacingHorizontalS: string;
  spacingHorizontalMNudge: string;
  spacingHorizontalM: string;
  spacingHorizontalL: string;
  spacingHorizontalXL: string;
  spacingHorizontalXXL: string;
  spacingHorizontalXXXL: string;
};

export type VerticalSpacingTokens = {
  spacingVerticalNone: string;
  spacingVerticalXXS: string;
  spacingVerticalXS: string;
  spacingVerticalSNudge: string;
  spacingVerticalS: string;
  spacingVerticalMNudge: string;
  spacingVerticalM: string;
  spacingVerticalL: string;
  spacingVerticalXL: string;
  spacingVerticalXXL: string;
  spacingVerticalXXXL: string;
};

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

export type Greys =
  | 0
  | 2
  | 4
  | 6
  | 8
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 22
  | 24
  | 26
  | 28
  | 30
  | 32
  | 34
  | 36
  | 38
  | 40
  | 42
  | 44
  | 46
  | 48
  | 50
  | 52
  | 54
  | 56
  | 58
  | 60
  | 62
  | 64
  | 66
  | 68
  | 70
  | 72
  | 74
  | 76
  | 78
  | 80
  | 82
  | 84
  | 86
  | 88
  | 90
  | 92
  | 94
  | 96
  | 98
  | 100;

export type AlphaColors = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

export type DurationTokens = {
  durationUltraFast: string;
  durationFaster: string;
  durationFast: string;
  durationNormal: string;
  durationSlow: string;
  durationSlower: string;
  durationUltraSlow: string;
};

export type SanpackColor = {
  spColorsFgActive: string;
  spColorsFgDefault: string;
  spColorsFgInactive: string;
  spColorsBgActive: string;
  spColorsBgDefault: string;
  spColorsBgDefaultOverlay: string;
  spColorsBgInput: string;
  spColorsAccent: string;
  spColorsBgError: string;
  spColorsFgError: string;
  themePlain: string;
  themeComment: string;
  themeKeyword: string;
  themeTag: string;
  themePunctuation: string;
  themeDefinition: string;
  themeProperty: string;
  themeStatic: string;
  themeString: string;
};

// TODO: do we want to split theme for better tree shaking? (MUI)
// But will this end up in the bundle at all? It should be used only in makeStyles and should be removed during build
export type Theme = FontSizeTokens &
  LineHeightTokens &
  BorderRadiusTokens &
  StrokeWidthTokens &
  HorizontalSpacingTokens &
  VerticalSpacingTokens &
  // ShadowTokens &
  // ShadowBrandTokens &
  FontFamilyTokens &
  FontWeightTokens &
  // ColorPaletteTokens &
  ColorTokens;
// &
// SanpackColor &
// DurationTokens

export type PartialTheme = Partial<Theme>;

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
  lgAndLarger: string;
  xsAndLarger: string;
  mdAndLarger: string;
  smAndLarger: string;
  xlAndExtraExtraLarger: string;
};
