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

  [`root-v2`]: {
    paddingRight: '1em',
    [`:hover .${contentHeadingClassname.anchor}`]: {
      opacity: 0.75,
    },
  },

  icon: {
    pointerEvents: 'auto',
  },

  showIcon: {
    opacity: 1,
  },

  hideIcon: {
    opacity: 0,
  },
});

const useAnchorStyles = makeStyles({
  root: {
    display: 'none',
    pointerEvents: 'none',

    '&:focus': {
      ...shorthands.outline('none'),

      [`& .${contentHeadingClassname.icon}`]: {
        ...shorthands.outline('2px', 'auto', tokens.f3),
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

  [`root-v2`]: {
    pointerEvents: 'none',
    color: 'inherit',
    display: 'inline-block',
    transform: 'translateY(-50%)',
    transitionProperty: 'opacity',
    transitionDuration: '250ms',
    transitionTimingFunction: 'ease',
    transitionDelay: '0s',
    opacity: 0,
    marginLeft: '8px',
    scrollMarginTop: '75px',

    '&:focus': {
      opacity: 0.75,

      [`& .${contentHeadingClassname.icon}`]: {
        ...shorthands.outline('2px', 'auto', tokens.f3),
      },
    },
  },
});

export const useContentHeadingStyles = (state: ContentHeadingState): ContentHeadingState => {
  const rootStyles = useRootStyles();
  const anchorStyles = useAnchorStyles();

  // version 1
  // state.root.className = mergeClasses(contentHeadingClassname.root, rootStyles.root, state.root.className);
  // state.anchor.className = mergeClasses(contentHeadingClassname.anchor, anchorStyles.root, state.anchor.className);

  // version 2
  state.root.className = mergeClasses(contentHeadingClassname.root, rootStyles['root-v2'], state.root.className);
  state.anchor.className = mergeClasses(
    contentHeadingClassname.anchor,
    'mdx-header-anchor',
    anchorStyles['root-v2'],
    state.anchor.className,
  );

  state.iconClasses = mergeClasses(
    contentHeadingClassname.icon,
    rootStyles.icon,
    state.showIcon ? rootStyles.showIcon : rootStyles.hideIcon,
  );

  return state;
};
