import * as React from 'react';

import { EeveeIconsProps } from '@eevee/react-icons';

export const NotificationFillIcon = ({ primaryFill, width, height, className, ...rest }: EeveeIconsProps) => {
  return (
    <svg
      aria-hidden="true"
      aria-label="Home"
      className={className}
      color="currentColor"
      fill={primaryFill}
      height={height || 24}
      viewBox="0 0 24 24"
      width={width || 24}
      {...rest}
    >
      <g>
        <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.533-.812-4.782-2.347-6.334-1.375-1.393-3.237-2.164-5.242-2.172h-.013c-2.004.008-3.866.78-5.242 2.172-1.534 1.553-2.367 3.802-2.346 6.333.037 4.332-2.02 5.967-2.102 6.03-.26.194-.366.53-.265.838s.39.515.713.515h4.494c.1 2.544 2.188 4.587 4.756 4.587s4.655-2.043 4.756-4.587h4.494c.324 0 .61-.208.712-.515s-.005-.644-.265-.837zM12 20.408c-1.466 0-2.657-1.147-2.756-2.588h5.512c-.1 1.44-1.29 2.587-2.756 2.587z" />
      </g>
    </svg>
  );
};
