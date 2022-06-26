import type { ColorTokens, BrandVariants } from '../theme.types';
import { black, grey, blackAlpha, personaSharedColors } from '../global/colors';

export const generateColorTokens = (brand: BrandVariants): ColorTokens =>
  ({
    bg1: black, // #000
    bg2: grey[10], // #1a1a1a
    bg3: grey[98], // #fafafa ,
    bg4: blackAlpha[10], // rgba(0, 0, 0, 0.1)
    bgTransparent: 'transparent',
    bgDisable: grey[8], // #141414
    bgNote: 'hsl(210, 38%, 15%)',
    bgImportant: personaSharedColors.blue.tint20,
    bgTip: 'hsla(160, 100%, 40%, 0.1)',
    bgCaution: personaSharedColors.cranberry.tint20,
    bgWarning: 'hsla(38, 100%, 50%, 0.1)',

    //
    f1: 'rgb(231, 233, 234)', // twitter article title1
    f2: 'rgb(113, 118, 123)', // twitter article title2
    f3: 'rgb(29, 155, 240)', // button react
    f4: 'rgb(0,186,124)', // button react
    f5: 'rgb(249,24,128)', // button react
    f6: 'rgb(15, 20, 25)', // explore
    f7: 'hsl(230, 100%, 67%)',
    f8: 'hsl(53, 100%, 50%)',
    f9: 'hsl(210, 25%, 88%)',
    f10: 'hsl(210, 25%, 96%)',
    fDisable: '#5c5c5c',
    //
    b1: personaSharedColors.anchor.shade20,
    bNote: 'hsl(230, 100%, 67%)',
    bImportant: personaSharedColors.blue.primary,
    bTip: 'hsl(160, 100%, 40%)',
    bCaution: personaSharedColors.cranberry.primary,
    bWarning: 'hsl(30, 100%, 50%)',
    bDisable: '#424242',
    //
    syntaxBg: 'hsl(210, 30%, 12%)',
    syntaxHighlight: 'hsl(210, 30%, 18%)',
    syntaxTxt: '#FFF',
    syntaxComment: '#6c8998',
    syntaxProp: '#FF39A8',
    syntaxBool: '#FFD600',
    syntaxVal: '#61747D',
    syntaxStr: 'rgb(155, 109, 255)',
    syntaxName: '#C653FF',
    syntaxDel: '#FF5555',
    syntaxRegex: '#ffd700',
    syntaxFn: 'rgb(0, 190, 255)',

    h1: 'rgba(231, 233, 234, 0.1)', // left linkicon
    h2: 'rgba(255,255,255,0.03)', // right explpre
    h3: 'rgba(29,155,240,0.1)',
    h4: 'rgb(26,140,216)',
    h5: 'rgba(239, 243, 244,0.1)',
    //
    spColorsFgActive: '#fff!important',
    spColorsFgDefault: '#999!important',
    spColorsFgInactive: '#343434!important',
    spColorsBgActive: '#343434!important',
    spColorsBgDefault: '#16181d!important',
    spColorsBgDefaultOverlay: '#16181d!important',
    spColorsBgInput: '#242424!important',
    spColorsAccent: '#6caedd!important',
    spColorsBgError: '#ffcdca!important;',
    spColorsFgError: '#811e18!important',
    themePlain: '#fff',
    themeComment: '#757575',
    themeKeyword: '#77b7d7',
    themeTag: '#dfab5c',
    themePunctuation: '#fff',
    themeDefinition: '#86d9ca',
    themeProperty: '#77b7d7',
    themeStatic: '#c64640',
    themeString: '#977cdc',

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any);
