import React from 'react';

export default function Spacer({ size }: { size: number }) {
  return <div style={{ minWidth: `${size}px`, minHeight: `${size}` }} />;
}
