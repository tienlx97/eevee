import { UnstyledButton } from '../../button';
import React, { useRef } from 'react';
import { useDrag } from '../utils/useDrag';

const DIVIDER_WIDTH = 16;

const UseDragDebug = () => {
  const splitRatio = 0.55;

  const rulerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLButtonElement>(null);

  const { leftWidth, rightWidth } = useDrag({
    defaultRatio: splitRatio,
    rulerRef: rulerRef,
    containerRef,
    dividerRef,
    dividerWidth: DIVIDER_WIDTH,
  });

  return (
    <div ref={rulerRef}>
      <div>
        <div ref={containerRef}>
          <UnstyledButton ref={dividerRef} />
          <div>{leftWidth}</div>
          <div>{rightWidth}</div>
        </div>
      </div>
    </div>
  );
};

export default UseDragDebug;
