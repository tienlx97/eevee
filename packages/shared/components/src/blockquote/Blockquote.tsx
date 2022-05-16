import React, { forwardRef } from 'react';

import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

import { IBlockquote } from './Blockquote.types';

const useStyles = makeStyles({
  wrapper: {
    fontStyle: 'italic',
    color: 'var(--color-gray-700)',
    ...shorthands.padding('0', '32px'),
    marginTop: '24px',
    marginBottom: '48px',

    '@media max-width: (max-width: 768px)': {
      ...shorthands.padding('0', '2rem'),
    },

    '@media max-width: (max-width: 563px)': {
      ...shorthands.padding('0', '1rem'),
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Blockquote(props: IBlockquote, ref?: any) {
  const { className, children, ...delegated } = props;
  const styles = useStyles();
  const classes = mergeClasses(styles.wrapper, className);

  return (
    <blockquote className={classes} ref={ref} {...delegated}>
      {children}
    </blockquote>
  );
}

export default forwardRef(Blockquote);
