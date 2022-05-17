import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import React from 'react';

import { SquigglyLine } from '../squigglyline';

const useStyles = makeStyles({
  wrapper: {
    ...shorthands.margin('72px', 'auto'),
  },
});

interface IDivider extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
}

const Divider = ({
  width = 100,
  height = 50,
  className,
  ...delegated
}: IDivider) => {
  const styles = useStyles();
  const classes = mergeClasses(styles.wrapper, className);
  return (
    <div className={classes} style={{ maxWidth: `${width}px` }} {...delegated}>
      <SquigglyLine
        width={width}
        height={height}
        squiggleWidth={10}
        stroke="var(--color-secondary)"
        strokeWidth={2}
      />
    </div>
  );
};

export default Divider;
