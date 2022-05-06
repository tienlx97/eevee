/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent, useMemo, useState } from 'react';
import {
  useDuplicateIdWarning,
  useFullscreen,
  usePaneData,
  usePrettier,
} from './Helpers';

import { Pane } from './Pane';

import stylex from '@ladifire-opensource/stylex';
import { RefreshButton } from './Toolbar/RefreshButton';
import DebouncedResult from './Result';

const $1 = stylex.create({
  resultPane: {
    height: '100%',
  },
});

type OwnProps = {
  id: string;
  title?: string;
  html?: string;
  css?: string;
  js?: string;
  mode: string;
  layoutMode: string;
  centered?: boolean;
  boxSizing: string;
  splitRatio: string;
  xstyle: any;
  stacked?: boolean;
  startFullscreened?: boolean;
  cssCode?: string;
};

const Playground: FunctionComponent<OwnProps> = ({
  id,
  title,
  html,
  css,
  js,
  mode = 'default', // 'default' | 'react'
  layoutMode, // codepen, side-by-side, vertical-stack
  centered,
  boxSizing = 'border-box',
  splitRatio = '0.5',
  xstyle = {},
  stacked,
  startFullscreened,
  ...rest
}) => {
  // So, `css` as a prop is taken over by styled-components.
  // In the course platform, this doesn't matter, but it
  // seems to cause problems here.
  if (rest.cssCode) {
    css = rest.cssCode;
  }

  const [htmlCode, setHtmlCode] = useState<string | undefined>(html?.trim());
  const [cssCode, setCssCode] = useState<string | undefined>(css?.trim());
  const [jsCode, setJsCode] = useState<string | undefined>(js?.trim());

  // A "refresh" button allows the user to refresh the results pane.
  // To implement this, we'll set this state to a random value,
  // and use it as the `key` prop for the <Result> component.
  // That way, it forces a remount when it changes.
  const [randomId, setRandomId] = useState('initial');

  const [isFullscreened, toggleFullscreen] = useFullscreen(startFullscreened);

  const handleFormat = usePrettier({
    htmlCode,
    setHtmlCode,
    cssCode,
    setCssCode,
    jsCode,
    setJsCode,
  });

  useDuplicateIdWarning(id);

  // TODO: Do I need to have the ability to display in a custom
  // order?

  /**
   * Create an array of objects
   * {
   *   language: string
   *   label: string
   *   code: string
   *   handleUpdate: (code: string) => void
   * }
   */
  const paneData = usePaneData({
    mode,
    htmlCode,
    setHtmlCode,
    cssCode,
    setCssCode,
    jsCode,
    setJsCode,
  });

  function handleReset() {
    setHtmlCode(html?.trim());
    setCssCode(css?.trim());
    setJsCode(js?.trim());
  }

  const codeMap = useMemo(
    () => ({
      markup: htmlCode,
      css: cssCode,
      javascript: jsCode,
    }),
    [htmlCode, cssCode, jsCode]
  );

  // There are three supported layout modes:
  // side-by-side (1 snippet, 1 result, side by side)
  // codepen (2 snippets side-by-side, 1 result underneath)
  // vertical-stack (2 snippets stacked vertically beside the result)
  // prettier-ignore
  layoutMode = layoutMode || (
    paneData.length === 1
      ? 'side-by-side'
      : 'codepen'
  );

  // Should we stretch the Results pane to fill the available
  // vertical height?
  // We want to do this when it's alone in the column, so it reaches
  // the base of the editor. But in "codepen mode", doing so causes
  // its height to become locked rather than being resizable.
  const stretchResults =
    (isFullscreened as boolean) || layoutMode !== 'codepen';

  const resultPane = (
    <Pane
      actions={
        <RefreshButton
          handleRefresh={() => {
            setRandomId(Math.random().toString());
          }}
        />
      }
      xstyle={[stretchResults && $1.resultPane]}
      title="Result"
    >
      <DebouncedResult
        key={randomId}
        id={id}
        codeMap={codeMap}
        mode={mode}
        centered={centered}
        stretched={stretchResults}
        layoutMode={layoutMode}
        isFullscreened={isFullscreened as boolean}
        boxSizing={boxSizing}
        xstyle={xstyle}
      />
    </Pane>
  );

  let contents;
  if (paneData.length === 0) {
    throw new Error(
      "Couldn't create any panes for the Playground. Be sure to pass at least one of 'html', 'cssCode', or 'js'."
    );
  }

  switch (layoutMode) {
    case 'codepen': {
      const [firstPane, secondPane] = paneData;
    }
  }

  return <></>;
};

export { Playground };
