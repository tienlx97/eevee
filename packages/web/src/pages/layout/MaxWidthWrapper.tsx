import React from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';

const useStyles = makeStyles({
  maxWidthWrapper: {
    position: 'relative',
    zIndex: '2',
    width: '100%',

    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '32px',
    paddingRight: '32px',

    '@media (max-width: 563px)': {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
});

interface IMaxWidthWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: string;
}

export function MaxWidthWrapper({
  className,
  children,
  maxWidth,
  ...delegated
}: IMaxWidthWrapperProps) {
  const styles = useStyles();
  return (
    <div
      className={mergeClasses(styles.maxWidthWrapper, className)}
      style={{ maxWidth: `${maxWidth || 1100}px` }}
      {...delegated}
    >
      {children}
    </div>
  );
}
