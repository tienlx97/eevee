import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { LINE_HEIGHT } from './constants';
import { Skeleton } from '../skeleton/index';
import type { StaticCodeWrapperProps } from './CodeSnippet.types';

import { tokens } from '@eevee/react-theme';

// import './StaticCodeWrapper.css';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    display: 'flex',
    fontFamily: tokens.fontFamilyMono,
    fontSize: '18px',
    outlineOffset: '2px',
    ...shorthands.overflow('auto'),
    marginLeft: '-7px',
    marginRight: '-7px',
    ...shorthands.padding('32px'),
    backgroundColor: tokens.syntaxBg, //'var(--syntax-bg)',

    width: 'calc(100%)',

    '& > div': {
      // ...shorthands.overflow('visible !important'),
    },

    ...shorthands.borderRadius('6px'),

    '@media (max-width: 563px)': {
      flexDirection: 'column',

      // marginLeft: '-16px',
      // marginRight: '-16px',
      // ...shorthands.padding('16px'),

      // '.sn__wrapper &': {
      //   width: 'calc(100% + 32px)',
      //   marginLeft: '-16px',
      //   marginRight: '-16px',
      //   backgroundColor: 'rgba(0, 0, 0, 0.1)',
      // },
    },
  },

  language: {
    position: 'absolute',
    zIndex: '2',
    top: '0px',
    right: '14px',
    transform: 'translateY(-95%)',
    fontSize: '18px',
    ...shorthands.padding('2px', '12px', '0px'),
    backgroundColor: tokens.syntaxBg,
    ...shorthands.borderRadius('8px', '8px', '0', '0'),
    textTransform: 'uppercase',
    color: tokens.syntaxTxt,
    fontWeight: tokens.fontWeightMedium,
    fontFamily: tokens.fontFamily,
    pointerEvents: 'none',
  },
});

const StaticCodeWrapper = ({ code, lang, clampMaxHeight, children }: StaticCodeWrapperProps) => {
  const styles = useStyles();

  const numOfLines = code.split('\n').length;

  // It's not exactly right; it's 32px too small on desktop.
  // But it's close enough.
  const windowHeight = typeof window === 'undefined' ? Infinity : window.innerHeight;

  const estimatedHeight = LINE_HEIGHT * numOfLines + 32;

  const minHeight = clampMaxHeight ? Math.min(estimatedHeight, windowHeight * 0.75) : estimatedHeight;

  let renderedChildren = children;
  if (!renderedChildren) {
    renderedChildren = <Skeleton />;
  }

  return (
    <>
      {lang && <div className={mergeClasses(styles.language, 'scw__language')}>{lang}</div>}
      <div
        className={mergeClasses(styles.wrapper, 'static__codewrapper')}
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
