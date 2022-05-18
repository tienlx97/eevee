import * as React from 'react';
type Props = {
  size: number;
};
const Play = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m5 3 14 9-14 9V3z" />
  </svg>
);

export default Play;
