import React from 'react';
import { makeStyles, shorthands } from '@griffel/react';

import { range, normalize } from '@vaporeon/utils';

import { VisuallyHidden } from '../button';

const DISTANCE = 20;
const NUM_OF_SEGMENTS = 5;

const useStyles = makeStyles({
  svg: {
    display: 'block',
    ...shorthands.overflow('visible'),
    ...shorthands.margin('64px', 'auto', '64px'),
    height: '10px',

    '& line': {
      stroke: 'var(--color-gray-300)',
      strokeWidth: '2px',
      strokeLinecap: 'round',
      vectorEffect: 'non-scaling-stroke',
    },
  },

  semanticRule: {
    height: '0px',
    ...shorthands.margin('0'),
    opacity: '0',
  },
});

const HorizontalRule = ({ maxWidth = 100 }) => {
  const classes = useStyles();

  return (
    <>
      <VisuallyHidden>
        <hr className={classes.semanticRule} />
      </VisuallyHidden>
      <svg
        className={classes.svg}
        preserveAspectRatio="none"
        fill="none"
        style={{ width: '100%', maxWidth }}
      >
        {range(NUM_OF_SEGMENTS).map((i) => {
          const x1 = normalize(i, 0, NUM_OF_SEGMENTS, 0, maxWidth);
          const y1 = 0;
          const x2 = normalize(
            i,
            0,
            NUM_OF_SEGMENTS,
            DISTANCE,
            maxWidth + DISTANCE
          );
          const y2 = 10;

          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </svg>
    </>
  );
};

export default HorizontalRule;
