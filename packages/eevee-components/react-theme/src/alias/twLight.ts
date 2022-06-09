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
  foregroundDisabled: '#bdbdbd',
  // shadow
  colorShadowAmbient: 'rgba(0,0,0,0.12)',
  colorShadowKey: 'rgba(0,0,0,0.14)',
  colorBrandShadowAmbient: 'rgba(0,0,0,0.30)',
  colorBrandShadowKey: 'rgba(0,0,0,0.25)',
});
