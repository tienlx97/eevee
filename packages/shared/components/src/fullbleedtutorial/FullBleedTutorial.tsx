import React from 'react';
import { BREAKPOINT_SIZES } from '@vaporeon/constants';
import { useWindowDimensions, useHasMounted } from '@vaporeon/hooks';

import { FullBleed as FullBleedOriginal } from '../fullbleed';

import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  midWrapper: {
    width: 'calc(100vw - 16px)',
    maxWidth: '1100px',
    ...shorthands.margin('auto'),
    transform: 'translateX(-32px)',
  },

  largeWrapper: {
    width: '1200px',
    transform: 'translateX(-82px)',
  },
});

const FullBleedTutorial = ({
  children,
  className,
  style = {},
  ...delegated
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const styles = useStyles();

  const { width: windowWidth } = useWindowDimensions();
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return <></>;
  }

  if (windowWidth && windowWidth <= BREAKPOINT_SIZES.md) {
    return <>{children}</>;
  } else if (windowWidth && windowWidth <= BREAKPOINT_SIZES.lg) {
    return <FullBleedOriginal>{children}</FullBleedOriginal>;
  } else if (windowWidth && windowWidth <= 1200) {
    return (
      <div
        className={mergeClasses(styles.midWrapper, className)}
        {...delegated}
        style={style}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={mergeClasses(styles.largeWrapper, className)}
      {...delegated}
      style={style}
    >
      {children}
    </div>
  );
};

export default FullBleedTutorial;
