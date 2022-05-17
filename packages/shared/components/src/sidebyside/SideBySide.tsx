import React, { forwardRef } from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

import './SideBySide.css';

const useStyles = makeStyles({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    ...shorthands.margin('auto'),
    marginTop: '36px',
    marginBottom: '48px',
    ...shorthands.padding('16px'),
    marginLeft: '-16px',
    marginRight: '-16px',
    gridGap: '16px',
    ...shorthands.border('1px', 'solid', 'var(--color-gray-200)'),

    '@media (max-width:563px)': {
      ...shorthands.padding('0'),
      ...shorthands.border('none'),
      marginLeft: '0',
      marginRight: '0',
      gridTemplateColumns: '1fr',
    },

    // '.sidenote_basewrapper &': {
    //   ...shorthands.padding('0px'),
    //   marginLeft: '0px',
    //   marginRight: '0px',
    //   ...shorthands.border('none'),
    // },
  },
});

function SideBySide(
  { className, children, ...delegated }: React.HTMLAttributes<HTMLDivElement>,
  ref?: React.LegacyRef<HTMLDivElement>
) {
  const styles = useStyles();
  const classes = mergeClasses(styles.wrapper, 'sidebyside_wrapper', className);

  return (
    <div className={classes} {...delegated} ref={ref}>
      {children}
    </div>
  );
}

export default forwardRef(SideBySide);
