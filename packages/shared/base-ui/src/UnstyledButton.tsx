import React from 'react';
import stylex from '@ladifire-opensource/stylex';
import { ButtonProps } from './types';

const $1 = stylex.create({
  wrapper: {
    margin: 0,
    padding: 0,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    textAlign: 'left',
    font: 'inherit',

    '&:focus': {
      outline: '2px auto var(--color-primary)',
      outlineOffset: '2px',
    },

    '&:focus:not(.focus-visible)': {
      outline: 'none',
    },
  },
});

const $display = stylex.create<'none' | 'inline' | 'block' | 'inline-block'>({
  none: {
    display: 'none',
  },
  inline: {
    display: 'inline',
  },
  block: {
    display: 'block',
  },
  'inline-block': {
    display: 'inline-block',
  },
});

const UnstyledButton = ({
  display = 'block',
  xstyle,
  children,
  onclick,
  onMouseEnter,
  onMouseLeave,
  ref,
  style,
}: ButtonProps) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onclick}
      ref={ref}
      style={style}
      className={stylex([$1.wrapper, $display[display], xstyle])}
    >
      {children}
    </div>
  );
};

export { UnstyledButton };
export default UnstyledButton;
