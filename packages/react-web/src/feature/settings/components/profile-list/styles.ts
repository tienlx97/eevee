import { makeStyles } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const useStyles = makeStyles({
  error: {
    fontSize: '14px',
    color: tokens.f5,
  },
  success: {
    fontSize: '14px',
    color: tokens.f4,
  },
});
