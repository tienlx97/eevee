import * as React from 'react';

type Props = {
  size: number;
};
export const ChevronDown = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-down"
    id="ChevronDown"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
