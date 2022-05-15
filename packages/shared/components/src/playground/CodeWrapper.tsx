/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
// import { BaseWrapper as SidenoteWrapper } from '@jolteon/sidenote';

import { InPortal } from '../inportal';
import { SettingCheckbox } from '../setting-checkbox';
import { WrapperTheme } from './theme';

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: ' var(--syntax-bg)',
    ...shorthands.border('none'),
  },

  stackedInlineOuterWrapperFalse: {
    marginBottom: '48px',
    '@media (max-width: 768px)': {
      marginBottom: '32px',
    },
  },

  stackedInlineOuterWrapperTrue: {
    marginBottom: '16px',
    '@media (max-width: 768px)': {
      marginBottom: '16px',
    },
  },

  inlineWrapper: {
    position: 'relative',
    zIndex: '1',
    width: 'calc(100% + 32px * 2)',
    ...shorthands.margin('0', '-32px'),
    ...shorthands.borderRadius('8px'),

    '& aside[data-side-note-wrapper]': {
      width: 'calc(100% + 16px * 2)',
      marginLeft: '-16px',
      marginRight: '-16px',
    },

    '@media (max-width: 768px)': {
      width: 'calc(100% + 24px * 2)',
      marginLeft: '-24px',
      marginRight: '-24px',
      ...shorthands.borderRadius('0'),
      '& aside[data-side-note-wrapper]': {
        width: 'calc(100% + 16px * 2)',
      },
    },
  },

  fullscreenWrapper: {
    position: 'fixed',
    zIndex: '2',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    height: '100%',
    ...shorthands.margin('0'),
    display: 'flex',
    flexDirection: 'column',
  },

  footer: {
    paddingTop: '16px',
    display: 'flex',
    justifyContent: 'flex-start',

    '@media (orientation: portrait)': {
      display: 'none',
    },
  },
});

type InlineWrapperProps = {
  blockerSize?: number;
  children?: React.ReactNode;
  className?: string;
};
const InlineWrapper = (
  { className, blockerSize, children }: InlineWrapperProps,
  ref: any
) => {
  const styles = useStyles();
  const classes = mergeClasses(styles.inlineWrapper, className);

  return (
    <div
      ref={ref}
      style={{ ...WrapperTheme, height: blockerSize }}
      className={classes}
    >
      {children}
    </div>
  );
};

const InlineWrapperRef = forwardRef(InlineWrapper);

type InlineOuterWrapperProps = {
  stacked?: boolean;
  children: React.ReactNode;
};
const InlineOuterWrapper = ({ stacked, children }: InlineOuterWrapperProps) => {
  const styles = useStyles();
  const classes = mergeClasses(
    !stacked
      ? styles.stackedInlineOuterWrapperFalse
      : styles.stackedInlineOuterWrapperTrue
  );

  return <div className={classes}>{children}</div>;
};

type CodeWrapperProps = {
  stacked: boolean;
  className: string;
  children: React.ReactNode;
  isFullscreened?: boolean;
};
const CodeWrapper = ({
  stacked,
  className,
  children,
  isFullscreened,
}: CodeWrapperProps) => {
  const inlineRef = useRef<HTMLDivElement>(null);

  const styles = useStyles();

  const [isActuallyFullscreened, setIsActuallyFullscreened] =
    useState(isFullscreened);
  const [blockerSize, setBlockerSize] = useState(0);

  useEffect(() => {
    setIsActuallyFullscreened(isFullscreened);

    if (!inlineRef.current) {
      return;
    }

    if (isFullscreened) {
      const boundingBox = inlineRef.current.getBoundingClientRect();
      setBlockerSize(boundingBox.height);
    } else {
      setBlockerSize(0);
    }
  }, [isFullscreened]);

  if (isActuallyFullscreened) {
    return (
      <>
        <InlineOuterWrapper>
          <InlineWrapperRef blockerSize={blockerSize} />
        </InlineOuterWrapper>
        <InPortal>
          <div // FullscreenWrapper
            style={WrapperTheme}
            className={styles.fullscreenWrapper}
          >
            {children}
          </div>
        </InPortal>
      </>
    );
  }

  return (
    <InlineOuterWrapper stacked={stacked}>
      <InlineWrapperRef className={className} ref={inlineRef}>
        {children}
      </InlineWrapperRef>
      <footer className={styles.footer}>
        <SettingCheckbox />
      </footer>
    </InlineOuterWrapper>
  );
};

export default CodeWrapper;
export { CodeWrapper };
