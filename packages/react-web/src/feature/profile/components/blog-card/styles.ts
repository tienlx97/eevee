import { makeStyles, shorthands } from '@griffel/react';
import { tokens, breakPoints } from '@eevee/react-theme';

export const useBlogCardStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    '& a': {
      color: 'inherit',
      textDecorationLine: 'none',
    },
  },

  divider: {
    ...shorthands.margin(0),
    ...shorthands.border(0),
    height: '1px',
    backgroundColor: tokens.b2,
  },

  publishDate: {
    fontSize: '14px',
    lineHeight: '20px',
  },

  'pt-24': {
    paddingTop: '24px',
  },
});

export const useBlogCardDetailStyles = makeStyles({
  root: {
    marginTop: '12px',
    display: 'flex',
  },

  //
  leftWarpper: {
    ...shorthands.flex(1, 1, 'auto'),
    wordBreak: 'break-word',
  },

  title: {
    color: tokens.f10,
    fontWeight: 700,
    ...shorthands.overflow('hidden'),
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',

    [`@media ${breakPoints.lgAndLarger}`]: {
      WebkitLineClamp: 3,
      maxHeight: '84px',
      lineHeight: '28px',
      fontSize: '24px',
      letterSpacing: 0,
      paddingBottom: '8px',
    },

    [`@media ${breakPoints.lg}`]: {
      WebkitLineClamp: 3,
      maxHeight: '84px',
      lineHeight: '28px',
      fontSize: '24px',
      letterSpacing: 0,
      paddingBottom: '8px',
    },

    [`@media (orientation: landscape) and (max-width: 903.98px)`]: {
      maxHeight: 'none',
    },

    [`@media ${breakPoints.md}`]: {
      WebkitLineClamp: 3,
      maxHeight: '84px',
      lineHeight: '28px',
      fontSize: '24px',
      letterSpacing: 0,
      paddingBottom: '8px',
    },

    [`@media ${breakPoints.sm}`]: {
      WebkitLineClamp: 2,
      maxHeight: '40px',
      lineHeight: '20px',
      fontSize: '16px',
      letterSpacing: 0,
      paddingBottom: 0,
    },

    [`@media ${breakPoints.xs}`]: {
      WebkitLineClamp: 2,
      maxHeight: '40px',
      lineHeight: '20px',
      fontSize: '16px',
      letterSpacing: 0,
      paddingBottom: 0,
    },
  },

  // subtitle

  subtitleWrapper: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.lg}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.md}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.sm}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.xs}`]: {
      display: 'none',
    },
  },

  subtitleText: {
    fontSize: '16px',
    lineHeight: '24px',
    ...shorthands.overflow('hidden'),
    textOverflow: 'ellipsis',
    maxHeight: '72px',
    WebkitLineClamp: 3,
    letterSpacing: 0,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',

    [`@media (orientation: landscape) and (max-width: 903.98px)`]: {
      maxHeight: 'none',
    },
  },

  // Read time - tag - save - action
  optionWrapper: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      ...shorthands.padding('32px', 0),
    },

    [`@media ${breakPoints.lg}`]: {
      ...shorthands.padding('32px', 0),
    },

    [`@media ${breakPoints.md}`]: {
      ...shorthands.padding('32px', 0),
    },

    [`@media ${breakPoints.sm}`]: {
      ...shorthands.padding('16px', 0),
    },

    [`@media ${breakPoints.xs}`]: {
      ...shorthands.padding('16px', 0),
    },
  },

  optionStyle1: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  tagReadTimeWrapper: {
    display: 'flex',
    ...shorthands.flex(1, 1, 'auto'),
    alignItems: 'center',
  },

  tadReadTimeWrapper1: {
    paddingRight: '8px',
  },

  readTime: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  // saved - action

  saveActionWrapper: {
    display: 'flex',
  },

  saved: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      marginLeft: '16px',
    },

    [`@media ${breakPoints.lg}`]: {
      marginLeft: '16px',
    },

    [`@media ${breakPoints.md}`]: {
      marginLeft: '16px',
    },

    [`@media ${breakPoints.sm}`]: {
      marginLeft: '0px',
    },

    [`@media ${breakPoints.xs}`]: {
      marginLeft: '0px',
    },
  },

  // right

  rightWrapper: {
    '& img': {
      maxWidth: 'fit-content',
    },

    [`@media ${breakPoints.lgAndLarger}`]: {
      marginLeft: '60px',
    },

    [`@media ${breakPoints.lg}`]: {
      marginLeft: '60px',
    },

    [`@media ${breakPoints.md}`]: {
      marginLeft: '60px',
    },

    [`@media ${breakPoints.sm}`]: {
      marginLeft: '24px',
    },

    [`@media ${breakPoints.xs}`]: {
      marginLeft: '24px',
    },
  },

  mediaQueryImageWeb: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.lg}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.md}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.sm}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.xs}`]: {
      display: 'none',
    },
  },

  mediaQueryImageMobile: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.lg}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.md}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.sm}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.xs}`]: {
      display: 'block',
    },
  },
});
