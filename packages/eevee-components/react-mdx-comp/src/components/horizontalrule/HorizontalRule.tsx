import { makeStyles, shorthands } from '@griffel/react';
import * as React from 'react';
import { tokens } from '@eevee/react-theme';

type HorizonTalRuleProps = JSX.IntrinsicElements['hr'] & {
  maxWidth?: number;
  splashStyles?: React.CSSProperties;
};

const useVisuallyHiddenStyles = makeStyles({
  root: {
    position: 'absolute',
    ...shorthands.overflow('hidden'),
    clip: 'rect(0 0 0 0)',
    height: '1px',
    width: '1px',
    ...shorthands.margin('-1px'),
    ...shorthands.padding(0),
    ...shorthands.border(0),
  },
});

const useHrStyles = makeStyles({
  root: {
    height: ' 0px',
    ...shorthands.margin(0),
    opacity: 0,
  },

  svg: {
    display: 'block',
    ...shorthands.overflow('visible'),
    ...shorthands.margin('64px', 'auto', '64px'),
    height: '10px',

    '& line': {
      stroke: tokens.b1,
      strokeWidth: tokens.strokeWidthThick,
      strokeLinecap: 'round',
      vectorEffect: 'non-scaling-stroke',
    },
  },
});

const VisuallyHidden: React.FC = ({ children }) => {
  const visuallyHiddenStyles = useVisuallyHiddenStyles();
  return <div className={visuallyHiddenStyles.root}>{children}</div>;
};

const DISTANCE = 20;
const NUM_OF_SEGMENTS = 5;

export const range = (start: number, end?: number, step = 1) => {
  const output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const normalize = (
  num: number,
  currentScaleMin: number,
  currentScaleMax: number,
  newScaleMin = 0,
  newScaleMax = 1,
) => {
  // FIrst, normalize the value between 0 and 1.
  const standardNormalization = (num - currentScaleMin) / (currentScaleMax - currentScaleMin);

  // Next, transpose that value to our desired scale.
  return (newScaleMax - newScaleMin) * standardNormalization + newScaleMin;
};

export const HorizontalRule = ({ maxWidth = 100, splashStyles }: HorizonTalRuleProps) => {
  const hrStyles = useHrStyles();
  return (
    <>
      <VisuallyHidden>
        <hr className={hrStyles.root} />
      </VisuallyHidden>
      <svg
        className={hrStyles.svg}
        preserveAspectRatio="none"
        fill="none"
        style={{ width: '100%', maxWidth, ...splashStyles }}
      >
        {range(NUM_OF_SEGMENTS).map(i => {
          const x1 = normalize(i, 0, NUM_OF_SEGMENTS, 0, maxWidth);
          const y1 = 0;
          const x2 = normalize(i, 0, NUM_OF_SEGMENTS, DISTANCE, maxWidth + DISTANCE);
          const y2 = 10;

          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </svg>
    </>
  );
};
