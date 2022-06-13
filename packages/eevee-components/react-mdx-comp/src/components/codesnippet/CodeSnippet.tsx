/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';

import LazyStaticCodeSnippet from './LazyStaticCodeSnippet';

import type { CodeSnippetProps } from './CodeSnippet.types';
import { breakPoints } from '@eevee/react-theme';

// import './CodeSnippet.css';

const useStyles = makeStyles({
  outerWrapper: {
    position: 'relative',
    marginTop: '48px',
    "& [data-code-snippet='true'] textarea": {
      outlineOffset: '32px',
    },

    '& textarea::selection': {
      backgroundColor: 'hsla(0deg, 0%, 50%, 0.2)',
    },

    '& .token-line, & [data-code-snippet=true] textarea, & [data-code-snippet=true] pre': {
      paddingTop: '0 !important',
      paddingRight: '0 !important',
      paddingBottom: '0 !important',
      paddingLeft: '0 !important',
    },

    [`@media ${breakPoints.xsAndSmaller}`]: {
      '& .token-line, & [data-code-snippet=true] textarea, & [data-code-snippet=true] pre': {
        fontSize: '14px !important',
        lineHeight: '28px !important',
      },
    },

    [`@media ${breakPoints.xsAndLarger}`]: {
      '& .token-line, & [data-code-snippet=true] textarea, & [data-code-snippet=true] pre': {
        fontSize: '17px !important',
        lineHeight: '28px !important',
      },
    },
  },
});

export const CodeSnippet = ({
  language = 'jsx',
  code,
  secretLive,
  highlight = [],
  lessBottomMargin,
  clampMaxHeight = true,
}: CodeSnippetProps) => {
  const styles = useStyles();

  // The MDX parser turns "```jsx" into "className: 'language-jsx'".
  // We'll use a regex to pull out just the language itself (css, jsx)
  // so that we can get the correct syntax highlighting
  // const match = className.match(/language-(.+)/);

  const highlightedLines = typeof highlight === 'string' ? JSON.parse(highlight) : highlight;

  const cleanCode = code.trim();

  return (
    <div
      className={mergeClasses(styles.outerWrapper, 'eve-CodeSnippet')}
      style={{ marginBottom: lessBottomMargin ? 40 : 80 }}
    >
      <LazyStaticCodeSnippet
        lang={language}
        code={cleanCode}
        secretLive={secretLive}
        highlightedLines={highlightedLines}
        clampMaxHeight={clampMaxHeight === true}
      />
    </div>
  );
};
