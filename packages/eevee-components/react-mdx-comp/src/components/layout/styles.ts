import { makeStyles } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';

export const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.bg2,
    // width: '100%',

    [`@media ${breakPoints.lgAndLarger}`]: {
      width: '70%',
    },

    [`@media ${breakPoints.lg}`]: {
      width: '70%',
    },

    [`@media ${breakPoints.md}`]: {
      width: '60%',
    },

    [`@media ${breakPoints.sm}`]: {
      width: '100%',
    },

    [`@media ${breakPoints.xs}`]: {
      width: '100%',
    },

    '& iframe': {
      display: 'block',
      transitionProperty: 'opacity',
      transitionDuration: '0.125s',
      transitionTimingFunction: 'ease',
      transitionDelay: '0s',
      backgroundColor: 'transparent',
    },
  },
});
