/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, HTMLAttributes } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLOrSVGElement> {
  display?: 'none' | 'inline' | 'block' | 'inline-block';
  // ref?: any;
  /**
   * Render the root element as another type.
   */
  as?: ElementType;
}
