import * as React from 'react';
type Props = {
  size: number;
};
const SkipBack = ({ size }: Props) => (
  <svg
    id="SkipBack"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-skip-back"
  >
    <path d="M19 20 9 12l10-8v16zM5 19V5" />
  </svg>
);

export default SkipBack;
