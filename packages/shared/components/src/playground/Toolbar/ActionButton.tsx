import React from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';

import { UnstyledButton } from '../../button';
import type { IButtonProps } from '../../button/types';

const useStyles = makeStyles({
  root: {
    width: '32px',
    height: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '1',
    color: 'inherit',

    '& svg': {
      display: 'block',
    },
  },
});

const ActionButton = ({
  display,
  children,
  className,
  ...restProps
}: IButtonProps) => {
  const styles = useStyles();
  const classes = mergeClasses(styles.root, className);
  return (
    <UnstyledButton
      // onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
      // onclick={onclick}
      {...restProps}
      display={display}
      className={classes}
    >
      {children}
    </UnstyledButton>
  );
};

export { ActionButton };
