import * as React from 'react';

type Props = {
  size: number;
};
const ArrowRight = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-right"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default ArrowRight;
