import React, {
  BaseSyntheticEvent,
  CSSProperties,
  SyntheticEvent,
} from 'react';
type Display = 'none' | 'inline' | 'block' | 'inline-block';

type ButtonProps = {
  display?: Display;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xstyle: any;
  children?: React.ReactNode;
  onclick?: (event: BaseSyntheticEvent) => void;
  onMouseEnter?: (event: SyntheticEvent) => void;
  onMouseLeave?: (event: SyntheticEvent) => void;
  ref?: React.LegacyRef<HTMLDivElement>;
  style?: CSSProperties;
};

type ShiftByProps = {
  x?: number;
  y?: number;
  children?: React.ReactNode;
};

type BoopProps = {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  timing?: number;
  children: React.ReactNode;
};

export { ButtonProps, ShiftByProps, BoopProps };
