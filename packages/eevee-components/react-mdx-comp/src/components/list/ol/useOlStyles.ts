import { OlState } from './Ol.types';
import { makeStyles, mergeClasses } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';

// import "index.css"

export const olClassname = {
  root: 'eve-Ol',
};

const useRootStyles = makeStyles({
  root: {
    '--counter-name': 'counts',

    fontSize: '19px',
    marginBottom: '32px',
    counterReset: 'counts',
    listStyleType: 'none',

    '& li': {
      counterIncrement: 'counts',
      alignItems: 'baseline',

      '::before': {
        content: "counters(var(--counter-name), '.') '. '",
        fontFeatureSettings: 'tnum',
        color: tokens.f3,
        fontWeight: tokens.fontWeightMedium,
        paddingRight: '12px',
      },
    },

    // '& li::before': {
    //   content: "counters(var(--counter-name), '.') '. '",
    //   fontFeatureSettings: "'tnum'",
    //   color: tokens.f3,
    //   fontWeight: tokens.fontWeightMedium,
    //   paddingRight: '12px',
    // },

    [`@media ${breakPoints.xsAndSmaller}`]: {
      fontSize: 'calc(18 / 16 * 1rem)',
      marginBottom: '1.5rem',
    },
  },

  originalOl: {
    paddingLeft: '22px',
    marginBottom: '32px',
    fontSize: 'calc(19 / 16 * 1rem)',

    '& li': {
      marginBottom: '16px',
    },
  },
});

export const useOlStyles = (state: OlState): OlState => {
  const { olType } = state;
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    olClassname.root,
    olType === 'ordered' && rootStyles.root,
    olType === 'original' && rootStyles.originalOl,
    state.root.className,
  );

  return state;
};
