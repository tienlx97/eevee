import React, { CSSProperties, HTMLAttributes } from 'react';
import { COLOR_SWAP_TRANSITION_DURATION } from '@vaporeon/constants';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  baseWrapper: {
    position: 'relative',
    ...shorthands.padding('24px', '32px', '24px', '32px'),
    fontSize: '17px',
    marginTop: '48px',
    marginBottom: '64px',
    ...shorthands.borderLeft('3px', 'solid'),
    ...shorthands.borderRadius('6px', '6px', '6px', '3px'),

    // transition: `background ${COLOR_SWAP_TRANSITION_DURATION}ms`,

    '@media (min-width: 1150px)': {
      marginLeft: '-32px',
      marginRight: '-32px',
    },

    '& > *:last-child': {
      marginBottom: '0 !important',
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IBaseWrapperProps extends HTMLAttributes<HTMLElement> {}

const BaseWrapper = ({
  children,
  className,
  style,
  ...delegated
}: IBaseWrapperProps) => {
  const styles = useStyles();

  const classes = mergeClasses(styles.baseWrapper, className);

  const innerStyle: CSSProperties = {
    transition: `background ${COLOR_SWAP_TRANSITION_DURATION}ms`,
  };

  return (
    <aside
      {...delegated}
      data-side-note-wrapper
      style={{ ...innerStyle, ...style }}
      className={classes}
    >
      {children}
    </aside>
  );
};

export { BaseWrapper };
