import type { Theme } from './types';

export const tokens: Record<keyof Theme, string> = {
  //
  colorForeground3: 'var(--colorForeground3)',
  colorTransparentStroke: 'var(--colorTransparentStroke)',
  //
  borderRadiusNone: 'var(--borderRadiusNone)',
  borderRadiusSmall: 'var(--borderRadiusSmall)',
  borderRadiusMedium: 'var(--borderRadiusMedium)',
  borderRadiusLarge: 'var(--borderRadiusLarge)',
  borderRadiusXLarge: 'var(--borderRadiusXLarge)',
  borderRadiusCircular: 'var(--borderRadiusCircular)',
  fontSizeBase100: 'var(--fontSizeBase100)',
  fontSizeBase200: 'var(--fontSizeBase200)',
  fontSizeBase300: 'var(--fontSizeBase300)',
  fontSizeBase400: 'var(--fontSizeBase400)',
  fontSizeBase500: 'var(--fontSizeBase500)',
  fontSizeBase600: 'var(--fontSizeBase600)',
  fontSizeHero700: 'var(--fontSizeHero700)',
  fontSizeHero800: 'var(--fontSizeHero800)',
  fontSizeHero900: 'var(--fontSizeHero900)',
  fontSizeHero1000: 'var(--fontSizeHero1000)',
  lineHeightBase100: 'var(--lineHeightBase100)',
  lineHeightBase200: 'var(--lineHeightBase200)',
  lineHeightBase300: 'var(--lineHeightBase300)',
  lineHeightBase400: 'var(--lineHeightBase400)',
  lineHeightBase500: 'var(--lineHeightBase500)',
  lineHeightBase600: 'var(--lineHeightBase600)',
  lineHeightHero700: 'var(--lineHeightHero700)',
  lineHeightHero800: 'var(--lineHeightHero800)',
  lineHeightHero900: 'var(--lineHeightHero900)',
  lineHeightHero1000: 'var(--lineHeightHero1000)',
  fontFamily: 'var(--fontFamily)',
  fontFamilyMono: 'var(--fontFamilyMono)',
  fontFamilySpicy: 'var(--fontFamilySpicy)',
  fontWeightRegular: 'var(--fontWeightRegular)',
  fontWeightMedium: 'var(--fontWeightMedium)',
  fontWeightSemibold: 'var(--fontWeightSemibold)',
  strokeWidthThin: 'var(--strokeWidthThin)',
  strokeWidthThick: 'var(--strokeWidthThick)',
  strokeWidthThicker: 'var(--strokeWidthThicker)',
  strokeWidthThickest: 'var(--strokeWidthThickest)',
  spacingHorizontalNone: 'var(--spacingHorizontalNone)',
  spacingHorizontalXXS: 'var(--spacingHorizontalXXS)',
  spacingHorizontalXS: 'var(--spacingHorizontalXS)',
  spacingHorizontalSNudge: 'var(--spacingHorizontalSNudge)',
  spacingHorizontalS: 'var(--spacingHorizontalS)',
  spacingHorizontalMNudge: 'var(--spacingHorizontalMNudge)',
  spacingHorizontalM: 'var(--spacingHorizontalM)',
  spacingHorizontalL: 'var(--spacingHorizontalL)',
  spacingHorizontalXL: 'var(--spacingHorizontalXL)',
  spacingHorizontalXXL: 'var(--spacingHorizontalXXL)',
  spacingHorizontalXXXL: 'var(--spacingHorizontalXXXL)',
  spacingVerticalNone: 'var(--spacingVerticalNone)',
  spacingVerticalXXS: 'var(--spacingVerticalXXS)',
  spacingVerticalXS: 'var(--spacingVerticalXS)',
  spacingVerticalSNudge: 'var(--spacingVerticalSNudge)',
  spacingVerticalS: 'var(--spacingVerticalS)',
  spacingVerticalMNudge: 'var(--spacingVerticalMNudge)',
  spacingVerticalM: 'var(--spacingVerticalM)',
  spacingVerticalL: 'var(--spacingVerticalL)',
  spacingVerticalXL: 'var(--spacingVerticalXL)',
  spacingVerticalXXL: 'var(--spacingVerticalXXL)',
  spacingVerticalXXXL: 'var(--spacingVerticalXXXL)',
  durationUltraFast: 'var(--durationUltraFast)',
  durationFaster: 'var(--durationFaster)',
  durationFast: 'var(--durationFast)',
  durationNormal: 'var(--durationNormal)',
  durationSlow: 'var(--durationSlow)',
  durationSlower: 'var(--durationSlower)',
  durationUltraSlow: 'var(--durationUltraSlow)',
  curveAccelerateMax: 'var(--curveAccelerateMax)',
  curveAccelerateMid: 'var(--curveAccelerateMid)',
  curveAccelerateMin: 'var(--curveAccelerateMin)',
  curveDecelerateMax: 'var(--curveDecelerateMax)',
  curveDecelerateMid: 'var(--curveDecelerateMid)',
  curveDecelerateMin: 'var(--curveDecelerateMin)',
  curveEasyEaseMax: 'var(--curveEasyEaseMax)',
  curveEasyEase: 'var(--curveEasyEase)',
  curveLinear: 'var(--curveLinear)',
  colorBackground1: 'var(--colorBackground1)',
  colorBackground1Hover: 'var(--colorBackground1Hover)',
  colorBackground1Pressed: 'var(--colorBackground1Pressed)',
  colorBackgroundDisabled: 'var(--colorBackgroundDisabled)',
  colorTransparentBackground: 'var(--colorTransparentBackground)',
  colorTransparentBackgroundHover: 'var(--colorTransparentBackgroundHover)',
  colorTransparentBackgroundPressed: 'var(--colorTransparentBackgroundPressed)',
  colorForeground1: 'var(--colorForeground1)',
  colorForeground1Hover: 'var(--colorForeground1Hover)',
  colorForeground1Pressed: 'var(--colorForeground1Pressed)',
  colorForeground2: 'var(--colorForeground2)',
  colorForeground2BrandHover: 'var(--colorForeground2BrandHover)',
  colorForeground2BrandPressed: 'var(--colorForeground2BrandPressed)',
  colorForegroundDisabled: 'var(--colorForegroundDisabled)',
  colorStroke1: 'var(--colorStroke1)',
  colorStroke1Hover: 'var(--colorStroke1Hover)',
  colorStroke1Pressed: 'var(--colorStroke1Pressed)',
  colorStrokeFocus2: 'var(--colorStrokeFocus2)',
  colorStrokeDisabled: 'var(--colorStrokeDisabled)',
  colorShadowAmbient: 'var(--colorShadowAmbient)',
  colorShadowKey: 'var(--colorShadowKey)',
  colorBrandShadowAmbient: 'var(--colorBrandShadowAmbient)',
  colorBrandShadowKey: 'var(--colorBrandShadowKey)',
  shadow2: 'var(--shadow2)',
  shadow4: 'var(--shadow4)',
  shadow8: 'var(--shadow8)',
  shadow16: 'var(--shadow16)',
  shadow28: 'var(--shadow28)',
  shadow64: 'var(--shadow64)',
  shadow2Brand: 'var(--shadow2Brand)',
  shadow4Brand: 'var(--shadow4Brand)',
  shadow8Brand: 'var(--shadow8Brand)',
  shadow16Brand: 'var(--shadow16Brand)',
  shadow28Brand: 'var(--shadow28Brand)',
  shadow64Brand: 'var(--shadow64Brand)',
};
