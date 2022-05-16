/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { makeStyles, shorthands } from '@griffel/react';

import LazyStaticCodeSnippet from './LazyStaticCodeSnippet';

import { LINE_HEIGHT } from './constants';
import { ICodeSnippet } from './types';
import type { Language } from 'prism-react-renderer';

const useStyles = makeStyles({
  OuterWrapper: {
    position: 'relative',
    marginTop: '48px',

    /*
    HACK: Update the code snippets
    to always feature line-height stuff
  */

    "& .token-line, [data-code-snippet='true'] textarea, [data-code-snippet='true'] pre":
      {
        ...shorthands.padding('0 !important'),

        '@media (max-width: 563px)': {
          fontSize: '14px !important',
          lineHeight: `${LINE_HEIGHT}px !important`,
        },

        '@media (min-width: 564px)': {
          fontSize: '17px !important',
          lineHeight: `${LINE_HEIGHT}px !important`,
        },
      },

    "& [data-code-snippet='true'] textarea": {
      outlineOffset: '32px',
    },

    '& .sidebyside-code-wrapper': {
      marginTop: 0,
      marginBottom: '48px',
    },

    '& .sidenote-wrapper': {
      marginbottom: '24px',
    },

    '& textarea::selection': {
      backgroundColor: 'hsla(0deg, 0%, 50%, 0.2)',
    },
  },
});

const CodeSnippet = ({
  children,
  live,
  secretLive,
  highlight = [],
  lessBottomMargin,
  clampMaxHeight = true,
  className = 'language-null',
}: ICodeSnippet) => {
  const styles = useStyles();

  // The MDX parser turns "```jsx" into "className: 'language-jsx'".
  // We'll use a regex to pull out just the language itself (css, jsx)
  // so that we can get the correct syntax highlighting
  const match = className.match(/language-(.+)/);

  const highlightedLines =
    typeof highlight === 'string' ? JSON.parse(highlight) : highlight;

  const code = children.trim();

  return (
    <div
      className={styles.OuterWrapper}
      style={{ marginBottom: lessBottomMargin ? 40 : 80 }}
    >
      {live ? (
        <></>
      ) : (
        <LazyStaticCodeSnippet
          lang={match?.at(1) as Language | 'null'}
          code={code}
          secretLive={secretLive}
          // Static-specific props
          highlightedLines={highlightedLines}
          clampMaxHeight={clampMaxHeight === true}
        />
      )}
    </div>
  );
};

export default CodeSnippet;
