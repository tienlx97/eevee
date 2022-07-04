import { HeadingState } from './Heading.types';
import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const headingClassname = {
  root: 'eve-Heading',
};

/*
H0: 40 pt (45–38pt)
H1: 32 pt (30–34pt)
H2: 26 pt (24–28pt)
H3: 22 pt (20–24pt)
H4: 20 pt (18–22pt)
P1*: 13pt (Minimum size)
P2*: 11pt (Minimum size)
*/
// const useRootStyles = makeStyles({
//   'section-title': {
//     // h1 32
//     fontSize: 'calc(32 / 16 * 1rem)',
//     color: tokens.f8, // hsl(53, 100%, 50%)
//     fontWeight: tokens.fontWeightMedium,
//     // textTransform: 'uppercase',
//     letterSpacing: '2px',
//     //
//     marginTop: '46px',
//     marginBottom: '32px',
//   },

//   'small-title': {
//     // h1 22
//     fontSize: 'calc(22 / 16 * 1rem)',
//     color: tokens.f10, // hsl(210, 25%, 96%)
//   },

//   'medium-title': {
//     // h1 28
//     fontSize: 'calc(28 / 16 * 1rem)',
//     color: tokens.f10, // hsl(210, 25%, 96%)
//     lineHeight: '1.2',
//   },

//   'large-title': {
//     // h1 38
//     fontSize: 'calc(38 / 16 * 1rem)',
//     color: tokens.f10, // hsl(210, 25%, 96%)
//   },

//   'major-heading': {
//     // h2 28
//     fontSize: 'calc(28 / 16 * 1rem)',
//     color: tokens.f5, // rgb(249,24,128)
//     marginTop: '40px',
//     marginBottom: '28px',
//   },

//   'normal-heading': {
//     // h3 24
//     fontSize: 'calc(24 / 16 * 1rem)',
//     color: tokens.f9, // hsl(210, 25%, 88%)
//     marginTop: '34px',
//     marginBottom: '12px',
//   },

//   'minor-heading': {
//     // h4 20
//     fontSize: 'calc(20 / 16 * 1rem)',
//     color: tokens.f9, // hsl(210, 25%, 88%)
//     marginTop: '24px',
//     marginBottom: '12px',
//   },
// });

const useRootStylesV2 = makeStyles({
  'section-title': {
    // h1 16
    fontSize: 'calc(16 / 16 * 1rem)',
    color: tokens.f5, // rgb(249,24,128)
    fontWeight: tokens.fontWeightMedium,
    // textTransform: 'uppercase',
    letterSpacing: '2px',
  },

  'small-title': {
    // h1 22
    fontSize: 'calc(22 / 16 * 1rem)',
    color: tokens.f10, // gray-1000
  },

  'medium-title': {
    // h1 28
    fontSize: 'calc(28 / 16 * 1rem)',
    color: tokens.f10,// gray-1000
    lineHeight: '1.2',
  },

  'large-title': {
    // h1 38
    fontSize: 'calc(38 / 16 * 1rem)',
    color: tokens.f10, // gray-1000
  },

  'major-heading': {
    // h2 32
    fontSize: 'calc(32 / 16 * 1rem)',
    color: tokens.f8,// hsl(53, 100%, 50%)
    marginTop: '96px',
    marginBottom: '32px',
  },

  'normal-heading': {
    // h3 25
    fontSize: 'calc(25 / 16 * 1rem)',
    color: tokens.f9, // hsl(210, 25%, 88%)
    marginTop: '64px',
    marginBottom: '15px',
    fontWeight: "bolder"
  },

  'minor-heading': {
    // h4 20
    fontSize: 'calc(20 / 16 * 1rem)',
    color: tokens.f9, // hsl(210, 25%, 88%)
    marginTop: '24px',
    marginBottom: '12px',
  },
});

export const useHeadingStyles = (state: HeadingState): HeadingState => {
  // const rootStyles = useRootStyles();
  const rootStylesV2 = useRootStylesV2()

  const { type } = state;

  // state.root.className = mergeClasses(headingClassname.root, rootStyles[type!], state.root.className);
  state.root.className = mergeClasses(headingClassname.root, rootStylesV2[type!], state.root.className);

  return state;
};
