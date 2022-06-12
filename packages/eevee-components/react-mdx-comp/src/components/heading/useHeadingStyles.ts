import { HeadingState } from './Heading.types';
import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const headingClassname = {
  root: 'eve-Heading',
};

const useRootStyles = makeStyles({
  'section-title': {
    fontSize: 'calc(16 / 16 * 1rem)',
    color: tokens.foreground5,
    fontWeight: tokens.fontWeightMedium,
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },

  'small-title': {
    fontSize: 'calc(22 / 16 * 1rem)',
    color: tokens.foreground10,
  },

  'medium-title': {
    fontSize: 'calc(28 / 16 * 1rem)',
    color: tokens.foreground10,
    lineHeight: '1.2',
  },

  'large-title': {
    fontSize: 'calc(38 / 16 * 1rem)',
    color: tokens.foreground10,
  },

  'major-heading': {
    fontSize: 'calc(32 / 16 * 1rem)',
    color: tokens.foreground8,
    marginTop: '46px',
    marginBottom: '32px',
  },

  'normal-heading': {
    fontSize: 'calc(25 / 16 * 1rem)',
    color: tokens.foreground9,
    marginTop: '34px',
    marginBottom: '12px',
  },

  'minor-heading': {
    fontSize: 'calc(20 / 16 * 1rem)',
    color: tokens.foreground9,
    marginTop: '24px',
    marginBottom: '12px',
  },
});

export const useHeadingStyles = (state: HeadingState): HeadingState => {
  const rootStyles = useRootStyles();

  const { type } = state;

  state.root.className = mergeClasses(headingClassname.root, rootStyles[type!], state.root.className);

  return state;
};
