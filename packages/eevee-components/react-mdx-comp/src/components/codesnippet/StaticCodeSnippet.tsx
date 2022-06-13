/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

import { LiveProvider, LiveEditor } from 'react-live';

import { syntaxTheme } from './syntax.helpers';

import StaticCodeWrapper from './StaticCodeWrapper';
import { LINE_HEIGHT } from './constants';

import './StaticCodeSnippet.css';
import type { StaticCodeSnippetProps } from './CodeSnippet.types';
import { tokens } from '@eevee/react-theme';

const staticCodeSnippetClassname = {
  highlight: 'eve-StaticCodeSnippet__highlight',
  inertEditor: 'eve-StaticCodeSnippet__inerteeditor',
};

const useRootStyles = makeStyles({
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
  },

  highlight: {
    display: 'block',
    position: 'absolute',
    zIndex: '0',
    backgroundColor: tokens.syntaxHighlight,
    left: '0',
    right: '0',
    width: '100%',
    opacity: '0.7',

    '::after': {
      content: "''",
      position: 'absolute',
      top: '-2px',
      left: '0',
      bottom: '-2px',
      width: '2px',
      backgroundColor: tokens.syntaxBool,
      ...shorthands.borderRadius(0, '4px', '4px', 0),
    },
  },
});

export default function staticCodeSnippet({
  code,
  lang,
  highlightedLines = [],
  secretLive,
  clampMaxHeight,
  CodeWrapper = StaticCodeWrapper,
}: StaticCodeSnippetProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const styles = useRootStyles();

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
              className={mergeClasses(styles.highlight, staticCodeSnippetClassname.highlight)}
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
              : mergeClasses(styles.inertEditor, staticCodeSnippetClassname.inertEditor)
          }
        />
      </CodeWrapper>
    </LiveProvider>
  );
}
