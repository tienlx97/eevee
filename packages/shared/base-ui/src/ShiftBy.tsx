import React from 'react';
import { ShiftByProps } from './types';

function ShiftBy({ x = 0, y = 0, children }: ShiftByProps) {
  return (
    <div
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {children}
    </div>
  );
}

export default ShiftBy;
export { ShiftBy };
