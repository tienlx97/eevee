import React, { useRef } from 'react';
import { UnstyledButton } from './common/UnstyledButton';
import { useDrag } from './utils/useDrag';

// import { BREAKPOINT } from './constants';

import stylex from '@ladifire-opensource/stylex';
import { joinClasses } from '@eevee/utils';
import { SplitPaneProps } from './types';

const styles = stylex.create({
  wrapper: {
    maxWidth: '100%',
    overflow: 'hidden',

    '@media (max-width: 768px)': {
      borderRadius: '0',
      borderLeft: 'none',
      borderRight: 'none',
    },
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: '100%',

    '@media (min-width: 960px)': {
      flexDirection: 'row',
    },
  },

  firstPane: {
    '@media (min-width: 960px)': {
      marginRight: '-8px',
    },
  },

  secondPane: {
    '@media (min-width: 960px)': {
      marginLeft: '-8px',
    },
  },

  divider: {
    position: 'relative',
    zIndex: '2',
    cursor: 'default',
    padding: '16px 0 0',
    pointerEvents: 'auto',

    '&:before,&:after': {
      content: "''",
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      margin: 'auto',
    },
    '&:before': {
      width: '100%',
      height: '1px',
      backgroundColor: 'var(--color-gray-100)',
    },

    '@media (min-width: 960px)': {
      width: '16px',
      cursor: 'col-resize',
      padding: '0',

      '&:before,&:after': {
        content: "''",
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        margin: 'auto',
      },

      '&:before': {
        width: '1px',
        height: 'auto',
      },

      '&:after': {
        width: '11px',
        backgroundColor: 'hsl(210deg 15% 20% / 0.5)',
        opacity: '0',
        transition: 'opacity 500ms',
      },

      '&:hover:after': {
        opacity: '1',
        transition: 'opacity 250ms',
      },
    },
  },
});

const DIVIDER_WIDTH = 16;

const SplitPane = ({
  className = '',
  splitRatio,
  isFullscreened,
  leftChild,
  rightChild,
}: SplitPaneProps) => {
  const rulerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  const { leftWidth, rightWidth } = useDrag({
    defaultRatio: splitRatio,
    rulerRef: rulerRef,
    containerRef,
    dividerRef,
    dividerWidth: DIVIDER_WIDTH,
  });

  const classes = stylex.dedupe(
    isFullscreened
      ? {
          flex: 1,
        }
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (undefined as any)
  );

  return (
    <>
      <div ref={rulerRef} />
      {/* Wrapper */}
      <div className={joinClasses(stylex(styles.wrapper), classes)}>
        {/* Container */}
        <div className={className} ref={containerRef}>
          {/* FirstPane */}
          <div
            className={joinClasses(
              stylex(styles.firstPane),
              stylex.dedupe({ flex: leftWidth })
            )}
          >
            {leftChild}
          </div>
          {/* Divider */}
          <UnstyledButton ref={dividerRef} xstyle={styles.divider} />
          {/* SecondPane */}
          <div
            className={joinClasses(
              stylex(styles.secondPane),
              stylex.dedupe({ flex: rightWidth })
            )}
          >
            {rightChild}
          </div>
        </div>
      </div>
    </>
  );
};

export default SplitPane;
export { SplitPane };
