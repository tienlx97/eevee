import React from 'react';
import { ButtonProps } from '../types';
import { UnstyledButton } from '../common/UnstyledButton';

const ActionButton = ({
  display,
  children,
  xstyle,
  onclick,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => {
  return (
    <UnstyledButton
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onclick={onclick}
      display={display}
      xstyle={xstyle}
    >
      {children}
    </UnstyledButton>
  );
};

export { ActionButton };
