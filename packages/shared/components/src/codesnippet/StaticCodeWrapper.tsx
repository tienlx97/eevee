import React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { LINE_HEIGHT } from './constants';
import { Skeleton } from '../skeleton';
import { IStaticCodeWrapper } from './types';
// import { BaseWrapper } from '../sidenote';
// import { SideBySideCodeWrapper } from '../sidebysidecode';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    display: 'flex',
    fontFamily: 'var(--font-family-mono)',
    fontSize: '18px',
    outlineOffset: '2px',
    ...shorthands.overflow('auto'),
    marginLeft: '-32px',
    marginRight: '-32px',
    ...shorthands.padding('32px'),
    backgroundColor: 'var(--syntax-bg)',

    '& .sidenote-wrapper': {
      marginLeft: 'unset',
      marginRight: 'unset',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },

    '& .sidebyside-code-wrapper': {
      marginLeft: '0',
      marginRight: '0',
      boxShadow: '0px 0px 35px 35px var(--color-background)',
    },

    '& > div': {
      ...shorthands.overflow('visible !important'),
    },

    '@media (max-width:768px)': {
      /*
      NOTE: For some reason, the parent has a default width of >100%. If I set this to 100% instead of 100vw, it causes
      the layout to break. Not sure why :/
    */
      width: 'calc(100vw)',

      '& .sidenote-wrapper': {
        width: '100%',
      },
    },

    '@media (max-width: 563px)': {
      flexDirection: 'column',

      marginLeft: '-16px',
      marginRight: '-16px',
      ...shorthands.padding('16px'),

      '& .sidenote-wrapper': {
        width: 'calc(100% + 32px)',
        marginLeft: '-16px',
        marginRight: '-16px',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      },
    },

    '@media (min-width: 564px)': {
      ...shorthands.borderRadius('6px'),
      maxWidth: 'calc(100% + 64px)',
    },
  },

  language: {
    position: 'absolute',
    zIndex: '2',
    top: '0px',
    right: '14px',
    transform: 'translateY(-100%)',
    fontSize: '18px',
    ...shorthands.padding('2px', '12px', '0px'),
    backgroundColor: 'var(--syntax-bg)',
    ...shorthands.borderRadius('8px', '8px', '0', '0'),
    textTransform: 'uppercase',
    color: 'var(--color-gray-700)',
    fontWeight: 'var(--font-weight-medium)',
    fontFamily: 'var(--font-family)',
    pointerEvents: 'none',

    '& .sidenote-wrapper': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
});

const StaticCodeWrapper = ({
  code,
  lang,
  clampMaxHeight,
  children,
}: IStaticCodeWrapper) => {
  const styles = useStyles();

  const numOfLines = code.split('\n').length;

  // It's not exactly right; it's 32px too small on desktop.
  // But it's close enough.
  const windowHeight =
    typeof window === 'undefined' ? Infinity : window.innerHeight;

  const estimatedHeight = LINE_HEIGHT * numOfLines + 32;

  const minHeight = clampMaxHeight
    ? Math.min(estimatedHeight, windowHeight * 0.75)
    : estimatedHeight;

  let renderedChildren = children;
  if (!renderedChildren) {
    renderedChildren = <Skeleton />;
  }

  return (
    <>
      {lang !== 'null' && <div className={styles.language}>{lang}</div>}
      <div
        className={styles.wrapper}
        data-code-snippet="true"
        style={{
          minHeight,
          maxHeight: clampMaxHeight ? '75vh' : undefined,
        }}
      >
        {renderedChildren}
      </div>
    </>
  );
};

export default StaticCodeWrapper;
