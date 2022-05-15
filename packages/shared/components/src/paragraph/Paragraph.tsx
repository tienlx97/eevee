import { makeStyles, mergeClasses } from '@griffel/react';
import React, { forwardRef } from 'react';

const useStyles = makeStyles({
  wrapper: {
    fontSize: 'calc(19 / 16 * 1rem)',
    marginBottom: '24px',

    '& .base-wrapper': {
      fontSize: 'calc(17 / 16 * 1rem)',
      marginBottom: '16px',
      '&:last-child': {
        marginBottom: '0',
      },
    },

    '& .speech-bubble-wrapper': {
      fontSize: 'calc(17 / 16 * 1rem)',
      marginBottom: '16px',
    },

    '@media (max-width: 563px)': {
      fontSize: 'calc(18 / 16 * 1rem)',
      marginBottom: '1.5rem',
    },
  },
});

const Paragraph = (
  props: React.HTMLAttributes<HTMLParagraphElement>,
  ref?: React.LegacyRef<HTMLParagraphElement>
) => {
  const { className, children, ...rest } = props;
  const styles = useStyles();
  const classes = mergeClasses(styles.wrapper, className);
  return (
    <p {...rest} className={classes} ref={ref}>
      {children}
    </p>
  );
};

export default forwardRef(Paragraph);
