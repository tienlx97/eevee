/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

import { LiveProvider, LiveEditor } from 'react-live';

import { syntaxTheme } from '@vaporeon/helpers';
// import { SideBySideCodeWrapper } from '../sidebysidecode';
// import { BaseWrapper } from '../sidenote';

import StaticCodeWrapper from './StaticCodeWrapper';
import { LINE_HEIGHT } from './constants';

import './StaticCodeSnippet.css';
import { IStaticCodeSnippet } from './types';

const useStyles = makeStyles({
  secretLiveEditor: {
    width: '100%',
  },

  inertEditor: {
    ...shorthands.overflow('unset !important'),

    /*
    The textarea is only needed for live-editable code.
    This is not one of those.
  */
    '& textara': {
      display: 'none !important',
    },

    // '& pre': {
    //   whiteSpace: 'unset !important',
    //   // wordBreak: 'unset !important',
    //   // overflowWrap: 'unset !important',
    // },
  },

  highlight: {
    display: 'block',
    position: 'absolute',
    zIndex: '0',
    backgroundColor: 'var(--syntax-highlight)',
    left: '0',
    right: '0',
    width: '100%',
    opacity: '0.7',

    // '& .sn__wrapper': {
    //   backgroundColor: 'rgba(0, 0, 0, 0.15)',
    // },
  },
});

export default function StaticCodeSnippet({
  code,
  lang,
  highlightedLines = [],
  secretLive,
  clampMaxHeight,
  CodeWrapper = StaticCodeWrapper,
}: IStaticCodeSnippet) {
  const styles = useStyles();

  return (
    <LiveProvider
      code={code}
      // mountStylesheet={false}
      theme={syntaxTheme as any}
      disabled={!secretLive}
    >
      <CodeWrapper code={code} lang={lang} clampMaxHeight={clampMaxHeight}>
        {highlightedLines.map(([start, end]) => {
          const EXTEND_BY = 2;
          const top = 32 + start * LINE_HEIGHT - EXTEND_BY;
          const height = (end - start + 1) * LINE_HEIGHT + EXTEND_BY * 2;

          return (
            <span
              className={mergeClasses(styles.highlight, 'scnp--highlight')}
              key={`${start}-${end}`}
              style={{ top, height }}
            />
          );
        })}
        <LiveEditor
          language={lang}
          className={
            secretLive
              ? styles.secretLiveEditor
              : mergeClasses(styles.inertEditor, 'scnp--inerteeditor')
          }
        ></LiveEditor>
      </CodeWrapper>
    </LiveProvider>
  );
}
