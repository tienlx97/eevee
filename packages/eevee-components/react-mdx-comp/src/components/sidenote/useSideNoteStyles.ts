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

  info: {
    backgroundColor: tokens.backgroundInfo, // 'var(--color-muted)',
    ...shorthands.borderColor(tokens.borderInfo),
  },

  success: {
    backgroundColor: tokens.backgroundSuccess, // 'var(--color-success-background)',
    ...shorthands.borderColor(tokens.borderSuccess),
  },

  warning: {
    backgroundColor: tokens.backgroundWarning, //'var(--color-alert-background)',
    ...shorthands.borderColor(tokens.borderWarning),
  },
});

const useIconWrapStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translate(calc(-50% - 1.5px), -50%)',
    ...shorthands.padding('8px'),
    backgroundColor: tokens.background1,
    ...shorthands.borderRadius('50%'),
    '@media (max-width: 768px)': {
      display: 'none',
    },

    '& svg': {
      display: 'block',
    },
  },

  info: {
    color: tokens.borderInfo,
  },

  success: {
    color: tokens.borderSuccess,
  },

  warning: {
    color: tokens.borderWarning,
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

  info: {
    '@media (hover: hover)': {
      [`& .${textLinkClassname.root}`]: {
        color: tokens.foreground1,
        boxShadow: `0px 1px 0px ${tokens.foreground3}`,
        fontWeight: tokens.fontWeightMedium,
      },

      [`& .${textLinkClassname.root}:hover`]: {
        boxShadow: `0px 2px 0px ${tokens.foreground3}`,
      },
    },
  },

  warning: {
    '@media (hover: hover)': {
      [`& .${textLinkClassname.root}`]: {
        color: tokens.foreground1,
        boxShadow: `0px 1px 0px ${tokens.borderWarning}`,
      },

      [`& .${textLinkClassname.root}:hover`]: {
        boxShadow: `0px 2px 0px ${tokens.borderWarning}`,
      },
    },
  },

  success: {
    '@media (hover: hover)': {
      [`& .${textLinkClassname.root}`]: {
        color: tokens.foreground1,
        boxShadow: `0px 1px 0px ${tokens.borderSuccess}`,
      },

      [`& .${textLinkClassname.root}:hover`]: {
        boxShadow: `0px 2px 0px ${tokens.borderSuccess}`,
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
    color: tokens.foreground1,
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
