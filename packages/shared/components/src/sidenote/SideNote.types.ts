import { HTMLAttributes } from 'react';

export interface IBaseWrapperProps extends HTMLAttributes<HTMLElement> {
  appendClassName?: string;
}

export interface ISideNote {
  type?: 'info' | 'success' | 'warning';
  title?: string;
  children: React.ReactElement | React.ReactElement[];
}
