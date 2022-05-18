import * as React from 'react';
type Props = {
  size: number;
};
const Pause = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
  </svg>
);

export default Pause;
