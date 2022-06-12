import * as React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  size: number;
};
export const ArrowRight = ({ size, stroke, ...delegated }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={stroke || 'currentColor'}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...delegated}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
