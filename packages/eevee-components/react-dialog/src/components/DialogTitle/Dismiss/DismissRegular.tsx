import * as React from 'react';
import { EeveeIconsProps } from '@eevee/react-icons';

export const DismissRegularIcon = ({
  primaryFill = 'currentColor',
  width,
  height,
  className,
  ...rest
}: EeveeIconsProps) => {
  return React.createElement(
    'svg',
    {
      ...rest,
      color: primaryFill,
      width: width || 24,
      height: height || 24,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      className: className,
    },
    React.createElement('path', {
      // eslint-disable-next-line @eevee/max-len
      d: 'M4.4 4.55l.07-.08a.75.75 0 01.98-.07l.08.07L12 10.94l6.47-6.47a.75.75 0 111.06 1.06L13.06 12l6.47 6.47c.27.27.3.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07L12 13.06l-6.47 6.47a.75.75 0 01-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 01-.07-.98l.07-.08-.07.08z',
      fill: primaryFill,
    }),
  );
};
