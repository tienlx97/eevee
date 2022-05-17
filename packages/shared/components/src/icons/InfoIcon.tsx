import * as React from 'react';

type Props = {
  size: number;
};
const InfoIcon = ({ size }: Props) => (
  <svg
    id="InfoIcon"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-info"
  >
    <circle cx={12} cy={12} r={10} />
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

export default InfoIcon;
