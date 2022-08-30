import { makeStyles, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';

export const useStyles = makeStyles({
  root: {
    color: tokens.f1,
    fontSize: '18px',
    letterSpacing: '0',
    position: 'relative',

    ...shorthands.borderBottom('1px', 'solid', tokens.b2),
  },

  clearfix: {
    paddingBottom: '6px',
    // '&::after': {
    //   display: 'table',
    //   content: ' ',
    //   clear: 'both',
    // },

    // '&::before': {
    //   display: 'table',
    //   content: ' ',
    // },
  },

  'heading-content': {
    paddingTop: 0,
    paddingBottom: '8px',
  },
});
