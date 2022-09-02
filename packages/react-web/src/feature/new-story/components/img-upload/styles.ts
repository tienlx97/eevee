import { makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const useStyles = makeStyles({
  section: {
    // ...shorthands.padding('2rem', 0)
  },

  label: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    display: 'none',
  },

  images: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    ...shorthands.margin('1rem', '0.5rem'),
    position: 'relative',
    boxShadow: `${tokens.shadow16} 0px 1px 2px 0px`,

    '& svg': {
      fill: tokens.bImportant,
      color: tokens.bImportant,
    },
  },

  delete: {
    position: 'absolute',
    bottom: '-16px',
    right: '0',
  },

  copy: {
    position: 'absolute',
    bottom: '-16px',
    left: '0',
  },
});
