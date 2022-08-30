import { makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const useStyles = makeStyles({
  circleAvatar: {
    ...shorthands.borderRadius('50%'),
  },

  menuItemFirst: {
    marginBottom: '8px',
    marginTop: '8px',
  },

  menuItem: {
    marginBottom: '8px',
  },

  divider: {
    marginBottom: '8px',
    height: '1px',
    ...shorthands.border(0),
    backgroundColor: tokens.b2,
  },
});
