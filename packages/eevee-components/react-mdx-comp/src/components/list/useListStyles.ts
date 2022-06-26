import { ListState, ListSlots } from './List.types';
import { makeStyles, mergeClasses } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';
import type { SlotClassNames } from '@eevee/react-utilities';
import './index.css';

export const listClassname: SlotClassNames<ListSlots> = {
  root: 'eve-List',
  ordered: 'eve-List__ordered',
  original: 'eve-List__original',
  unordered: 'eve-List__unordered',
};

const useRootStyles = makeStyles({
  root: {
    // [`ul .${listClassname.unordered}`]: {
    //   marginTop: '16px'
    // }
  },
});

const useOrderedStyles = makeStyles({
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
        color: tokens.f7,
        fontWeight: tokens.fontWeightMedium,
        paddingRight: '12px',
      },
    },

    // '& li::before': {
    //   content: "counters(var(--counter-name), '.') '. '",
    //   fontFeatureSettings: "'tnum'",
    //   color: tokens.f7,
    //   fontWeight: tokens.fontWeightMedium,
    //   paddingRight: '12px',
    // },

    [`@media ${breakPoints.xsAndSmaller}`]: {
      fontSize: 'calc(18 / 16 * 1rem)',
      marginBottom: '1.5rem',
    },
  },
});

const useOriginalStyles = makeStyles({
  root: {
    paddingLeft: '22px',
    marginBottom: '32px',
    fontSize: 'calc(19 / 16 * 1rem)',

    '& li': {
      marginBottom: '16px',
    },
  },
});

const useUnOrderedStyles = makeStyles({
  root: {
    fontSize: 'calc(19/16*1rem)',
    marginBottom: '32px',
    listStyleType: 'none',

    [`@media ${breakPoints.xsAndSmaller}`]: {
      fontSize: 'calc(18 / 16 * 1rem)',
      marginBottom: '1.5rem',
    },
  },
});

export const useListStyles = (state: ListState): ListState => {
  const { type } = state;
  const rootStyles = useRootStyles();
  const orderedStyles = useOrderedStyles();
  const originalStyles = useOriginalStyles();
  const unOrderedStyles = useUnOrderedStyles();

  state.root.className = mergeClasses(listClassname.root, rootStyles.root);

  if (type === 'ordered') {
    state.ordered.className = mergeClasses(listClassname.ordered, orderedStyles.root, state.ordered.className);
  }

  if (type === 'unordered') {
    state.unordered.className = mergeClasses(listClassname.unordered, unOrderedStyles.root, state.unordered.className);
  }

  if (type === 'original') {
    state.original.className = mergeClasses(listClassname.original, originalStyles.root, state.original.className);
  }

  return state;
};
