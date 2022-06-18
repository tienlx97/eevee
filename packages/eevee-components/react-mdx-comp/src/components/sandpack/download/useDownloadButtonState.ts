/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useSandpack } from '@codesandbox/sandpack-react';
import { DownloadButtonState } from './DownloadButton.types';

let supportsImportMap: boolean | void;

const useSupportsImportMap = () => {
  function subscribe() {
    // It never updates.
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }
  function getCurrentValue() {
    if (supportsImportMap === undefined) {
      supportsImportMap = (HTMLScriptElement as any).supports && (HTMLScriptElement as any).supports('importmap');
    }
    return supportsImportMap;
  }
  function getServerSnapshot() {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return React.useSyncExternalStore(subscribe, getCurrentValue, getServerSnapshot);
};

export const useDownloadButtonState = (state: DownloadButtonState): DownloadButtonState => {
  const { sandpack } = useSandpack();
  const supported = useSupportsImportMap();
  if (!supported) {
    throw new Error('Not support');
  }

  const downloadHTML = () => {
    const css = sandpack.files['/styles.css']?.code ?? '';
    const code = sandpack.files['/App.js']?.code ?? '';
    const blob = new Blob([
      `<!DOCTYPE html>
<html>
<body>
  <div id="root"></div>
</body>
<!-- This setup is not suitable for production. -->
<!-- Only use it in development! -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="importmap">
{
  "imports": {
    "react": "https://cdn.skypack.dev/react",
    "react-dom": "https://cdn.skypack.dev/react-dom"
  }
}
</script>
<script type="text/babel" data-type="module">
import * as React from 'react';
import * as ReactDOM from 'react-dom';

${code.replace('export default ', 'let Root = ')}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
</script>
<style>
${css}
</style>
</html>`,
    ]);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'sandbox.html';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  state.root.title = 'Download Sandbox';
  state.root.type = 'button';
  state.root.onClick = downloadHTML;

  return state;
};
