import * as React from 'react';
import { EeveeIconsProps } from '@eevee/react-icons';
export const WriteFillIcon = ({ primaryFill, width, height, className, ...rest }: EeveeIconsProps) => {
  return (
    <svg
      aria-hidden="true"
      aria-label="Write"
      className={className}
      color="currentColor"
      fill={primaryFill}
      height={height || 24}
      viewBox="0 0 24 24"
      width={width || 24}
      stroke="currentColor"
      strokeWidth="0"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M21 2C6 2 4 16 3 22h1.998c.666-3.333 2.333-5.166 5.002-5.5 4-.5 7-4 8-7l-1.5-1 1-1c1-1 2.004-2.5 3.5-5.5z" />
      </g>
    </svg>
  );
};
