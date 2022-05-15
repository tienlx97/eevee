import React from 'react';

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  display?: 'none' | 'inline' | 'block' | 'inline-block';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // xstyle?: any;
  // appendClass?: string;
  // children?: React.ReactNode;
  // onclick?: (event: BaseSyntheticEvent) => void;
  // onMouseEnter?: (event: SyntheticEvent) => void;
  // onMouseLeave?: (event: SyntheticEvent) => void;
  // onMouseDown?: MouseEventHandler<HTMLDivElement>;
  // onMouseUp?: MouseEventHandler<HTMLDivElement>;
  // ref?: React.LegacyRef<HTMLDivElement>;
  // style?: CSSProperties;
}
