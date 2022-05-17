import React from 'react';

import { range } from '@vaporeon/utils';
import { makeStyles, shorthands } from '@griffel/react';
import { ISquigglyLine } from './SquigglyLine.types';

const useStyles = makeStyles({
  svgg: {
    display: 'block',
    ...shorthands.overflow('visible'),
  },
});

const SquigglyLine = ({
  width,
  height,
  squiggleWidth = 5,
  // phase = 1,
  ...delegated
}: ISquigglyLine) => {
  const styles = useStyles();

  const numOfSquiggles = Math.round(width / squiggleWidth);
  const roundedSquiggleWidth = width / numOfSquiggles;

  const linePositionY = height / 2;

  const initialPoint = { x: 0, y: linePositionY };

  const instructions = range(0, numOfSquiggles - 1).reduce((acc, i) => {
    const sideMultiplier = i % 2 === 0 ? 1 : -1;

    const lastPointX = i * roundedSquiggleWidth;

    const controlPointX = lastPointX + roundedSquiggleWidth / 2;
    const controlPointY =
      linePositionY + (roundedSquiggleWidth / 2) * sideMultiplier;

    const x = lastPointX + roundedSquiggleWidth;
    const y = linePositionY;

    const instruction = `Q ${controlPointX},${controlPointY} ${x},${y}`;

    return `${acc} ${instruction}`;
  }, `M ${initialPoint.x},${initialPoint.y}`);

  return (
    <svg
      className={styles.svgg}
      width={numOfSquiggles * roundedSquiggleWidth}
      height={height}
    >
      <path d={instructions} fill="none" strokeLinecap="round" {...delegated} />
    </svg>
  );
};

export default SquigglyLine;
