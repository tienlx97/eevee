import { HeadingState } from './Heading.types';
import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const headingClassname = {
  root: 'eve-Heading',
};

const useRootStylesV1 = makeStyles({
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
    color: tokens.f10, // gray-1000
    lineHeight: '1.2',
  },

  'large-title': {
    // h1 38
    fontSize: 'calc(38 / 16 * 1rem)',
    color: tokens.f10, // gray-1000
  },

  'major-heading': {
    // h1 32
    fontSize: 'calc(32 / 16 * 1rem)',
    color: tokens.f8, // rgb(249,24,128)
    marginTop: '50px',
    marginBottom: '25px',
  },

  'normal-heading': {
    // h2 25
    fontSize: 'calc(25 / 16 * 1rem)',
    color: tokens.f5, // hsl(53, 100%, 50%)
    marginTop: '30px',
    marginBottom: '15px',
    fontWeight: 'bolder',
  },

  'minor-heading': {
    // h3 20
    fontSize: 'calc(20 / 16 * 1rem)',
    color: tokens.f9, // hsl(210, 25%, 88%)
    marginTop: '24px',
    marginBottom: '12px',
  },
});

export const useHeadingStyles = (state: HeadingState): HeadingState => {
  const rootStylesV1 = useRootStylesV1();

  const { type } = state;

  state.root.className = mergeClasses(headingClassname.root, rootStylesV1[type!], state.root.className);

  return state;
};
