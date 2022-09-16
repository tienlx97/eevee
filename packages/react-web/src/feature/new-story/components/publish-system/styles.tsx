import { breakPoints, tokens } from '@eevee/react-theme';
import { makeStyles, shorthands } from '@griffel/react';
import { PUBLISH_WIDTH } from '@constants/index';

export const useRootStyles = makeStyles({
  //
});

export const useBlurStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    height: '100%',
    cursor: 'pointer',
    opacity: 0,
    top: '0px',
    left: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    zIndex: 510,
    //
    transitionProperty: 'opacity',
    transitionDuration: '0.6s',
    transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
    transitionDelay: '0s',
  },

  notShow: {
    pointerEvents: 'none',
    opacity: 0,
  },

  show: {
    pointerEvents: 'all',
    opacity: 1,
  },
});

export const useContentwrapper = makeStyles({
  root: {
    height: '100%',
    position: 'fixed',
    boxSizing: 'border-box',
    top: '0px',

    ...shorthands.padding('0px', tokens.spacingHorizontalXXL, tokens.spacingVerticalXXL, tokens.spacingHorizontalXXL),
    zIndex: 520,
    backgroundColor: tokens.bg1,
    left: '100%',
    ...shorthands.overflow('auto'),

    boxShadow: `${tokens.b2} 0px 4px 12px`,
    //
    transitionProperty: 'transform, opacity',
    transitionDuration: '0.6s, 0.6s',
    transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1), cubic-bezier(0.23, 1, 0.32, 1)',
    transitionDelay: '0s, 0s',
  },

  queryNotShow: {
    visibility: 'hidden',
    [`@media ${breakPoints.lgAndLarger}`]: {
      width: `${PUBLISH_WIDTH}`,
      transform: 'translateX(0px)',
    },

    [`@media ${breakPoints.lg}`]: {
      width: `${PUBLISH_WIDTH}`,
      transform: 'translateX(0px)',
    },

    [`@media ${breakPoints.md}`]: {
      width: `${PUBLISH_WIDTH}`,
      transform: 'translateX(0px)',
    },

    [`@media ${breakPoints.sm}`]: {
      width: '100%',
      left: '0px',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      transform: 'translateY(100%)',
    },

    [`@media ${breakPoints.xs}`]: {
      width: '100%',
      left: '0px',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      transform: 'translateY(100%)',
    },
  },

  queryShow: {
    visibility: 'visible',

    [`@media ${breakPoints.lgAndLarger}`]: {
      transform: `translateX(-${PUBLISH_WIDTH})`,
    },

    [`@media ${breakPoints.lg}`]: {
      transform: `translateX(-${PUBLISH_WIDTH})`,
    },

    [`@media ${breakPoints.md}`]: {
      transform: `translateX(-${PUBLISH_WIDTH})`,
    },

    [`@media ${breakPoints.sm}`]: {
      boxShadow: `${tokens.b2} 5px 0px 12px`,
      transform: 'translateY(30px)',
    },

    [`@media ${breakPoints.xs}`]: {
      boxShadow: `${tokens.b2} 5px 0px 12px`,
      transform: 'translateY(30px)',
    },
  },
});

export const useHeaderStyles = makeStyles({
  root: {
    ...shorthands.padding(tokens.spacingVerticalXXL, '0px'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontWeight: tokens.fontWeightMedium,
    fontSize: tokens.fontSizeBase500,
    lineHeight: tokens.fontSizeBase600,
    letterSpacing: 0,
  },
});
