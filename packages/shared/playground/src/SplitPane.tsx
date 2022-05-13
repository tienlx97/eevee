import React, { useRef } from 'react';
import { UnstyledButton } from '@jolteon/react-base-ui';
import { useDrag } from './utils/useDrag';

import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { ISplitPaneProps } from './SplitPane.types';

import './SplitPane.css';

const useStyles = makeStyles({
  wrapper: {
    maxWidth: '100%',
    ...shorthands.overflow('hidden'),

    '@media (max-width: 768px)': {
      ...shorthands.borderRadius('0'),
      ...shorthands.borderLeft('none'),
      ...shorthands.borderRight('none'),
    },
  },

  wrapperFlex1: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
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
    // because psesudo ::before and ::after does not support
    // import it in css file
    // https://github.com/microsoft/griffel/blob/main/packages/core/src/runtime/getStyleBucketName.test.ts
    position: 'relative',
    zIndex: 2,
    cursor: 'default',
    ...shorthands.padding('16px', '0', '0'),
    pointerEvents: 'auto',

    '@media (min-width: 960px)': {
      width: '16px',
      cursor: 'col-resize',
      ...shorthands.padding('0'),
    },
  },
});

const DIVIDER_WIDTH = 16;

const SplitPane = ({
  appendClasses = '',
  splitRatio,
  isFullscreened,
  leftChild,
  rightChild,
}: ISplitPaneProps) => {
  const styles = useStyles();

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
    <>
      <div ref={rulerRef} />
      <div // Wrapper
        className={mergeClasses(
          styles.wrapper,
          isFullscreened && styles.wrapperFlex1
        )}
      >
        <div // Container
          className={mergeClasses(styles.container, appendClasses)}
          ref={containerRef}
        >
          <div // FirstPane
            className={styles.firstPane}
            style={{ flex: leftWidth }}
          >
            {leftChild}
          </div>
          {/* Divider */}
          <UnstyledButton
            id="divider"
            ref={dividerRef}
            className={styles.divider}
          />
          {/* SecondPane */}
          <div className={styles.secondPane} style={{ flex: rightWidth }}>
            {rightChild}
          </div>
        </div>
      </div>
    </>
  );
};

export default SplitPane;
export { SplitPane };
