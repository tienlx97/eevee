// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as React from 'react';
import { SandpackProvider } from '@codesandbox/sandpack-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SandpackLogLevel } from '@codesandbox/sandpack-client';
import { CustomPreset } from '../custompreset/index';
import { createFileMap } from '../createFileMap/index';

import type { SandpackSetup } from '@codesandbox/sandpack-react';

type SandpackProps = {
  children: React.ReactNode;
  autorun?: boolean;
  setup?: SandpackSetup;
  showDevTools?: boolean;
};

const sandboxStyle = `
* {
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  margin: 20px;
  padding: 0;
}
h1 {
  margin-top: 0;
  font-size: 22px;
}
h2 {
  margin-top: 0;
  font-size: 20px;
}
h3 {
  margin-top: 0;
  font-size: 18px;
}
h4 {
  margin-top: 0;
  font-size: 16px;
}
h5 {
  margin-top: 0;
  font-size: 14px;
}
h6 {
  margin-top: 0;
  font-size: 12px;
}
ul {
  padding-left: 20px;
}
`.trim();

const SandpackRoot = (props: SandpackProps) => {
  const { children, setup, autorun = true, showDevTools = false } = props;
  const [devToolsLoaded, setDevToolsLoaded] = React.useState(false);
  const codeSnippets = React.Children.toArray(children) as React.ReactElement[];
  const isSingleFile = true;

  const files = createFileMap(codeSnippets);

  files['/styles.css'] = {
    code: [sandboxStyle, files['/styles.css']?.code ?? ''].join('\n\n'),
    hidden: true,
  };

  return (
    <div className="sandpack-container my-8" translate="no">
      <SandpackProvider
        template="react"
        customSetup={{ ...setup, files: files }}
        autorun={autorun}
        initMode="user-visible"
        initModeObserverOptions={{ rootMargin: '1400px 0px' }}
        bundlerURL="https://6b760a26.sandpack-bundler.pages.dev"
        logLevel={SandpackLogLevel.None}
      >
        <CustomPreset
          isSingleFile={isSingleFile}
          showDevTools={showDevTools}
          // eslint-disable-next-line react/jsx-no-bind
          onDevToolsLoad={() => setDevToolsLoaded(true)}
          devToolsLoaded={devToolsLoaded}
        />
      </SandpackProvider>
    </div>
  );
};

SandpackRoot.displayName = 'Sandpack';

export default SandpackRoot;
