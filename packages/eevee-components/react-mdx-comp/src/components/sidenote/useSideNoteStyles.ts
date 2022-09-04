import { SideNoteState } from './SideNote.types';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

import { inlineCodeClassname } from '../inlinecode/index';
import { textLinkClassname } from '@eevee/react-link';
import { listItemClassname } from '../listitem/index';
import { paragraphClassname } from '../paragraph/index';

export const sideNoteClassname = {
  root: 'eve-SideNote',
  content: 'eve-SideNote__content',
  showMore: 'eve-SideNote__showMore',
  icon: 'eve-SideNote__icon',
};

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    ...shorthands.padding('24px', '32px', '24px', '32px'),
    fontSize: '17px',
    marginTop: '48px',
    marginBottom: '64px',
    ...shorthands.borderLeft('3px', 'solid'),
    ...shorthands.borderRadius('6px', '6px', '6px', '3px'),
    transitionProperty: 'background',
    transitionDuration: '350ms',

    // [`@media ${breakPoints.lgAndLarger}`]: {
    //   marginLeft: '-32px',
    //   marginRight: '-32px',
    // },

    '& > *:last-child': {
      marginBottom: '0 !important',
    },
  },

  Note: {
    backgroundColor: tokens.bgNote,
    ...shorthands.borderColor(tokens.bNote),
  },

  Tip: {
    backgroundColor: tokens.bgTip,
    ...shorthands.borderColor(tokens.bTip),
  },

  Important: {
    backgroundColor: tokens.bgImportant,
    ...shorthands.borderColor(tokens.bImportant),
  },

  Caution: {
    backgroundColor: tokens.bgCaution,
    ...shorthands.borderColor(tokens.bCaution),
  },

  Warning: {
    backgroundColor: tokens.bgWarning,
    ...shorthands.borderColor(tokens.bWarning),
  },
});

const useIconWrapStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translate(calc(-50% - 1.5px), -50%)',
    ...shorthands.padding('8px'),
    backgroundColor: tokens.bg1,
    ...shorthands.borderRadius('50%'),
    '@media (max-width: 768px)': {
      display: 'none',
    },

    '& svg': {
      display: 'block',
    },
  },

  Note: {
    color: tokens.bNote,
  },

  Tip: {
    color: tokens.bTip,
  },

  Important: {
    color: tokens.bImportant,
  },

  Caution: {
    color: tokens.bCaution,
  },

  Warning: {
    color: tokens.bWarning,
    ...shorthands.borderRadius('25%', '25%'),
    left: '-1.5px',
  },
});

const useContentStyles = makeStyles({
  root: {
    /* TODO: Figure out why 'max-width: 100%' doesn't work */
    maxWidth: 'calc(100vw - 98px)',

    [`& .${inlineCodeClassname.root}`]: {
      ...shorthands.padding('1px', '6px'),
    },

    [`& .${listItemClassname.root}`]: {
      fontSize: 'calc(17 / 16 * 1rem)',
      marginBottom: '8px',
    },

    [`& .${paragraphClassname.root}`]: {
      fontSize: 'calc(17 / 16 * 1rem)',
      marginBottom: '1rem',
    },

    [`& .${paragraphClassname.root}:last-child`]: {
      marginBottom: 0,
    },
  },

  Note: {
    '@media (hover: hover)': {
      [`& .${textLinkClassname.root}`]: {
        color: tokens.f1,
        boxShadow: `0px 1px 0px ${tokens.bNote}`,
        fontWeight: tokens.fontWeightMedium,
      },

      [`& .${textLinkClassname.root}:hover`]: {
        boxShadow: `0px 2px 0px ${tokens.bNote}`,
      },
    },
  },

  Tip: {
    '@media (hover: hover)': {
      [`& .${textLinkClassname.root}`]: {
        color: tokens.f1,
        boxShadow: `0px 1px 0px ${tokens.bTip}`,
        fontWeight: tokens.fontWeightMedium,
      },

      [`& .${textLinkClassname.root}:hover`]: {
        boxShadow: `0px 2px 0px ${tokens.bTip}`,
      },
    },
  },

  Warning: {
    '@media (hover: hover)': {
      [`& .${textLinkClassname.root}`]: {
        color: tokens.f1,
        boxShadow: `0px 1px 0px ${tokens.bWarning}`,
        fontWeight: tokens.fontWeightMedium,
      },

      [`& .${textLinkClassname.root}:hover`]: {
        boxShadow: `0px 2px 0px ${tokens.bWarning}`,
      },
    },
  },

  Caution: {
    '@media (hover: hover)': {
      [`& .${textLinkClassname.root}`]: {
        color: tokens.f1,
        boxShadow: `0px 1px 0px ${tokens.bCaution}`,
        fontWeight: tokens.fontWeightMedium,
      },

      [`& .${textLinkClassname.root}:hover`]: {
        boxShadow: `0px 2px 0px ${tokens.bCaution}`,
      },
    },
  },

  Important: {
    '@media (hover: hover)': {
      [`& .${textLinkClassname.root}`]: {
        color: tokens.f1,
        boxShadow: `0px 1px 0px ${tokens.bImportant}`,
        fontWeight: tokens.fontWeightMedium,
      },

      [`& .${textLinkClassname.root}:hover`]: {
        boxShadow: `0px 2px 0px ${tokens.bImportant}`,
      },
    },
  },
});

const useTitleStyles = makeStyles({
  root: {
    display: 'block',
    fontSize: '17px',
    marginBottom: '8px',
    fontWeight: tokens.fontWeightSemibold,
  },
});

const useExpandedStyles = makeStyles({
  root: {
    willChange: 'transform',
    animationName: {
      from: {
        opacity: 0,
        transform: 'translateY(-20px)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(0px)',
      },
    },

    animationDuration: '350ms',
    animationTimingFunction: 'cubic-bezier(0, 0.66, 0.46, 0.98)',
    animationDelay: '0s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'none',
    animationPlayState: 'running',

    '& > *:last-child': {
      marginBottom: '0 !important',
    },
  },
});

const useShowMoreStyles = makeStyles({
  showMore: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('4px'),
    paddingLeft: '0px',
    color: tokens.f1,
    fontWeight: tokens.fontWeightSemibold,
  },

  showMoreChevron: {
    display: 'block',
    height: '20px',
  },
});

export const useSideNoteStyles = (state: SideNoteState): SideNoteState => {
  const { type } = state;
  const rootStyles = useRootStyles();
  const iconWrapStyles = useIconWrapStyles();
  const contentStyles = useContentStyles();
  const titleStyles = useTitleStyles();
  const expandStyles = useExpandedStyles();
  const showMoreStyles = useShowMoreStyles();

  state.root.className = mergeClasses(
    //
    sideNoteClassname.root,
    rootStyles.root,
    rootStyles[type!],
  );

  state.iconWrapClasses = mergeClasses(iconWrapStyles.root, iconWrapStyles[type!]);

  state.content.className = mergeClasses(
    //
    sideNoteClassname.content,
    contentStyles.root,
    contentStyles[type!],
  );

  state.titleClasses = titleStyles.root;

  state.expandedClasses = expandStyles.root;

  state.showMore.className = mergeClasses(
    //
    sideNoteClassname.showMore,
    showMoreStyles.showMore,
  );

  state.showMore.appearance = 'transparent';

  return state;
};
