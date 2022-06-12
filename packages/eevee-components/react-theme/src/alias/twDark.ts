import type { ColorTokens } from '../types';

export const generateColorTokens = (): ColorTokens => ({
  background1: '#000000', // body
  background2: 'rgb(22, 24, 28)', // right main
  background3: 'rgb(239, 243, 244)', // explore button
  background4: 'rgba(0,0,0,0)', // link icon
  backgroundTransparent: 'transparent',
  backgroundDisabled: '#141414',

  hover1: 'rgba(231, 233, 234, 0.1)', // left linkicon
  hover2: 'rgba(255,255,255,0.03)', // right explpre
  hover3: 'rgba(29,155,240,0.1)',
  hover4: 'rgb(26,140,216)',
  hover5: 'rgba(239, 243, 244,0.1)',

  border1: 'rgb(47, 51, 54)',
  borderTransparent: 'transparent',
  borderDisable: '#424242',

  foreground1: 'rgb(231, 233, 234)', // twitter article title1
  foreground2: 'rgb(113, 118, 123)', // twitter article title2
  foreground3: 'rgb(29, 155, 240)', // button react
  foreground4: 'rgb(0,186,124)', // button react
  foreground5: 'rgb(249,24,128)', // button react
  foreground6: 'rgb(15, 20, 25)', // explore
  foreground7: 'hsl(230, 100%, 67%)',
  foregroundDisabled: '#5c5c5c',
  // shadow
  colorShadowAmbient: 'rgba(0,0,0,0.24)',
  colorShadowKey: 'rgba(0,0,0,0.28)',
  colorBrandShadowAmbient: 'rgba(0,0,0,0.30)',
  colorBrandShadowKey: 'rgba(0,0,0,0.25)',
});
// %I:%M

/**

> ButtonIcon:
div -> change color svg
  div -> inline-flex
    div -> circle hover using box-shadow
    svg

> LinkIcon:
a -> change color hover
  div -> color svg
    svg
    span -> text


    */
