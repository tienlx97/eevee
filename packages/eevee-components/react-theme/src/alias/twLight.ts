import type { ColorTokens } from '../types';

export const generateColorTokens = (): ColorTokens => ({
  background1: 'rgba(255, 255, 255,1)',
  background2: 'rgba(247, 249, 249,1)',
  background3: 'rgb(15, 20, 25)',
  background4: 'rgba(0,0,0,0)',
  backgroundTransparent: 'transparent',
  backgroundDisabled: '#f0f0f0',

  hover1: 'rgba(231, 233, 234, 0.1)',
  hover2: 'rgba(255,255,255,0.03)',
  hover3: 'rgba(29,155,240,0.1)',
  hover4: 'rgb(26,140,216)',
  hover5: 'rgba(15,20,25,0.1)',

  border1: 'rgb(239, 243, 244)',
  borderTransparent: 'transparent',
  borderDisable: '#e0e0e0',

  foreground1: 'rgb(15, 20, 25)',
  foreground2: 'rgb(83, 100, 113)',
  foreground3: 'rgb(29, 155, 240)',
  foreground4: 'rgb(0,186,124)',
  foreground5: 'rgb(249,24,128)',
  foreground6: 'rgb(255, 255, 255)',
  foreground7: 'hsl(245, 100%, 60%)',
  foreground8: 'hsl(255, 85%, 30%)',
  foreground9: 'hsl(225, 25%, 20%)',
  foreground10: 'hsl(225, 15%, 15%)',

  backgroundInfo: 'hsl(210, 55%, 92%)',
  backgroundSuccess: 'hsla(160, 100%, 40%, 0.1)',
  backgroundWarning: 'hsla(52, 100%, 50%, 0.25)',
  borderInfo: 'hsl(245, 100%, 60%)',
  borderSuccess: 'hsl(160, 100%, 40%)',
  borderWarning: 'hsl(37, 100%, 50%)',

  syntaxBg: 'hsl(225, 25%, 97%)',
  syntaxHighlight: 'hsl(225, 25%, 93%)',
  syntaxTxt: '#2A2A2A',
  syntaxComment: '#467790',
  syntaxProp: '#da0079',
  syntaxBool: '#bf00b8',
  syntaxVal: '#78909C',
  syntaxStr: '#651fff',
  syntaxName: '#AA00FF',
  syntaxDel: 'rgb(255, 85, 85)',
  syntaxRegex: '#3600d6',
  syntaxFn: '#3D5AFE',

  foregroundDisabled: '#bdbdbd',
  // shadow
  colorShadowAmbient: 'rgba(0,0,0,0.12)',
  colorShadowKey: 'rgba(0,0,0,0.14)',
  colorBrandShadowAmbient: 'rgba(0,0,0,0.30)',
  colorBrandShadowKey: 'rgba(0,0,0,0.25)',
});
