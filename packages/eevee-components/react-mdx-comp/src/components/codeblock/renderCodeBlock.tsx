// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import * as React from 'react';
import type { CodeBlockState } from './CodeBlock.types';
import { SandpackCodeViewer, SandpackProvider, SandpackThemeProvider } from '@codesandbox/sandpack-react';
import { CustomTheme } from './themes/index';
/**
 * Render the final JSX of CodeBlock
 */
export const renderCodeBlock = (state: CodeBlockState) => {
  const { rootClasses, children, filename, decorators } = state;

  return (
    <div translate="no" className={rootClasses}>
      <SandpackProvider
        customSetup={{
          entry: filename,
          files: {
            [filename!]: {
              code: children.trimEnd(),
            },
          },
        }}
      >
        <SandpackThemeProvider theme={CustomTheme}>
          <SandpackCodeViewer key={children.trimEnd()} showLineNumbers={false} decorators={decorators} />
        </SandpackThemeProvider>
      </SandpackProvider>
    </div>
  );
};
