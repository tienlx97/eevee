import { ContentHeadingState } from './ContentHeading.types';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const contentHeadingClassname = {
  root: 'eve-ContentHeading',
  anchor: 'eve-ContentHeading__anchor',
  icon: 'eve-ContentHeading__anchor--link-icon',
};

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    [`@media (min-width: 769px)`]: {
      [`:hover .${contentHeadingClassname.anchor}`]: {
        opacity: 0.75,
      },
    },
  },

  icon: {
    pointerEvents: 'auto',
  },
});

const useAnchorStyles = makeStyles({
  root: {
    display: 'none',
    pointerEvents: 'none',

    '&:focus': {
      ...shorthands.outline('none'),

      [`& .${contentHeadingClassname.icon}`]: {
        ...shorthands.outline('2px', 'auto', tokens.foreground3),
      },
    },

    [`@media (min-width: 769px)`]: {
      color: 'inherit',
      display: 'block',
      position: 'absolute',
      left: 0,
      transform: 'translateX(-150%)',
      // transition: 'opacity 250ms',
      transitionProperty: 'opacity',
      transitionDuration: '250ms',
      transitionTimingFunction: 'ease',
      transitionDelay: '0s',
      opacity: 0,
      scrollMarginTop: '128px',

      '&:focus': {
        opacity: 0.75,
      },
    },
  },
});

export const useContentHeadingStyles = (state: ContentHeadingState): ContentHeadingState => {
  const rootStyles = useRootStyles();
  const anchorStyles = useAnchorStyles();

  state.root.className = mergeClasses(contentHeadingClassname.root, rootStyles.root, state.root.className);

  state.anchor.className = mergeClasses(contentHeadingClassname.anchor, anchorStyles.root, state.anchor.className);

  state.iconClasses = mergeClasses(contentHeadingClassname.icon, rootStyles.icon);

  return state;
};
