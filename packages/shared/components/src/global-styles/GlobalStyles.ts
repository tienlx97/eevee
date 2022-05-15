import { makeStaticStyles } from '@griffel/react';
/* Global styles */
export const useGlobalCss = makeStaticStyles({
  body: {
    color: 'var(--color-text)',
    background: 'var(--color-background)',
    transition: 'var(--color-text) 350ms, var(--color-background) 350ms',
  },

  'a:focus': {
    outline: '5px auto var(--color-primary)',
  },

  'body, input, button, select, option': {
    fontFamily: 'var(--font-family)',
    fontWeight: 'var(--font-weight-light)',
  },

  'h1, h2, h3, h4, h5, h6, strong': {
    fontWeight: 'var(--font-weight-bold)',
  },

  code: {
    fontSize: '0.95em',
  },

  /* Scrollbar and selection styles */

  '::selection': {
    backgroundColor: 'var(--selection-background, var(--color-primary))',
    color: 'var(--selection-text, white)',
    backgroundImage: 'none !important',
    WebkitTextFillColor: 'var(--selection-text) !important',
    MozTextFillColor: 'var(--selection-text) !important',
    backgroundClip: 'revert !important',
    WebkitBackgroundClip: 'revert !important',
    textShadow: 'none !important',
  },

  '@media (orientation: landscape)': {
    webkit_scrollbar: {
      width: '12px',
      backgroundColor: 'var(--color-gray-100)',
    },
    webkit_scrollbar_track: {
      borderRadius: '3px',
      backgroundColor: 'transparent',
    },
    webkit_scrollbar_thumb: {
      borderRadius: '5px',
      backgroundColor: 'var(--color-gray-700)',
      border: '2px solid var(--color-gray-100)',
    },
  },

  /* CSS Variables */
  // ':root': {
  //   '-fontWeightBold': '600',
  //   '-fontWeightMedium': '500',
  //   '-fontWeightLight': '400',
  //   '-fontFamily': "'Wotfard', Futura, -apple-system, sans-serif",
  //   '-fontFamilyMono': "'League Mono', 'Fira Mono', monospace",
  //   '-fontFamilySpicy':
  //     "'Sriracha', 'Wotfard', Futura, -apple-system, sans-serif",
  //   '-reachDialog': '1',
  // },

  // '.video-js .vjs-big-play-button ': {
  //   top: '0 !important',
  //   left: '0 !important',
  //   right: '0 !important',
  //   bottom: '0 !important',
  //   margin: 'auto !important',
  //   border: '1px solid rgba(255, 255, 255, 0.25) !important',
  //   backgroundColor: 'rgba(0, 0, 0, 0.4) !important',
  // },

  // '.video-js .vjs-play-progress:before': {
  //   top: '-0.6em !important',
  // },

  // '.vjs-slider-horizontal .vjs-volume-level:before': {
  //   top: '-0.6em !important',
  // },
});
