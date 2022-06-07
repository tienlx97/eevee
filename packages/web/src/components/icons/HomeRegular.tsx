import { EeveeIconsProps, wrapIcon } from '@eevee/react-icons';
import * as React from 'react';

const Home = ({ className, width, height, primaryFill, ...delegated }: EeveeIconsProps) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="none" className={className} aria-label="Home" {...delegated}>
    <path
      d="M4.5 10.75v10.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5.5c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v5.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-10.5M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HomeRegular = wrapIcon(Home({}), 'HomeRegular');
